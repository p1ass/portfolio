// /restricted のパスワードから RESTRICTED_PASSWORD_HASH に入れる値を作る。
// 使い方: node scripts/hash-restricted-password.mjs  (パスワードは標準入力から読む)
import { randomBytes, scryptSync } from 'node:crypto'
import { createInterface } from 'node:readline'

const rl = createInterface({ input: process.stdin, output: process.stderr, terminal: false })
process.stderr.write('Password: ')
rl.once('line', (password) => {
  rl.close()
  if (!password) {
    console.error('パスワードが空です')
    process.exit(1)
  }
  const salt = randomBytes(16)
  const hash = scryptSync(password, salt, 64)
  console.log(`RESTRICTED_PASSWORD_HASH=${salt.toString('hex')}:${hash.toString('hex')}`)
  console.log(`RESTRICTED_SESSION_SECRET=${randomBytes(32).toString('hex')}`)
})
