<script setup lang="ts">
const fontSize = {
  small: "12px",
  normal: "inherit",
  big: "44px",
}

interface Props {
  version?: "compact" | "full"
  size?: keyof typeof fontSize
}

const props = withDefaults(defineProps<Props>(), {
  version: "full",
  size: "normal",
})

const style = `font-size: ${fontSize[props.size]}`
</script>

<template>
  <span class="julien-calixte" :style="style">Julien<template v-if="version === 'full'"> Calixte</template></span>
</template>

<style scoped lang="scss">
.julien-calixte {
  font-variant: normal;
}
</style>
