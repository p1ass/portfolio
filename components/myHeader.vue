<template>
  <header>
    <div class="link">
      <nuxt-link to="/">
        Top
      </nuxt-link>
      <nuxt-link to="/about">
        About
      </nuxt-link>
      <nuxt-link to="/works">
        Works
      </nuxt-link>
      <nuxt-link to="/posts">
        Posts
      </nuxt-link>
      <nuxt-link to="/languages">
        Languages
      </nuxt-link>
      <nuxt-link to="/frameworks">
        Frameworks
      </nuxt-link>
      <div class="clear" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_color.scss';

header {
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0px;
  z-index: 10;
}

a {
  height: 7vh;
  line-height: 7vh;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: black;
  text-decoration: none;
  width: 150px;
  display: inline-block;

  &:hover {
    background-color: darken(white, 5%);
  }
}

.clear {
  clear: left;
}
/* タブレット */
@media (max-width: 1000px) {
  a {
    width: 30%;
    height: 60px;
    line-height: 60px;
  }
}

/* スマートフォン */
@media (max-width: 670px) {
  a {
    width: 40%;
    height: 35px;
    line-height: 35px;
  }
}
</style>
