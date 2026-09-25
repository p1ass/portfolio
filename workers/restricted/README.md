# restricted

パスワードを知っている人だけに Markdown を表示する Cloudflare Worker。

- 本文は非公開の R2 バケット `restricted` の `index.md` から読む。リポジトリには置かない。
- パスワードが合うと、署名付きの Cookie (7 日間有効) を発行する。
- ログインの試行は同じ IP から 1 分に 5 回まで。

## 初回のセットアップ

```sh
pnpm install
pnpm wrangler r2 bucket create restricted

pnpm hash-password  # パスワードを入力すると PASSWORD_HASH と SESSION_SECRET が出る
pnpm wrangler secret put PASSWORD_HASH
pnpm wrangler secret put SESSION_SECRET

pnpm run deploy
```

独自ドメインで公開するときは、`wrangler.jsonc` の `routes` のコメントを外す。

## 本文の更新

```sh
pnpm wrangler r2 object put restricted/index.md --file ./index.md --remote
```

R2 から毎回読むので、デプロイし直さなくてもすぐ反映される。

パスワードを変えるときは `pnpm hash-password` の `PASSWORD_HASH` を入れ直す。ログイン中の人は全員ログアウトになる。

## ローカルで動かす

```sh
pnpm hash-password > .dev.vars
pnpm wrangler r2 object put restricted/index.md --file ./index.md --local
pnpm dev
```
