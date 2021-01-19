<template>
  <div>
    <v-row no-gutters justify="space-around" align="center" class="mt-10">
      <v-col cols="12" md="5" class="mt-10">
        <div class="d-flex justify-space-around align-center">
          <v-btn :loading="loading" @click="load">Normal</v-btn>
          <v-btn :loading="loading" @click="load" color="primary">
            Primary
          </v-btn>
          <v-btn :loading="loading" @click="load" color="error">
            Error
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="d-flex justify-space-around align-center mt-sm-5 mt-5 mt-md-0">
        <expansion-panel/>
      </v-col>
    </v-row>

    <v-row no-gutters justify="space-around" align="center" class="mt-16">
      <v-col cols="12" md="5">
        <autocomplete />
      </v-col>

      <v-col cols="12" md="5" class="">
        <file-input />
      </v-col>
    </v-row>


    <v-row no-gutters justify="space-around" align="center" class="mt-10">
      <v-col cols="12" md="5">
        <validate-form />
      </v-col>

      <v-col cols="12" md="5" class="mt-md-0 mt-5">
        <list />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExpansionPanel from "../../components/ExpansionPanel";
import Autocomplete from "../../components/Autocomplete";
import FileInput from "../../components/FileInput";
import Form from "../../components/ValidateForm";
import ValidateForm from "../../components/ValidateForm";
import List from "../../components/List";

export default {
  name: "Child2",
  components: {List, ValidateForm, Form, FileInput, Autocomplete, ExpansionPanel},
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async load() {
      this.loading = true

      await new Promise(resolve => setTimeout(resolve, 3000))

      this.loading = false
    },
  },
}
</script>