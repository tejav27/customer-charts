<template>
  <v-card class="mx-auto" max-width="500">
    <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
    <v-card v-else>
      <v-card-title class="font-weight-bold text-h5">HOME</v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="50%">
            <v-card flat color="transparent">
              <v-card-title>ARR</v-card-title>
              <v-card-text class="font-weight-bold">$ {{ totalArr }} M</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="50%">
            <v-card flat color="transparent">
              <v-card-title>SEATS</v-card-title>
              <v-card-text class="font-weight-bold">{{ totalSeats }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-card width="100%" flat color="transparent">
            <v-card-title>NEW ARR PER MONTH</v-card-title>
            <v-card-text>
              <bar-chart :chart-data="chartData" :chart-options="chartOptions" class="barchart" />
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import api from '@/api'
import BarChart from '../components/BarChart.vue'

export default {
  name: 'Home',
  components: {
    BarChart
  },
  data() {
    return {
      report: [],
      loading: true,
      totalArr: 0,
      totalSeats: 0,
      chartData: null,
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'ARR'
            }
          }
        }
      }
    }
  },
  computed(){
    // arrInMillions() {
    //     return this.totalArr/1000000;
    // }
  },
  async mounted() {
    try {
      const response = await api.get('/report')
      console.log('data returned:', response.data.data)

      this.totalArr = response.data.data.reduce((total, item) => total + item.arr, 0)
      this.totalSeats = response.data.data.reduce((total, item) => total + item.seats, 0)

      const data = response.data.data.map((item) => ({
        x: item.month,
        y: item.arr
      }))

      this.chartData = {
        labels: response.data.data.map((item) => item.month), // Set labels for the x-axis
        datasets: [
          {
            label: 'ARR',
            backgroundColor: '#42a5f5',
            data: data
          }
        ]
      }

      this.loading = false
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
}

nav {
  margin-bottom: 1rem;
}

nav a {
  margin-right: 1rem;
}

.container {
  display: flex;
  justify-content: space-around;
}
</style>
