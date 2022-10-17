<template lang="pug">
el-container.display-size
  el-container.is-vertical
    HeaderComponent Header
    MainComponen Main
    Footeromponen Footer
</template>

<script>
import HeaderComponent from "./components/header.vue"
import MainComponen from "./components/main.vue"
import Footeromponen from "./components/footer.vue"
export default {
  components: {
    HeaderComponent,
    MainComponen,
    Footeromponen,
  },
}
</script>

<style lang="sass"></style>
