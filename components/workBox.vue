<template>
  <div class="work-box">
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      <h2>{{ item.name }}</h2>
    </a>
    <p class="box-content">
      {{ item.content }}
    </p>
    <p class="sub-content">
      {{ item.subContent }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'WorkBox',
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

.work-box {
  @include box-shadow;
  @include box(300px, 300px);
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
