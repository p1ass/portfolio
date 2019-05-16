<template>
  <div>
    <myHeader />
    <transition name="page-fade" mode="out-in">
      <nuxt />
    </transition>
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
  margin: 0px;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}

a:link {
  color: #0044cc;
}
</style>
