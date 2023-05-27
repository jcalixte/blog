<script setup lang="ts">
import FormInput from "@/components/design-system/form/FormInput.vue"
import { useProductionFlow } from "@/modules/flow/store/useProductionFlow.store"
import { ref } from "vue"

const store = useProductionFlow()
const newTeam = ref("")

const addTeam = () => {
  store.addTeam({
    name: "User Acceptance Testing",
    outputs: ["Go for live"],
    prerequisites: ["new app version is step in staging environment"],
    intention:
      "Test the app as a whole to validate that the User Experience has no bug",
    responsible: "Product Owner",
  })
}
</script>

<template>
  <form class="add-step" @submit.prevent>
    <FormInput id="team" label="Team" v-model="newTeam" />
    <button @click="addTeam">Add a step</button>
  </form>
</template>

<style scoped lang="scss">
.add-step {
}
</style>
