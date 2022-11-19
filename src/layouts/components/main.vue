<template lang="pug">
el-main
  .leftSide
    .left-nav
      ul
        li(v-for="leftList in leftLists") 
          h1 {{ leftList }}
    .leftContainer
      ul(v-infinite-scroll="fetchData" infinite-scroll-disabled="disabled")
        li(v-for="(listData, index) in totalListData" @click="fetchList(listData, index)")
          .image-container
            img(:src="listData.image")
          .p-container 
            h1 project name: {{ listData.name }}
            p period: {{ listData.period }}
      p(v-if="loading") Loading...
      p(v-if="noMore") No more
  .main
    .top
      h1 {{ mainData.name }}
      p period: {{ mainData.period }}
    .middle
      //- el-carousel(:interval="1000" arrow="always") 
        //- el-carousel-item(v-for=" item in listData")
          //- p {{ item }} 
          //- .image-container
          //-   img(:src="item.image")
          //- .p-container 
          //-   h1 project name: {{ item.name }}
          //-   p period: {{ item.period }}
      
      //- ul(v-infinite-scroll="fetchData" infinite-scroll-disabled="disabled")
      //-     li(v-for="(listData, index) in totalListData" @click="fetchList(listData, index)")
      //-       .image-container
      //-         img(:src="listData.image")
      //-       .p-container 
      //-         h1 project name: {{ listData.name }}
      //-         p period: {{ listData.period }}
    .bottom
      p xxxxx: aaaa bbb cccc
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
      defaultListDataCount: 10,
      addedListData: 0,
      mainData: [],
      loading: false
    }
  },
  mounted() {
    this.fetchData()
    this.fetchList()
  },
  computed: {
      noMore () {
        return this.totalListData.length === this.listData.length
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        let totalListDataCount = this.defaultListDataCount + this.addedListData
        if (this.totalListData.length < this.listData.length) {
          for (let i = this.addedListData; i < totalListDataCount; i++) {
            if (totalListDataCount > this.totalListData.length) {
              if (this.listData[i] !== undefined) {
                this.totalListData.push(this.listData[i])
              }
            }
          }
          this.addedListData += 10
        }
          this.loading = false
        }, 500)
    },
    fetchList(currentData) {
      this.mainData = this.listData[0]
      if (currentData) {
        this.mainData = currentData
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
  .main {
    .middle {
      // .el-carousel__item h3 {
      //   color: #475669;
      //   font-size: 18px;
      //   opacity: 0.75;
      //   line-height: 300px;
      //   margin: 0;
      // }
    }
  }
  p {
    text-align: center;
    font-size: 15px;
    padding: 20px;
  }
}
</style>
