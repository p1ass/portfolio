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
@mixin notoSans {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
}

@font-face {
  @include notoSans;
  font-family: 'Noto Sans Swap';
  font-display: swap;
}

html {
  font-family: 'Noto Sans Swap';
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
