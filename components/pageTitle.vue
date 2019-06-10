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
  width: 30%;
  margin: 0 5%;
  top: 50px;
}

.title:after {
  display: block;
  height: 2px;
  content: '';
  background: linear-gradient(
    to right,
    rgba(47, 128, 237, 0.7) 0%,
    rgba(86, 204, 242, 0.7) 100%
  );
}
@media (max-width: 1250px) {
  .title {
    padding: 16px 0 32px 0;
    font-size: 36px;
    width: 100%;
    margin: 0 15%;
  }
}

@media (max-width: 670px) {
  .title {
    margin: 0 10vw;
  }
}
</style>
