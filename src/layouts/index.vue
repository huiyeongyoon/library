<template lang="pug">
  el-container.display-size
    Sidebaromponen Aside
    el-container.is-vertical
      HeaderComponent Header
      MainComponen Main
      Footeromponen Footer
</template>

<script>
import Sidebaromponen from './components/sdiebar.vue'
import HeaderComponent from './components/header.vue'
import MainComponen from './components/main.vue'
import Footeromponen from './components/footer.vue'
export default {
  components: {
    HeaderComponent,
    Sidebaromponen,
    MainComponen,
    Footeromponen,
  }
}
</script>

<style lang="sass">
</style>