<template>
  <v-row class="home-title main-page" align-content="center">
    <v-col cols=12 lg=12 md=12 sm=12 align="center" style="min-height: 100px">
      <v-expand-transition>
        <h1 v-show="ex" >Welcome to Natio's portfolio</h1>
      </v-expand-transition>
    </v-col>
    <v-col cols=12 lg=12 md=12 sm=12 align="center">
      <div style="zoom: 150%">
        <img src="../resource/bird1.gif">
        <img src="../resource/bird2.gif">
        <img src="../resource/bird3.gif">
        <img src="../resource/bird4.gif">
      </div>
    </v-col>
    <v-col cols=12 lg=12 md=12 sm=12 align="center">
      <p></p>
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
    min-height: 350px;
  }

  .prev-leave {
    transform: translateX(450px);
  }
  .prev-leave-to {

  }

</style>
