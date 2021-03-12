<template>
  <v-row class="home-title" align-content="center">
    <v-col cols=12 lg=12 md=12 sm=12 align="center">
      <v-expand-transition>
        <h1 v-show="ex">Welcome to Natio's portfolio</h1>
      </v-expand-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'Home',

  components: {
    // HelloWorld,
  },

  data: () => ({
    ex: false
  }),

  mounted() {
    setTimeout(() => {
      this.ex = true
    }, 300)
  }
});
</script>

<style>
  .home-title {
    min-height: 300px;
  }

</style>
