// PASSWORD_HASH と SESSION_SECRET に入れる値を作る。
// 使い方: pnpm hash-password
//   何も入力せずに Enter を押すと、推測されにくいパスワードを作って表示する。
//
// コードは公開リポジトリにあるので、守りはパスワードの強さだけに頼る。
// レート制限は IP を変えれば回避できるので、短いパスワードは受け付けない。
import { pbkdf2Sync, randomBytes, randomInt } from 'node:crypto'
import { createInterface } from 'node:readline'

// Workers の PBKDF2 は 100,000 回が上限。
const ITERATIONS = 100_000
const MIN_LENGTH = 16
// 読み間違えやすい 0/O/1/l/I を除く。
const ALPHABET = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const GENERATED_LENGTH = 24

const generatePassword = () =>
  Array.from({ length: GENERATED_LENGTH }, () => ALPHABET[randomInt(ALPHABET.length)]).join('')

const rl = createInterface({ input: process.stdin, output: process.stderr, terminal: false })
process.stderr.write(`Password (${MIN_LENGTH} 文字以上。空なら自動で作る): `)
rl.once('line', (input) => {
  rl.close()
  let password = input
  if (!password) {
    password = generatePassword()
    console.error(`\n作ったパスワード: ${password}\n(閲覧者に伝える値。どこにも保存されないので控えておく)\n`)
  } else if (password.length < MIN_LENGTH) {
    console.error(`${MIN_LENGTH} 文字以上にしてください`)
    process.exit(1)
  }
  const salt = randomBytes(16)
  const hash = pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256')
  console.log(`PASSWORD_HASH=${ITERATIONS}:${salt.toString('hex')}:${hash.toString('hex')}`)
  console.log(`SESSION_SECRET=${randomBytes(32).toString('hex')}`)
})
