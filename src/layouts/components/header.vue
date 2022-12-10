<template lang="pug">
el-header
  .nav
    ul
      li(v-for="headerList in headerLists" @click="movePage(headerList)") 
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
    // 추후 수정
    movePage(pageName) {
      if (pageName === "About Me") {
        this.$router.push("/aboutMe")
        console.log("hi1")
      }
      if (pageName === "Skills") {
        this.$router.push("/skills")
      }
      if (pageName === "Projects") {
        this.$router.push("/")
      }
    },
  },
}
</script>
<style lang="scss">
.nav {
  ul {
    margin: 0px;
  }
}
</style>
