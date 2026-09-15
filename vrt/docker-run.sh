#!/usr/bin/env bash
# ホストが macOS だとヒラギノで描画されて CI と一致しないので、CI と同じイメージの中でビルドから撮影までを行う。
set -euo pipefail

IMAGE="mcr.microsoft.com/playwright:v1.63.0-noble"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# node_modules と .next はプラットフォーム依存のバイナリを含むので、コンテナ用のボリュームに分ける。arm64 だと基準画像と一致しないことがあるので、CI と同じ amd64 で動かす。
docker run --rm --platform linux/amd64 \
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
    # 別の版の pnpm で入れると pnpm-lock.yaml が書き換わる。
    corepack enable
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 corepack prepare pnpm@10.8.0 --activate
    pnpm config set store-dir /pnpm-store
    pnpm install --frozen-lockfile
    ./vrt/install-fonts.sh
    pnpm build
    pnpm exec playwright test $*
  "
