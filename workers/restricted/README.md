# restricted

パスワードを知っている人だけに Markdown を表示する Cloudflare Worker。

- 本文は非公開の R2 バケット `portfolio-restricted` の `index.md` から読む。リポジトリには置かない。
- パスワードが合うと、署名付きの Cookie (7 日間有効) を発行する。
- ログインの試行は同じ IP (IPv6 は /64) から 1 分に 5 回まで。

## 公開リポジトリでの前提

このリポジトリは公開しているので、コードや設定は読まれる前提で作っている。守りはコードを隠すことではなく、次の値を外に置くことに頼る。

| 何を | どこに置くか |
| --- | --- |
| 本文 (Markdown) | 非公開の R2 バケット。リポジトリの外で管理する |
| パスワードのハッシュ、Cookie の署名鍵 | Worker のシークレット (`wrangler secret put`) |
| Cloudflare の account_id、API トークン | `wrangler login` の状態か環境変数。リポジトリには書かない |

気をつけること:

- **本文をこのディレクトリに置かない。** 誤ってコミットしないよう、`.gitignore` で README 以外の `*.md`、`.dev.vars`、ローカルの R2 (`.wrangler`) を除外している。
- **パスワードは長くする。** レート制限は IP を変えれば回避できるので、実際の守りはパスワードの強さになる。`pnpm hash-password` は 16 文字未満を受け付けず、空のまま Enter を押すと 24 文字のランダムなパスワードを作る。
- **GitHub Actions からデプロイする場合は `push` (main) だけを契機にする。** `pull_request_target` などフォークの PR でシークレットが使える契機にすると、他人のコードで API トークンを使われる。

## 初回のセットアップ

```sh
pnpm install
pnpm wrangler r2 bucket create portfolio-restricted

pnpm hash-password  # PASSWORD_HASH と SESSION_SECRET が出る
pnpm wrangler secret put PASSWORD_HASH
pnpm wrangler secret put SESSION_SECRET

pnpm run deploy
```

独自ドメインで公開するときは、`wrangler.jsonc` の `routes` のコメントを外す。

## 本文の更新

本文はリポジトリの外で管理し、そこから R2 に上げる。

```sh
pnpm wrangler r2 object put portfolio-restricted/index.md --file ~/path/to/index.md --remote
```

R2 から毎回読むので、デプロイし直さなくてもすぐ反映される。

パスワードを変えるときは `pnpm hash-password` の `PASSWORD_HASH` を入れ直す。ログイン中の人は全員ログアウトになる。

## ローカルで動かす

```sh
node scripts/hash-password.mjs > .dev.vars  # .dev.vars は .gitignore 済み
pnpm wrangler r2 object put portfolio-restricted/index.md --file ~/path/to/index.md --local
pnpm dev
```
