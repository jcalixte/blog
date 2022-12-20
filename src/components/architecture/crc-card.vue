<script setup lang="ts">
import { CrcCardEntity } from "@/modules/crc/entities/CrcCard"
import { ref } from "vue"

interface Props {
  name?: string
  responsabilities?: string[]
  collaborators?: string[]
  editable?: boolean
  isPlayground?: boolean
}

const emits = defineEmits<{
  (e: "submit", crc: CrcCardEntity): void
  (e: "remove", crcName: string): void
}>()

const props = withDefaults(defineProps<Props>(), {
  name: "",
  responsabilities: () => [],
  collaborators: () => [],
  editable: false,
  isPlayground: false,
})

const componentName = ref(props.name)
const allReponsabilities = ref(props.responsabilities)

const newResponsability = ref("")

const addResponsability = () => {
  if (
    !newResponsability ||
    allReponsabilities.value.find((resp) => newResponsability.value === resp)
  ) {
    return
  }

  allReponsabilities.value = [
    ...allReponsabilities.value,
    newResponsability.value,
  ]

  newResponsability.value = ""
}

const allCollaborators = ref(props.collaborators)

const newCollaborator = ref("")

const addCollaborator = () => {
  if (
    !newCollaborator ||
    allCollaborators.value.find((coll) => newCollaborator.value === coll)
  ) {
    return
  }

  allCollaborators.value = [...allCollaborators.value, newCollaborator.value]

  newCollaborator.value = ""
}

const clearCard = () => {
  componentName.value = ""
  allReponsabilities.value = []
  allCollaborators.value = []
}

const submitCard = () => {
  if (!componentName.value) {
    return
  }

  emits("submit", {
    name: componentName.value,
    responsabilities: allReponsabilities.value,
    collaborators: allCollaborators.value,
  })
  clearCard()
}

const removeCard = () => {
  if (!componentName.value) {
    return
  }

  emits("remove", componentName.value)
}
</script>

<template>
  <div class="crc-card">
    <section>
      <input
        type="text"
        class="component-name"
        v-if="editable"
        v-model="componentName"
      />
      <h3 v-else>
        {{ componentName }}
      </h3>
      <button v-if="editable" :disabled="!componentName" @click="submitCard">
        create
      </button>
      <button @click="removeCard" v-else-if="isPlayground">×</button>
    </section>
    <section>
      <div class="responsabilities">
        <hr />
        <ol>
          <li
            v-for="responsability in allReponsabilities"
            :key="responsability"
          >
            {{ responsability }}
          </li>
        </ol>
        <form @submit.prevent="addResponsability" v-if="editable">
          <input type="text" v-model="newResponsability" />
          <button type="submit">+</button>
        </form>
      </div>
      <div class="collaborators" v-if="collaborators.length || editable">
        <hr />
        <ol>
          <li v-for="collaborator in allCollaborators" :key="collaborator">
            {{ collaborator }}
          </li>
        </ol>

        <form @submit.prevent="addCollaborator" v-if="editable">
          <input type="text" v-model.trim="newCollaborator" />
          <button type="submit">+</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.crc-card {
  min-height: 200px;
  background-color: #561b00;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.3em;
  font-family: var(--code-font-family);

  hr {
    margin-bottom: 1rem;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  ol {
    margin: 1rem;
    font-size: 12pt;
  }

  .responsabilities {
    hr {
      margin: 0 1rem;
    }
  }

  .collaborators {
    border-left: 2px groove white;
    padding-left: 1rem;

    hr {
      visibility: hidden;
    }
  }
}

input.component-name {
  background-color: rgb(76, 71, 71);
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  color: white;
}
</style>
