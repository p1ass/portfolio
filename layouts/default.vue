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
html {
  font-family: 'Noto Sans JP';
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
