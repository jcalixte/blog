<script setup lang="ts">
interface Props {
  name: string,
  responsabilities?: string[]
  collaborators?: string[]
}

withDefaults(defineProps<Props>(), {
  responsabilities: () => [],
  collaborators: () => []
})
</script>

<template>
  <div class="crc-card">
    <h3>{{ name }}</h3>
    <section>
      <div class="responsabilities">
        <hr>
        <ol>
          <li v-for="responsability in responsabilities" :key="responsability">
            {{ responsability }}
          </li>
        </ol>
      </div>
      <div class="collaborators" v-if="collaborators.length">
        <hr>
        <ol>
          <li v-for="collaborator in collaborators" :key="collaborator">
            {{ collaborator }}
          </li>
        </ol>
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
  border-radius: 15px;
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
</style>
