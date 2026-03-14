<script lang="ts">
import { fetchNotes } from "~/api/fetch-notes"

export default definePageComponent({
  async getStaticPaths() {
    const notes = await fetchNotes()

    return notes.map((note) => {
      const [, , rkey, slug] = note.path.split("/")
      return {
        params: { rkey: String(rkey), slug: String(slug) },
        props: { note },
      }
    })
  },
})
</script>

<script setup lang="ts">
import type { Note } from "~/api/note.type"
import { marked } from "marked"

const props = defineProps<{ note: Note }>()
const textContent = marked.parse(props.note.textContent)

useHead({
  title: props.note.title,
})
</script>

<template>
  <pub-layout>
    <h1>{{ note.title }}</h1>
    <p class="remanso-note">
      This is the raw version of the article. To get the rich content, get to my
      <a :href="note.canonicalUrl" target="_blank" rel="noopener noreferrer"
        >Remanso space</a
      >.
    </p>
    <article v-html="textContent"></article>
  </pub-layout>
</template>

<style scoped>
.remanso-note {
  padding: 1rem;
  margin: 3rem 0;
  border-radius: 1rem;
  background-color: #ffa4c0;
  color: #2e5c1a;

  a {
    color: #2e5c1a;
  }
}
</style>
