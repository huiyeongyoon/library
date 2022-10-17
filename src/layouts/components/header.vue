<template lang="pug">
el-header
  h1 Portfolio
  .nav
    ul
      li.topMenu(v-for="headerList in headerLists" @click="placeUsers") 
        span {{ headerList }}
</template>

<script>
export default {
  data() {
    return {
      headerLists: ["About Me", "Skills", "Proejcts"],
      place: null,
    }
  },
  methods: {
    placeUsers(event) {
      console.log(event.target)
    },
  },
}
</script>

<style lang="scss">
.topMenu span:hover {
  color: #00ff00;
  text-decoration: underline;
  text-underline-position: under;
  transition: 0.5s;
}
</style>
