<template>
  <main>
    <section id="top" class="top-wrapper">
      <h1>{{ msg }}</h1>
      <div class="share" />
    </section>
    <about />
    <experiences />
    <works />
    <languages />
    <skills />
    <posts />
  </main>
</template>

<script>
import About from '@/containers/about'
import Experiences from '@/containers/experiences'
import Works from '@/containers/works'
import Posts from '@/containers/posts'
import Languages from '@/containers/languages'
import Skills from '@/containers/skills'

export default {
  name: 'Top',
  components: { About, Works, Posts, Languages, Skills, Experiences },
  head() {
    return {
      title: `Naoki Kishi's Portfolio`,
      titleTemplate: ``
    }
  },

  data() {
    return {
      msg: "Welcome to Naoki Kishi's Portfolio Site"
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_size.scss';

.top-wrapper {
  margin-top: $header-height_pc;
  background: linear-gradient(to left, $main-color-1 0%, $main-color-2 100%);
  text-align: center;
  padding: 30vh 0;
}

h1 {
  // padding-top: 40vh;
  font-size: 50px;
  color: white;
  letter-spacing: 3px;
  font-weight: normal;
  border-bottom: 1px solid white;
  padding-right: 20px;
  padding-left: 20px;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

h3 {
  color: white;
  font-weight: normal;
  font-size: 25px;
  margin-top: 200px;
}

.share {
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  display: block;
}
.button {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100px;
  display: inline-block;
  margin: 20px;
  margin-top: 0px;
  transition: all 0.3s;

  &:hover {
    background-color: darken(white, 10%);
  }
}

.fa {
  color: rgba(0, 0, 0, 0.4);
  font-size: 40px;
  line-height: 100px;
}

/* タブレット */
@media (max-width: 1100px) {
  .top-wrapper {
    margin-top: $header-height_tablet;
  }
  h1 {
    font-size: 40px;
  }
}
/* スマートフォン */
@media (max-width: 670px) {
  .top-wrapper {
    padding: 20vh 0;
    margin-top: $header-height_sp;
    background: linear-gradient(
      to bottom,
      $main-color-1 0%,
      $main-color-2 100%
    );
  }

  .share {
    position: relative;
  }
  h1 {
    padding-top: 10vh;
    font-size: 30px;
  }

  h3 {
    margin-top: 100px;
    margin-bottom: 10px;
  }
  .button {
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }

  .fa {
    line-height: 70px;
  }
}
</style>
