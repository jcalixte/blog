<script setup lang="ts">import { ref } from 'vue';

interface Props {
  name: string,
  responsabilities?: string[]
  collaborators?: string[]
  editable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  responsabilities: () => [],
  collaborators: () => [],
  editable: false
})

const allReponsabilities = ref(props.responsabilities)

const newResponsability = ref('')

const addResponsability = () => {
  if (!newResponsability || allReponsabilities.value.find(resp => newResponsability.value === resp)) {
    return
  }

  allReponsabilities.value = [...allReponsabilities.value, newResponsability.value]

  newResponsability.value = ''
}

const allCollaborators = ref(props.collaborators)

const newCollaborator = ref('')

const addCollaborator = () => {
  if (!newCollaborator || allCollaborators.value.find(coll => newCollaborator.value === coll)) {
    return
  }

  allCollaborators.value = [...allCollaborators.value, newCollaborator.value]

  newCollaborator.value = ''
}
</script>

<template>
  <div class="crc-card">
    <h3 :contenteditable="editable">{{ name }}</h3>
    <section>
      <div class="responsabilities">
        <hr>
        <ol>
          <li v-for="responsability in allReponsabilities" :key="responsability">
            {{ responsability }}
          </li>
        </ol>
        <form @submit.prevent="addResponsability" v-if="editable">
          <input type="text" v-model="newResponsability">
          <button type="submit">+</button>
        </form>
      </div>
      <div class="collaborators" v-if="collaborators.length || editable">
        <hr>
        <ol>
          <li v-for="collaborator in allCollaborators" :key="collaborator">
            {{ collaborator }}
          </li>
        </ol>

        <form @submit.prevent="addCollaborator" v-if="editable">
          <input type="text" v-model.trim="newCollaborator">
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

  & [contenteditable] {
    background-color: rgb(76, 71, 71);
    padding: 0 0.5rem;
    border-radius: 0.5rem;
  }
}
</style>
