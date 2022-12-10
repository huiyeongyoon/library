<template lang="pug">
el-main
  .leftSide
    .left-nav
      ul
        li(v-for="leftList in leftLists" @click="movePage(leftList)") 
          h1 {{ leftList }}
    .leftContainer
      ul(v-infinite-scroll="fetchData" infinite-scroll-disabled="disabled")
        li(v-for="(listData, index) in totalListData" @click="fetchList(listData, index)")
          .image-container
            img(:src="listData.image")
          .p-container 
            h1 project name: {{ listData.name }}
            p period: {{ listData.period }}
      p.loadingText(v-if="loading") Loading...
      p.loadingText(v-if="noMore") No more
  .main
    .top
      h1 {{ mainData.name }}
      .top-right
        p period: {{ mainData.period }}
        p ~
        p period: {{ mainData.period }}
      p description: {{ mainData.description }}
    .middle
      .item
        //- el-carousel(:interval="5000" arrow="always" type="card" height="300px" :autoplay="false" indicator-position="none")
          //- el-carousel-item.item__content(v-for="(listData, index) in totalListData" @click="fetchList(listData, index)")
            //- h1 project name: {{ listData.name }}
            //- img.item__image(:src="listData.image")
            //- p period: {{ listData.period }}
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
      defaultListDataCount: 10,
      addedListData: 0,
      mainData: [],
      loading: false,
    }
  },
  mounted() {
    this.fetchData()
    this.fetchList()
  },
  computed: {
    noMore() {
      return this.totalListData.length === this.listData.length
    },
    disabled() {
      return this.loading || this.noMore
    },
  },
  methods: {
    // 추후 수정
    movePage(pageName) {
      if (pageName === "About Me") {
        this.$router.push("/aboutMe")
        console.log("hi1")
      }
      if (pageName === "Skills") {
        this.$router.push("/skills")
      }
      if (pageName === "Projects") {
        this.$router.push("/")
      }
    },
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
  height: 520px;
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
  .loadingText {
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
  }
}
.main {
  display: flex;
  flex-direction: column;
  width: 80%;
  .top {
    height: 36%;
    padding: 100px 0 0 50px;
    h1 {
      margin: 0 0 20px 0;
    }
    .top-right {
      display: flex;
      justify-content: right;
      font-size: 20px;
      p:last-child {
        padding: 0 30px 0 0;
      }
    }
    .top-right + p {
      padding: 0 0 0 20px;
    }
  }
  .middle {
    .item {
      position: relative;
      height: 100%;
    }

    .item__content {
      position: absolute;
      bottom: 0;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 3px;
    }

    .item__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .bottom {
    height: 14%;
  }
}
</style>
