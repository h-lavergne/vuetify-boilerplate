<template>
  <v-row no-gutters justify="space-around" align="center">
    <v-col cols="12" md="5">
      <carousel :colors="colors" :slides="slides" />
    </v-col>

    <v-col cols="12" md="5">
      <chips-card/>
    </v-col>
  </v-row>
</template>

<script>
import Carousel from "../../components/Carousel";
import ChipsCard from "../../components/ChipsCard";
export default {
  name: "Child.vue",
  components: {ChipsCard, Carousel},
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>