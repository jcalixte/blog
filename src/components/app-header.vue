<script setup lang="ts"></script>

<template>
  <header class="app-header">
    <div class="wrapper">
      <router-link to="/" class="logo">
        <toucan-icon />
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
/* #nav a.router-link-exact-active {
  background-color: var(--color-text);
} */

.app-header {
  padding: 0.2rem;

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
