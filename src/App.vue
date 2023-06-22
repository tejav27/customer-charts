<template>
  <v-card>
    <div style="display: flex; justify-content: space-around; align-items:center">
        <div  style="display: flex; align-items:center">
            <div style="width: 70px; height: 70px; overflow: hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/37439169?s=200&v=4"
                alt="Image"
                style="width: 100%; height: 100%; object-fit: cover"
              />
          </div>
          <v-card-title>DEV APP</v-card-title>
        </div>
      <div style="width: 50px; height:50px; overflow: hidden; border-radius: 50%;">
        <img
          src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
          alt="Image"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
    </div>

    <v-tabs v-model="tab" bg-color="#FFF" align-tabs="center">
      <v-tab value="home">HOME</v-tab>
      <v-tab value="customers">CUSTOMERS</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="home">
          <Home />
        </v-window-item>

        <v-window-item value="customers">
          <Customers />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import Home from './views/Home.vue'
import Customers from './views/Customer.vue'
export default {
  name: 'App',
  components: {
    Home,
    Customers
  },
  data() {
    return {
      activeTab: 'home',
      tab: null
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
}

nav {
  margin-bottom: 1rem;
}
a:hover {
  text-decoration: underline;
}

nav a {
  margin-right: 1rem;
}
</style>
