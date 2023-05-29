<script setup lang="ts">
defineProps<{
  id: string
  label: string
}>()

const modelValue = defineModel<string>()
</script>

<template>
  <div class="form-input">
    <label :for="id">{{ label }}</label>
    <input type="text" id="id" v-model="modelValue" />
  </div>
</template>

<style scoped lang="scss">
.form-input {
  display: flex;
  gap: 1rem;
}
</style>
