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
@use "@/assets/fonts";

.julien-calixte {
  font-variant: normal;
  font-family: "Meow Script", "Lucida Sans", "Lucida Sans Regular",
    "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
