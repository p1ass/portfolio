<template>
  <section id="skills" class="skills-wrapper">
    <pageTitle title="Skills" />
    <div class="skills">
      <ul>
        <li v-for="(skill,index) in skills" :key="index">
          {{ skill.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'
export default {
  name: 'Skills',
  components: {
    pageTitle
  },
  data() {
    return {
      skills: [
        { name: 'Golang' },
        { name: 'Python' },
        { name: 'JavaScript (ES6)' },
        { name: 'C' },
        { name: 'Java' },
        { name: 'AWS' },
        { name: 'GitHub' },
        { name: 'Vue.js / Nuxt.js' },
        { name: 'Docker' },
        { name: 'Circle CI' },
        { name: 'Firebase' },
        { name: 'Django' },
        { name: 'GCP' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_mixin.scss';
.skills-wrapper {
  @include section;
}
.skills {
  @include box-wrapper;
}
li {
  width: 100%;
  text-align: left;
  font-size: 16px;
  padding: 4px 0;
}
</style>
