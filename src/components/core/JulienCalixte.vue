<script setup lang="ts">
const fontSize = {
  small: "12px",
  normal: "inherit",
  big: "44px",
};

interface Props {
  size?: keyof typeof fontSize;
}

const props = withDefaults(defineProps<Props>(), { size: "normal" });

const style = `font-size: ${fontSize[props.size]}`;
</script>

<template>
  <span class="julien-calixte" :style="style">Julien Calixte</span>
</template>

<style scoped lang="scss">
.julien-calixte {
  font-variant: normal;
}
</style>
