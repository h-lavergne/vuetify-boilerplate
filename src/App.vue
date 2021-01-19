<template>
  <v-app>
    <navbar />
    <v-main>
      <v-container fluid id="#container-app">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components: {Navbar},
  data: () => ({
  }),
};
</script>
