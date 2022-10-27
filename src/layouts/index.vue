<template lang="pug">
el-container
  HeaderComponent(:headerLists="navLists") Header
  el-main
  Footeromponen Footer
</template>

<script>
import HeaderComponent from "./components/header.vue"
import Footeromponen from "./components/footer.vue"
export default {
  components: {
    HeaderComponent,
    Footeromponen,
  },
  data() {
    return {
      navLists: ["About Me", "Skills", "Proejcts"],
    }
  },
  methods: {
    placeUsers(event) {
      console.log(event.target)
    },
  },
}
</script>

<style lang="scss"></style>
