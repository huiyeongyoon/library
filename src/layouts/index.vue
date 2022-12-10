<template lang="pug">
el-container
  HeaderComponent(:headerLists="navLists")
  MainComponent(:leftLists='navLists' :listData='listData')
  Footeromponen Footer
</template>

<script>
import HeaderComponent from "./components/header.vue"
import MainComponent from "./components/main.vue"
import Footeromponen from "./components/footer.vue"
export default {
  components: {
    HeaderComponent,
    MainComponent,
    Footeromponen,
  },
  data() {
    return {
      navLists: ["About Me", "Skills", "Projects"],
      listData: [
        {
          name: "project1",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project2",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project3",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project4",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project5",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project6",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project7",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project8",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project9",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project10",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project11",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project12",
          period: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss"></style>
