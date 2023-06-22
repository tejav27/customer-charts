<template>
    <v-container>
      <v-card-title class="font-weight-bold text-h5">CUSTOMERS</v-card-title>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">ARR</th>
          <th class="text-left">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in customers" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.arr }}</td>
          <td>{{ item.id }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import api from '@/api'

export default {
  name: 'Customer',
  data() {
    return {
      customers: [],
      loading: true
    }
  },
  mounted() {
    api
      .get('/customer')
      .then((response) => {
        this.customers = response.data
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
