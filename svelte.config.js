// Svelte x TypeScript の環境で ESLint, prettier を動かすためのパッチ
const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess()
}
