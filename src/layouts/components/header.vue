<template lang="pug">
el-header
  .nav
    ul
      li(v-for="headerList in headerLists" @click="placeUsers") 
        span {{ headerList }}
</template>

<script>
export default {
  props: {
    headerLists: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    placeUsers(event) {
      console.log(event.target)
    },
  },
}
</script>
<style lang="scss"></style>
