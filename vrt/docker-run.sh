#!/usr/bin/env bash
# ホストが macOS だとヒラギノで描画されて CI と一致しないので、CI と同じイメージの中でビルドから撮影までを行う。
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLAYWRIGHT_VERSION="$(node -p 'require(process.argv[1]).devDependencies["@playwright/test"]' "${REPO_ROOT}/package.json")"
IMAGE="mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble"

# node_modules と .next はプラットフォーム依存のバイナリを含むので、コンテナ用のボリュームに分ける。アーキテクチャで描画が変わるので、CI と同じ arm64 で動かす。
docker run --rm --platform linux/arm64 \
  -v "${REPO_ROOT}:/work" \
  -v portfolio-vrt-node-modules:/work/node_modules \
  -v portfolio-vrt-next:/work/.next \
  -v portfolio-vrt-pnpm-store:/pnpm-store \
  -w /work \
  -e CI=1 \
  -e NEXT_TELEMETRY_DISABLED=1 \
  -e PNPM_HOME=/pnpm \
  -e PATH=/pnpm:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
  "${IMAGE}" \
  bash -c "
    set -euo pipefail
    # 別のバージョンの pnpm で入れると pnpm-lock.yaml が書き換わる。
    npm install -g --silent pnpm@10.8.0
    pnpm config set store-dir /pnpm-store
    pnpm install --frozen-lockfile
    ./vrt/install-fonts.sh
    pnpm build
    pnpm exec playwright test $*
  "
