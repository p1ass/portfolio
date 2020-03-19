<template>
  <section id="skills" class="skills-wrapper">
    <pageTitle title="Skills" />
    <div class="skills">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
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
        { name: 'Go' },
        { name: 'Python' },
        { name: 'JavaScript (ES6)' },
        { name: 'C' },
        { name: 'Vue.js / Nuxt.js' },
        { name: 'GCP' },
        { name: 'GitHub' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Terraform' },
        { name: 'Circle CI' },
        { name: 'Firebase' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';
.skills-wrapper {
  @include section;
  // flex-direction: row-reverse;
  background-color: $background-color1;
}
.skills {
  @include box-wrapper;
  width: 100%;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 670px) {
    grid-template-columns: 200px;
  }
}

li {
  width: 100%;
  text-align: left;
  font-size: 16px;
  padding: 8px 0;
  color: $text-color;
}
</style>
