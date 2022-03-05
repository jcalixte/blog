<template>
  <div class="default">
    <header>
      <div class="wrapper">
        <julien-calixte size="big" />
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </header>

    <slot />
  </div>
</template>

<style>
@import "@/assets/base.css";

/* #nav a.router-link-exact-active {
  background-color: var(--color-text);
} */

#nav a {
  display: inline-block;
  padding: 0 1rem;
}

.default {
  padding: 0 1rem;
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
