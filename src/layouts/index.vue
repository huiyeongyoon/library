<template lang="pug">
el-container
  HeaderComponent(:headerLists="navLists")
  MainComponent(:leftLists='navLists' :projectData='projectData')
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
      navLists: ["About Me", "Skills", "Proejcts"],
      projectData: [
        {
          name: "project1",
          date: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project2",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project3",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project4",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project5",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project6",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project7",
          date: "2000년 1월1일",
          description: "설명",
          image: "/images/image1.jpg",
        },
        {
          name: "project8",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project9",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project10",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project11",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
        {
          name: "project12",
          date: "2000년 1월1일",
          image: "/images/image1.jpg",
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss"></style>
