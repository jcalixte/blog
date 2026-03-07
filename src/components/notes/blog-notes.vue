<script setup lang="ts">
import { fetchNotes } from "@/api/fetch-notes"

const notes = await fetchNotes()
</script>

<template>
  <div class="blog-notes" v-if="notes.length > 0">
    <h2>Last notes</h2>
    <ul>
      <li v-for="note in notes" :key="note.href">
        <a :href="note.path">{{ note.title }}</a>
      </li>
    </ul>
  </div>
</template>
