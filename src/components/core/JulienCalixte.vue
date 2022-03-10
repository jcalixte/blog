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
@import url("https://fonts.googleapis.com/css2?family=Meow+Script&display=swap");

.julien-calixte {
  font-variant: normal;
  font-family: "Meow Script", cursive;
}
</style>
