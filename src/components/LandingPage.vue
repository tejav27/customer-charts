<template>
    <div class="container">
      <v-tabs v-model="activeTab">
        <v-tab href="#home">Home</v-tab>
        <v-tab href="#customers">Customers</v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="activeTab">
        <v-tab-item value="home">
          <Home />
        </v-tab-item>
        <v-tab-item value="customers">
          <Customers />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </template>
  
  <script>
  import Home from '../views/Home.vue'
  import Customers from '../views/Customer.vue'
  
  export default {
    components: {
      Home,
      Customers
    },
    data() {
      return {
        activeTab: 'home'
      }
    }
  }
  </script>
  