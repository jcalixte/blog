<template>
  <div>
    <header>
      <div class="wrapper">
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
@import "~/assets/base.css";

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#nav a.router-link-exact-active {
  color: var(--color-text);
}

#nav a.router-link-exact-active:hover {
  background-color: transparent;
}

#nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

#nav a:first-of-type {
  border: 0;
}
</style>
