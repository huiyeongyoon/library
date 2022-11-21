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
      el-carousel(:interval="5000" arrow="always" type="card" :autoplay="false" indicator-position="none")
        el-carousel-item(v-for="(listData, index) in totalListData" @click="fetchList(listData, index)")
          h1 project name: {{ listData.name }}
          //- img(:src="listData.image")
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
  height: 92%;
}
.leftSide::-webkit-scrollbar {
  display: none;
  height: 92%;
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
.main {
  display: flex;
  flex-direction: column;
  width: 78%;
  .top {
    height: 36%;
    padding: 100px 0 0 50px;
    h1 {
      margin: 0 0 20px 0;
    }
    p {
      padding: 0 0 0 20px;
    }
  }
  .middle {
    height: 32%;
    .el-carousel {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .el-carousel--horizontal {
      overflow-x: hidden;
      height: 100%;
    }

    .el-carousel__container {
      display: flex;
    }

    .el-carousel__item {
    }
    .is-in-stage {
    }
    // .el-carousel__item h1 {
    // }

    .el-carousel__item--card {
    }
    .el-carousel__arrow {
      border: none;
      outline: none;
      padding: 0;
      margin: 0;
      height: 36px;
      width: 36px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 50%;
      background-color: rgba(31, 45, 61, 0.11);
      color: #fff;
      position: absolute;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
      text-align: center;
      font-size: 12px;
    }

    .el-carousel__arrow--left {
      left: 16px;
    }

    .el-carousel__arrow--right {
      right: 16px;
    }

    .el-icon-arrow-right .el-icon-arrow-right {
      cursor: pointer;
    }

    .el-carousel__indicator--horizontal {
      display: inline-block;
      padding: 12px 4px;
    }

    .el-carousel__indicator {
      background-color: transparent;
      cursor: pointer;
    }

    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }

    .el-carousel__indicators {
      position: absolute;
      list-style: none;
      margin: 0;
      padding: 0;
      z-index: 2;
    }
  }
  .bottom {
    height: 14%;
  }
}
</style>
