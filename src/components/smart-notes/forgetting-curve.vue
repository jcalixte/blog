<script setup lang="ts">
import chart from 'chart.xkcd'
import { onMounted } from 'vue';

onMounted(() => {
  const svg = document.querySelector('.forgetting-curve')

  new chart.Line(svg, {
    title: 'The forgetting curve',
    xLabel: '# days',
    yLabel: 'Retention',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
        label: 'Reality',
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      }],
    }
  })
})
</script>

<template>
  <svg class="forgetting-curve"></svg>
</template>

<style scoped>
svg {
  min-height: 300px;
  width: 500px;
  margin: auto;
}
</style>