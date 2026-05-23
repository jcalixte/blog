<script setup lang="ts">
import { fetchNotes } from "@/api/fetch-notes"

const notes = await fetchNotes()

useHead({
  title: "Articles",
})
</script>

<template>
  <section class="pub-list">
    <h1>Articles</h1>
    <ul>
      <li v-for="note in notes" :key="note.path">
        <a :href="note.path">{{ note.title }}</a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.pub-list {
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}
</style>
