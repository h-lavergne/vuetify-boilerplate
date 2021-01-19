<template>
  <v-parallax
      dark
      srcset="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      id="parallax"
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          class="text-center"
          cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>