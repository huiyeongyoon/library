<template lang="pug">
el-main
  .leftSide
    .left-nav
      ul
        li(v-for="leftList in leftLists") 
          h1 {{ leftList }}
    .leftContainer
      ul(v-infinite-scroll="load")
        li(v-for="listData in totalListData")
          .image-container
            img(:src="listData.image")
          .p-container 
            h1 project name: {{ listData.name }}
            p terms: {{ listData.date }}
  .main 메인
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
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
        let totalListDataCount = this.defaultListDataCount + this.addedListData
        if(this.totalListData.length < this.listData.length) {
          for (let i = this.addedListData; i < totalListDataCount; i++) {
            if(totalListDataCount > this.totalListData.length) {
              if(this.listData[i] !== undefined) {
                this.totalListData.push(this.listData[i])
              }
            }
          }
        this.addedListData += 5;
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
