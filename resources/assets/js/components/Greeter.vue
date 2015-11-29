<style lang="stylus" scoped>
  body
    background-color red
  h1
    color white
</style>

<template lang="jade">
div
  h1 Hello there, {{ name }}?
  input(type="text" v-model="name")
</template>

<script>
  export default {
    data () {
      return {
        name: 'Laracasts'
      }
    }
  }
</script>

