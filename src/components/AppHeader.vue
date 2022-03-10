<script setup lang="ts"></script>

<template>
  <header class="app-header">
    <div class="wrapper">
      <router-link to="/" class="logo">
        <julien-calixte size="big" />
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
/* #nav a.router-link-exact-active {
  background-color: var(--color-text);
} */

.app-header {
  padding: 0 1rem;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;

    .logo {
      text-decoration: none;
    }
  }
}
</style>
