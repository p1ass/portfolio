#!/usr/bin/env bash
set -euo pipefail

VRT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FONT_DIR="$(cd "${VRT_DIR}/../fonts" && pwd)"

install -d /usr/share/fonts/truetype/gen-interface-jp
cp "${FONT_DIR}"/*.ttf /usr/share/fonts/truetype/gen-interface-jp/

install -d /etc/fonts/conf.d
cp "${VRT_DIR}/local.conf" /etc/fonts/local.conf

fc-cache -f > /dev/null

# 解決先が崩れると基準画像が丸ごと変わるので、ここで確かめて止める。
resolved="$(fc-match -f '%{family}' 'sans-serif:lang=ja')"
if [ "${resolved}" != "Gen Interface JP" ]; then
  echo "sans-serif が Gen Interface JP に解決されない: ${resolved}" >&2
  exit 1
fi
echo "フォント: sans-serif -> ${resolved}"
