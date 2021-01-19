<template>
  <v-autocomplete
      v-model="autocompleteValue"
      :items="autocompleteItems"
      dense
      chips
      small-chips
      label="Solo"
      multiple
      solo
  ></v-autocomplete>
</template>

<script>
export default {
  name: "Autocomplete",
  data() {
    return {
      autocompleteValue: null,
      autocompleteItems: ['foo', 'bar', 'fizz', 'buzz'],
    }
  }
}
</script>