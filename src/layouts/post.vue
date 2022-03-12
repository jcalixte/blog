<template>
  <div class="post">
    <app-header />

    <article id="main-article">
      <slot />
    </article>
  </div>
</template>

<style lang="scss">
@use "@/assets/base";

article#main-article {
  max-width: 650px;
  margin: auto;
}
</style>
