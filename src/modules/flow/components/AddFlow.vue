<script setup lang="ts">
import { useProductionFlow } from "@/modules/flow/store/useProductionFlow.store";

const store = useProductionFlow();
const addStep = () => {
  store.addStep({
    name: "Recette",
    outputs: ["Go production"],
    prerequisites: ["app in staging"],
  });
};
</script>

<template>
  <form class="add-flow" @submit.prevent>
    <button @click="addStep">Add a step</button>
  </form>
</template>

<style scoped>
.add-flow {
}
</style>
