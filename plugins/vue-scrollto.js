import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 600,
  easing: [0, 0.4, 0.1, 1],
  offset: -120
})
