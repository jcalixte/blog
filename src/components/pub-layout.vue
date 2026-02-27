<template>
  <div class="post">
    <article id="main-article">
      <slot />
    </article>
  </div>
</template>

<style lang="scss">
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
  max-width: 100%;
  display: flex;
  margin: auto;
}

.header-post {
  float: left;
}

table {
  thead,
  td {
    text-align: center;
  }
}
</style>
