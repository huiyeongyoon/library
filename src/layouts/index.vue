<template lang="pug">
el-container
  HeaderComponent Header
  el-main Main
    p.a 1
    p.b 2
    p.c 3
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
}
</script>

<style lang="scss">
p {
  height: 100vh;
  border: 1px solid;
}
</style>
