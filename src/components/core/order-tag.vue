<script setup lang="ts">
interface Props {
  order: number
}

defineProps<Props>()
</script>

<template>
  <span class="order-tag">{{ order }}</span>
</template>

<style scoped lang="scss">
.order-tag {
  padding: 0 0.5rem;
  background-color: #fffa65;
  color: var(--vt-c-black);
  font-family: var(--code-font-family);
  border-radius: 0.5rem;
}
</style>
