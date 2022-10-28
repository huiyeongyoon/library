<template lang="pug">
el-main
  .leftSide
    .left-nav
      ul
        li(v-for="leftList in leftLists") 
          h1 {{ leftList }}
    .leftContainer
      ul(v-infinite-scroll="load")
        li(v-for="projectData in totalProjectData")
          .image-container
            img(:src="projectData.image")
          .p-container 
            h1 project name: {{ projectData.name }}
            p terms: {{ projectData.date }}
  .main 메인
</template>

<script>
export default {
  props: {
    leftLists: {
      type: Array,
      default: () => {},
    },
    projectData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      totalProjectData: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      let times = 1
      let count = 4 * times
      if (this.projectData.length !== count) {
        for (let i = 0; i < count; i++) {
          this.totalProjectData.push(this.projectData[i])
        }
        times + 1
      }
    },
  },
}
</script>

<style lang="scss">
.leftSide {
  overflow: auto;
  height: 100%;
}
.left-nav {
  ul {
    margin: 20px 0;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
}
.leftContainer {
  ul {
    padding: 0 50px;
    li {
      align-items: center;
      h1 {
        font-size: 16px;
      }
      display: flex;
      img {
        width: 100px;
        height: 100px;
        padding: 0 20px 0 0;
      }
    }
    .p-container {
      h1 {
        padding: 5px 0;
      }
      p {
        padding: 5px 0;
      }
    }
  }
}
</style>
