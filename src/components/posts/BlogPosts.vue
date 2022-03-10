<script setup lang="ts">
import { usePosts } from "@/hooks/usePosts.hook";

const posts = usePosts();
</script>

<template>
  <div class="blog-posts">
    <h2>Last posts</h2>
    <div v-for="post in posts" :key="post.href">
      <h3>
        <a :href="post.href">{{ post.title }}</a>
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-posts {
  h3 {
    font-weight: bold;
  }
}
</style>
