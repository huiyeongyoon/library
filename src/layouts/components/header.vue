<template lang="pug">
el-header
  .nav
    ul
      li(v-for="headerList in headerLists") 
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
  methods: {},
}
</script>
<style lang="scss">
.nav {
  ul {
    margin: 0px;
  }
}
</style>
