<template>
  <v-app class="app">
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/skill">Skill</v-tab>
        <v-tab to="/game1">Games</v-tab>
      </v-tabs>
      <v-toolbar-title v-if="this.$vuetify.breakpoint.mdAndUp">Natio's Site</v-toolbar-title>
    </v-app-bar>

    <v-main class="main-page">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=M+PLUS+1p:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-application {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.right {
  margin: 0 0 0 auto;
}

body {
  height: 100vh;
}

/* Safari用のハックは、Chromeに適用されないようにする */
@supports (-webkit-touch-callout: none) {
  .main-page {
    /* Safari用のハック */
    height: calc(100vh - 200px);
  }
}
</style>