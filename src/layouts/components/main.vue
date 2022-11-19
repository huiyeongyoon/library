<template lang="pug">
el-main
  .leftSide
    .left-nav
      ul
        li(v-for="leftList in leftLists") 
          h1 {{ leftList }}
    .leftContainer
      ul(v-infinite-scroll="fetchData")
        li(v-for="(listData, index) in totalListData" @click="fetchList(listData, index)")
          .image-container
            img(:src="listData.image")
          .p-container 
            h1 project name: {{ listData.name }}
            p period: {{ listData.period }}
  .main
    .top
      h1 {{ mainData.name }}
      p period: {{ mainData.period }}
    .middle 
      h1 {{ mainData.name }}
      p period: {{ mainData.period }}
      img(:src="mainData.image")
    .bottom
      p 사용기술: 
</template>

<script>
export default {
  props: {
    leftLists: {
      type: Array,
      default: () => {},
    },
    listData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      totalListData: [],
      defaultListDataCount: 5,
      addedListData: 0,
      mainData: [],
    }
  },
  mounted() {
    this.fetchData()
    this.fetchList()
  },
  methods: {
    fetchData() {
      let totalListDataCount = this.defaultListDataCount + this.addedListData
      if (this.totalListData.length < this.listData.length) {
        for (let i = this.addedListData; i < totalListDataCount; i++) {
          if (totalListDataCount > this.totalListData.length) {
            if (this.listData[i] !== undefined) {
              this.totalListData.push(this.listData[i])
            }
          }
        }
        this.addedListData += 5
      }
    },
    fetchList(listData) {
      if (listData === undefined) {
        this.mainData = this.totalListData[0]
      }
      if (listData) {
        this.mainData = listData
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
.leftSide::-webkit-scrollbar {
  display: none;
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
