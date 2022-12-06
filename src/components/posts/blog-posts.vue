<script setup lang="ts">
import { usePosts } from "@/hooks/usePosts.hook";

const posts = usePosts();
</script>

<template>
  <div class="blog-posts">
    <h2>Last posts</h2>
    <h3 v-for="post in posts" :key="post.href">
      - <a :href="post.href">{{ post.title }}</a>
    </h3>
  </div>
</template>
