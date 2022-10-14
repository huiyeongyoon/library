<style lang="scss" scoped>
#app {
  min-height: 100%;
  height: 100%;
  min-width: 1280px;
}
</style>

<template lang="pug">
#app
  router-view(:key="key")
</template>

<script>
export default {
  name: "App",
  components: {
    key() {
      return this.$route.path
    },
  },
  mounted() {
    console.log(this.$route.path)
  },
}
</script>
