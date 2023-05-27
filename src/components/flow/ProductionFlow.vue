<script setup lang="ts">
import { useProductionFlow } from "@/modules/flow/store/useProductionFlow.store";
import AddFlow from "@/modules/flow/components/AddFlow.vue";

const store = useProductionFlow();
</script>

<template>
  <section class="production-flow">
    <add-step />
    <ul>
      <li :key="step.name" v-for="step in store.$state.steps">
        {{ step.name }}
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.production-flow {
  ul {
    display: flex;
    justify-content: space-around;
  }
}
</style>
