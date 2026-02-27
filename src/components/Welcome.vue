<script setup lang="ts"></script>

<template>
  <section class="welcome">
    <about-me />

    <blog-notes />

    <blog-posts />

    <my-projects />

    <h3>My books</h3>

    <p><a href="/my-books">The books</a> I'm currently reading.</p>
  </section>
</template>

<style scoped lang="scss">
.welcome {
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}
</style>
