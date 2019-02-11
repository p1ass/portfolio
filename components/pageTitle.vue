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
h1 {
  font-weight: normal;
}
</style>
