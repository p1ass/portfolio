<template>
  <div>
    <myHeader />
    <nuxt />
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'

export default {
  components: {
    myHeader
  }
}
</script>


<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', YuGothic,
    'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo,
    sans-serif;
}

body {
  margin: 0;
}

a:link {
  color: #0044cc;
}
</style>
