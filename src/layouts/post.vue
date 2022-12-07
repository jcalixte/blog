<script setup lang="ts">
const { frontmatter } = usePage()
</script>

<template>
  <div class="post">
    <app-header />

    <img id="main-illustration" v-if="frontmatter.illustration" :src="frontmatter.illustration" alt="Main illustration">

    <article id="main-article">
      <slot />
    </article>
  </div>
</template>

<style lang="scss">
#main-illustration {
  object-fit: contain;
}

article#main-article {
  max-width: 740px;
  margin: auto;
  padding: 1rem;
  text-align: justify;

  li {
    text-align: left;
  }
}

h1 {
  line-height: 1em;
}

h2,
h3,
h4,
h5,
h6,
h7 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

img {
  width: 100%;
  max-height: 40vh;
  display: flex;
  margin: auto;
}
</style>
