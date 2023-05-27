<script setup lang="ts">
defineProps<{
  id: string
  label: string
  modelValue: string
}>()
defineEmits<{
  (event: "update:modelValue", value: string): void
}>()
</script>

<template>
  <div class="form-input">
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value ?? '')"
    />
  </div>
</template>

<style scoped lang="scss">
.form-input {
  display: flex;
  gap: 1rem;
}
</style>
