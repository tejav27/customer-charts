<template>
  <div class="container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import api from '@/api'
import { Bar } from 'vue-chartjs'
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js'

// Register the scales and bar element
Chart.register(LinearScale, CategoryScale, BarElement)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
