<page>
path: /feed.rss
</page>

<script setup lang="ts">
import RenderFeed from "@islands/feed"
import type { FeedOptions, FeedItem } from "@islands/feed"
import { fetchNotes } from "~/api/fetch-notes"

const url = "https://apoena.dev"

const options: FeedOptions = {
  title: "Apoena's distracted mind",
  description: "Where I write about what I read.",
  id: url,
  link: url,
  language: "en",
  image: "https://apoena.dev/pwa-512x512.png",
  copyright: "No copyright, just don't forget me",
}

const notes = await fetchNotes()

const items = notes.map<FeedItem>((note) => ({
  link: note.canonicalUrl,
  date: new Date(note.publishedAt),
  title: note.title,
  content: note,
}))
</script>

<template>
  <RenderFeed format="feed" :options="options" :items="items" />
</template>
