<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';

.title {
  font-weight: normal;
  color: $text-color;
  font-size: 48px;
  width: 33%;
  margin: 0;
  top: 50px;
}

@media (max-width: 1250px) {
  .title {
    padding: 16px 0;
    font-size: 36px;
    width: 100%;
  }
}
</style>
