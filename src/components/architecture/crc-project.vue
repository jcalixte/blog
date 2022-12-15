<script setup lang="ts">
import { CrcCardEntity } from "@/modules/crc/entities/CrcCard"
import { ref } from "vue"

const crcCards = ref<CrcCardEntity[]>([])

const addCrcCard = (card: CrcCardEntity) => {
  crcCards.value = [...crcCards.value, card]
}
</script>

<template>
  <div class="crc-project">
    <CrcCard editable @submit="addCrcCard" />
    <section>
      <CrcCard
        v-for="card in crcCards"
        :key="card.name"
        :name="card.name"
        :responsabilities="card.responsabilities"
        :collaborators="card.collaborators"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
.crc-project {
  section {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 1rem;
  }
}
</style>
