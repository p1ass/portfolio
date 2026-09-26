# restricted

パスワードを知っている人だけが読めるページを配信する Cloudflare Worker。

表示する Markdown は、非公開の R2 バケット `portfolio-restricted` に置いた `index.md` をリクエストのたびに読み込む。正しいパスワードを入力すると 7 日間有効な Cookie を発行するので、その間はパスワードを入力し直さなくても読める。総当たりを防ぐため、ログインは同じ IP アドレスから 1 分に 5 回までに制限している。IPv6 はアドレスではなく /64 ごとに数える。

## 公開リポジトリで扱ううえでの注意

このリポジトリは公開しているので、コードや設定は誰でも読める。そのため、次のものはリポジトリに入れず、別の場所で管理する。

- 本文の Markdown は R2 バケットに置く。
- パスワードのハッシュと Cookie の署名鍵は、`wrangler secret put` で Worker のシークレットに登録する。
- Cloudflare のアカウント ID と API トークンは `wrangler login` か環境変数で渡し、`wrangler.jsonc` には書かない。

本文をこのディレクトリに置くと、うっかりコミットしてしまうおそれがある。`.gitignore` で README 以外の `*.md` と `.dev.vars`、ローカルの R2 のデータ (`.wrangler`) を除外してはいるが、本文はリポジトリの外で管理すること。

IP アドレスを変えればレート制限は回避できるので、安全性は最終的にパスワードの強さで決まる。そのため `pnpm hash-password` は 16 文字未満のパスワードを受け付けない。何も入力せずに Enter を押すと、24 文字のランダムなパスワードを生成する。

GitHub Actions でデプロイするなら、トリガーは main ブランチへの push だけにする。`pull_request_target` のようにフォークからの PR でもシークレットを使えるトリガーにすると、第三者のコードに API トークンを使われてしまう。

## セットアップ

```sh
pnpm install
pnpm wrangler r2 bucket create portfolio-restricted

pnpm hash-password  # PASSWORD_HASH と SESSION_SECRET を出力する
pnpm wrangler secret put PASSWORD_HASH
pnpm wrangler secret put SESSION_SECRET

pnpm run deploy
```

独自ドメインで公開する場合は、`wrangler.jsonc` の `routes` のコメントを外す。

## 本文を更新する

リポジトリの外で管理している Markdown を R2 にアップロードする。Worker は毎回 R2 から読み込むので、デプロイし直さなくてもすぐに反映される。

```sh
pnpm wrangler r2 object put portfolio-restricted/index.md --file ~/path/to/index.md --remote
```

## パスワードを変更する

`pnpm hash-password` で新しい `PASSWORD_HASH` を作り、`pnpm wrangler secret put PASSWORD_HASH` で登録し直す。パスワードを変えると、ログイン中の人は全員ログアウトされる。

## ローカルで動かす

```sh
node scripts/hash-password.mjs > .dev.vars  # .dev.vars は .gitignore で除外している
pnpm wrangler r2 object put portfolio-restricted/index.md --file ~/path/to/index.md --local
pnpm dev
```
