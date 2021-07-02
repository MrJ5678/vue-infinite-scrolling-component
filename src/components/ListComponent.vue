<!--
 * @Author: hhhhhq
 * @Date: 2021-07-02 17:23:22
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-02 17:52:28
 * @Description: file content
-->
<template>
  <div class="scrolling-component" ref="scrollComponent">
    <post-component v-for="(post, index) in posts" :post="post" :key="index" />
  </div>
</template>

<script>
import getPosts from "../api/get-posts"
import PostComponent from "./Post.vue"
import { ref, onMounted, onUnmounted, handleError } from "vue"

export default {
  components: {
    PostComponent,
  },
  setup() {
    const posts = ref(getPosts(10))
    const scrollComponent = ref(null)

    const loadMorePosts = () => {
      let newPosts = getPosts(10)
      posts.value.push(...newPosts)
    }

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    const handleScroll = e => {
      let element = scrollComponent.value
      // console.log(element.getBoundingClientRect().bottom)
      // console.log(window.innerHeight)
      if (element.getBoundingClientRect().bottom <= window.innerHeight) {
        // console.log("object")
        loadMorePosts()
      }
    }

    return {
      posts,
      scrollComponent,
    }
  },
}
</script>
