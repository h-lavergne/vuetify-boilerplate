<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dark
        app
        src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>


      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        fixed
        left
        temporary
    >
      <v-divider></v-divider>

      <list />
    </v-navigation-drawer>
  </div>
</template>

<script>
import List from "./List";
export default {
  name: 'Navbar',
  components: {List},
  data() {
    return {
      drawer: false,
    }
  },
}
</script>