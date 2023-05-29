<script setup lang="ts">
import { useProductionFlow } from "@/modules/flow/store/useProductionFlow.store"
import AddStep from "@/modules/flow/components/AddStep.vue"

const store = useProductionFlow()
</script>

<template>
  <section class="production-flow">
    <add-step />
    <ul>
      <li :key="team.name" v-for="team in store.$state.teams">
        {{ team.name }}
        <p>{{ team.intention }}</p>
        <button @click="store.removeTeam(team.id)">❌</button>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.production-flow {
  ul {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    border: 2px solid rgb(69, 90, 85);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem 0;
    min-height: 400px;

    li {
      min-width: 150px;
      list-style-type: none;
    }
  }
}
</style>
