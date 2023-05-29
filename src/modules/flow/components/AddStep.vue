<script setup lang="ts">
import FormInput from "@/components/design-system/form/FormInput.vue"
import { useProductionFlow } from "@/modules/flow/store/useProductionFlow.store"
import { ref } from "vue"

const store = useProductionFlow()

const newTeam = ref("")
const prerequisites = ref("")
const output = ref("")
const intention = ref("")
const responsible = ref("")

const clearTeam = () => {
  newTeam.value = ""
  prerequisites.value = ""
  output.value = ""
  intention.value = ""
  responsible.value = ""
}

const addTeam = () => {
  store.addTeam({
    name: newTeam.value,
    outputs: [output.value],
    prerequisites: [prerequisites.value],
    intention: intention.value,
    responsible: responsible.value,
  })
  clearTeam()
}
</script>

<template>
  <form class="add-step" @submit.prevent="addTeam">
    <FormInput id="team" label="Team (or step)" v-model="newTeam" />
    <FormInput
      id="prerequisites"
      label="Prerequisites"
      v-model="prerequisites"
    />
    <FormInput id="output" label="Output" v-model="output" />
    <FormInput id="intention" label="Intention" v-model="intention" />
    <FormInput id="responsible" label="Responsible" v-model="responsible" />
    <button type="submit">Add a step</button>
  </form>
</template>

<style scoped lang="scss">
.add-step {
}
</style>
