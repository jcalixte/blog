<template>
  <div class="post">
    <app-header />

    <article id="main-article">
      <slot />
    </article>
  </div>
</template>

<style lang="scss">
article#main-article {
  max-width: 680px;
  margin: auto;
  padding: 1rem;
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
</style>
