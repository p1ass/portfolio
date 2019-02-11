<template>
  <section class="box">
    <h2>{{ item.name }}</h2>
    <p class="box-content">
      {{ item.content }}
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

.box {
  @include box-shadow;
  @include box(300px, 300px);
}

@media (max-width: 1000px) {
  .box {
    @include box-smartphone(260px, 320px);
  }
}

h2 {
  @include box-title;
}

.box-content {
  @include box-content;
}

.sub-content {
  @include box-sub-content;
}
</style>
