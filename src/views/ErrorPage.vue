<template>
  <div class="d-flex flex-column justify-center align-center fill-height">
    <h1 class="display-1 error--text mb-5">Error 404 page not found</h1>
    <v-btn dark link :to="{name: 'home'}">Get back home</v-btn>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
}
</script>