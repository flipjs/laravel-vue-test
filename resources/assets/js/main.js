'use strict'
const Vue = require('vue')

import Greeter from './components/Greeter.vue'

new Vue({
  el: '#app',

  components: { Greeter },

  ready () {
    window.alert('Vue and Vueify all set to go! Hell yeah!')
  }
})

