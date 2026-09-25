// PASSWORD_HASH と SESSION_SECRET に入れる値を作る。パスワードは標準入力から読む。
// 使い方: pnpm hash-password
import { pbkdf2Sync, randomBytes } from 'node:crypto'
import { createInterface } from 'node:readline'

// Workers の PBKDF2 は 100,000 回が上限。
const ITERATIONS = 100_000

const rl = createInterface({ input: process.stdin, output: process.stderr, terminal: false })
process.stderr.write('Password: ')
rl.once('line', (password) => {
  rl.close()
  if (!password) {
    console.error('パスワードが空です')
    process.exit(1)
  }
  const salt = randomBytes(16)
  const hash = pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256')
  console.log(`PASSWORD_HASH=${ITERATIONS}:${salt.toString('hex')}:${hash.toString('hex')}`)
  console.log(`SESSION_SECRET=${randomBytes(32).toString('hex')}`)
})
