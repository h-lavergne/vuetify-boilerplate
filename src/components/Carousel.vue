<template>
  <v-carousel
      cycle
      hide-delimiters
      show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
          color="success"
          v-bind="attrs"
          v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
          color="info"
          v-bind="attrs"
          v-on="on"
      >Next slide</v-btn>
    </template>
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
      <v-sheet
          :color="colors[i]"
          height="100%"
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <div class="display-3">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    slides: {
      type: Array,
      default: null
    },
    colors: {
      type: Array,
      default: null
    }
  }
}
</script>