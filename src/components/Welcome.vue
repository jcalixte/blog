<script setup lang="ts">
import { usePosts } from "@/hooks/usePosts.hook";

const posts = usePosts();
</script>

<template>
  <h1>Hi! I'm <julien-calixte />. A mobile & web developer.</h1>
  <p>
    I am into building things with code. I love creating offline first
    Progressive Web Apps. I've been doing programmation for 5 years and lead
    dev/technical architecture for 1 year now.
  </p>

  <section>
    <h2>My blog posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.href">
        <a :href="post.href">{{ post.title }}</a>
      </li>
    </ul>
  </section>
</template>
