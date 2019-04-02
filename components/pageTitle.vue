<template>
  <h1>{{ title }}</h1>
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

h1 {
  font-weight: normal;
  color: $text-color;
}
</style>
