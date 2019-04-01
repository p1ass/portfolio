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
import WebFont from 'webfontloader'

WebFont.load({
  custom: {
    families: ['Noto Sans JP'],
    urls: ['https://fonts.googleapis.com/css?family=Noto+Sans+JP']
  }
})

export default {
  components: {
    myHeader
  }
}
</script>


<style lang="scss">
.wf-active {
  font-family: 'Noto Sans JP';
}

.wf-loading,
.wf-inactive {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', Meiryo,
    メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
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
</style>
