---
version: alpha
name: p1ass's portfolio
description: 経歴と実績を拾い読みで伝えるための、ブログと同じ 1 色相の配色と等比のフォントサイズ
colors:
  # プリミティブ: neutral (色相 216 度)
  neutral-0: "#ffffff"
  neutral-50: "#f9f9fa"
  neutral-100: "#eaeaea"
  neutral-200: "#dde0e4"
  neutral-300: "#c0c6ce"
  neutral-400: "#8d97a5"
  neutral-500: "#636e7d"
  neutral-600: "#535a65"
  neutral-700: "#42464c"
  neutral-800: "#303233"
  neutral-900: "#1e2126"
  neutral-950: "#0f1114"
  # プリミティブ: accent (色相 215 度)
  accent-400: "#578edb"
  accent-500: "#255fb1"
  # セマンティック
  primary: "{colors.accent-500}"
  secondary: "{colors.neutral-500}"
  neutral: "{colors.neutral-0}"
  text: "{colors.neutral-900}"
  text-muted: "{colors.neutral-500}"
  brand-surface: "{colors.accent-500}"
  text-on-brand: "{colors.neutral-0}"
  accent: "{colors.accent-500}"
  accent-muted: "{colors.accent-400}"
  border: "{colors.neutral-200}"
  surface: "{colors.neutral-0}"
  surface-subtle: "{colors.neutral-50}"
typography:
  h1:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.4
  h2:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.4
  h3:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
  h4:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.9
  body-sm:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.25
  caption:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.25
  date:
    fontFamily: Hiragino Kaku Gothic ProN
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 1px
rounded:
  sm: 4px
  md: 8px
  full: 9999px
spacing:
  2xs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  gutter: 16px
  content-width: 1024px
  breakpoint-sm: 640px
  breakpoint-lg: 1080px
components:
  link-body:
    textColor: "{colors.accent}"
  link-body-hover:
    textColor: "{colors.accent}"
    backgroundColor: "{colors.surface-subtle}"
  section-title:
    textColor: "{colors.accent}"
    typography: "{typography.h1}"
  date:
    textColor: "{colors.text-muted}"
    typography: "{typography.date}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-title:
    textColor: "{colors.text}"
    typography: "{typography.body}"
  card-hover:
    backgroundColor: "{colors.surface-subtle}"
  hashtag:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xs}"
  block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  aside:
    backgroundColor: "{colors.brand-surface}"
    textColor: "{colors.text-on-brand}"
    typography: "{typography.h1}"
  status-current:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  status:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  profile-icon:
    rounded: "{rounded.full}"
    padding: "{spacing.xl}"
