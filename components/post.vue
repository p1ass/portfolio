<template>
  <div class="post">
    <p class="date">
      {{ date }}
    </p>
    <a :href="item.url" target="_blank" rel="noopener noreferrer">
      <h2>{{ item.title }}</h2>
    </a>
  </div>
</template>

<script>
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
export default {
  name: 'Box',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    date: function() {
      return format(parseISO(this.item.date_published), 'yyyy.MM.dd')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.post {
  @include box-shadow;
  margin: 20px;
  padding-bottom: 16px;
  border-radius: 30px;
  width: 40%;

  @media (max-width: 670px) {
    width: 100%;
  }
}

.date {
  margin-bottom: 0px;
  color: $text-color;
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
