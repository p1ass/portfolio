/* eslint-disable no-undef */
// Svelte x TypeScript の環境で ESLint, prettier を動かすためのパッチ
const esTree = require('@typescript-eslint/typescript-estree')
const debugMain = require('debug')('eslint:svelte-preprocess:main')
const debugWorker = require('debug')('eslint:svelte-preprocess:worker')
const sveltePreprocess = require('svelte-preprocess')
const svelteCompiler = require('svelte/compiler')
const tty = require('tty')
const { SHARE_ENV, Worker, isMainThread, parentPort, workerData } = require('worker_threads')

const mainThread = () => {
  // Workaround for colored logs in the worker thread
  if (tty.isatty(process.stderr.fd)) {
    process.env.DEBUG_COLORS = 'true'
  }

  const isRunningWithinCli = !process.argv.includes('--node-ipc')
  const isDoneBuffer = new SharedArrayBuffer(4)
  const isDoneView = new Int32Array(isDoneBuffer)
  const dataBuffer = new SharedArrayBuffer(50 * 1024 * 1024)
  const dataView = new Uint8Array(dataBuffer)
  const dataLengthBuffer = new SharedArrayBuffer(4)
  const dataLengthView = new Uint32Array(dataLengthBuffer)
  const worker = new Worker(__filename, {
    env: SHARE_ENV,
    workerData: [isDoneView, dataView, dataLengthView]
  })

  let lastResult

  return (autoPreprocessConfig) => {
    return (src, filename) => {
      debugMain(`Asking worker to preprocess ${filename}`)
      worker.postMessage({
        src,
        filename,
        autoPreprocessConfig
      })
      debugMain('Locking thread to wait for worker')
      const waitResult = Atomics.wait(isDoneView, 0, 0, 5000)
      Atomics.store(isDoneView, 0, 0)
      debugMain(`Unlocked: ${waitResult}`)

      try {
        const textDecoder = new TextDecoder()
        const decoded = textDecoder.decode(dataView.subarray(0, dataLengthView[0])) // prettier-ignore
        const result = JSON.parse(decoded)
        debugMain('Finished')
        lastResult = result
        return result
      } catch (error) {
        debugMain('No result obtained; finished with last result')
        return lastResult
      } finally {
        if (isRunningWithinCli) {
          setTimeout(() => {
            debugMain('Terminating worker')
            worker.terminate()
          })
        }
      }
    }
  }
}

const workerThread = () => {
  parentPort.on('message', async ({ src, filename, autoPreprocessConfig }) => {
    const result = await preprocess({
      src,
      filename,
      autoPreprocessConfig
    })
      .then((result) => {
        debugWorker(`Preprocessed ${filename}`)
        return result
      })
      .catch((error) => {
        debugWorker('Failed to preprocess:', error)
        return null
      })

    const [isDoneView, dataView, dataLengthView] = workerData
    const textEncoder = new TextEncoder()
    const encodedResult = textEncoder.encode(result ? JSON.stringify(result) : '') // prettier-ignore
    dataView.set(encodedResult, 0)
    dataLengthView[0] = encodedResult.length
    Atomics.store(isDoneView, 0, 1)
    Atomics.notify(isDoneView, 0)
  })
}

const preprocess = async ({ src, filename, autoPreprocessConfig }) => {
  let instance
  let markup
  let module
  let style

  const result = await svelteCompiler.preprocess(
    src,
    [
      {
        markup: ({ content }) => {
          markup = {
            original: content
          }
        },
        script: ({ content, attributes }) => {
          if (
            attributes.lang === 'ts' ||
            attributes.lang === 'typescript' ||
            attributes.type === 'text/typescript'
          ) {
            const ast = esTree.parse(content, { loc: true })
            const obj = {
              ast,
              original: content,
              ext: 'ts'
            }
            if (attributes.context) {
              module = obj
            } else {
              instance = obj
            }
          }
        },
        style: ({ content }) => {
          style = {
            original: content
          }
        }
      },
      sveltePreprocess(autoPreprocessConfig),
      {
        markup: ({ content }) => {
          if (markup) {
            markup.result = content
            markup.diff = markup.original.length - content.length
          }
        },
        script: ({ content, attributes }) => {
          const obj = attributes.context ? module : instance
          if (obj) {
            obj.result = content
            obj.diff = obj.original.length - content.length
          }
        },
        style: ({ content }) => {
          if (style) {
            style.result = content
            style.diff = style.original.length - content.length
          }
        }
      }
    ],
    { filename: filename || 'unknown' }
  )

  return {
    ...result,
    instance,
    markup,
    module,
    style
  }
}

if (isMainThread) {
  module.exports = mainThread()
} else {
  workerThread()
}
