<template>
  <section class="post">
    <a :href="item.url" target="_blank" rel="noopener noreferrer">
      <h2>{{ item.title }}</h2>
    </a>
    <p class="post-content">
      {{ item.summary }}...
    </p>
    <p class="sub-content">
      <slot />
    </p>
  </section>
</template>

<script>
export default {
  name: 'Box',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.post {
  @include box-shadow;
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  padding-bottom: 32px;
  border-radius: 30px;
  position: relative;
  width: 90%;
}

h2 {
  @include box-title;
}

.post-content {
  @include box-content;
}

.sub-content {
  @include box-sub-content;
}
</style>
