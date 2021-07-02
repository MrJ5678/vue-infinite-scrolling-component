<!--
 * @Author: hhhhhq
 * @Date: 2021-07-02 17:20:22
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-02 17:22:44
 * @Description: file content
-->
<template>
  <div class="post">
    <h2>{{ post.author }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>

<style scoped>
.post {
  background: #fff;
  padding: 1.5em;
}

.post:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

.post h2 {
  font-size: 1.3em;
  padding-bottom: 0.25rem;
}
</style>
