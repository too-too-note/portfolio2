<template>
  <v-app class="app">
    <v-app-bar
        class="primary"
        app
        dark
    >
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/works">Works</v-tab>
        <v-tab to="/game1">Games</v-tab>
      </v-tabs>
      <v-toolbar-title v-if="this.$vuetify.breakpoint.mdAndUp">Natio's Site</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div class="main__wrap">
        <div style="margin-top: 5px">
          <img id=thank src="./resource/bird18.gif">
        </div>
        <img style="object-fit:cover; width: 100vw; height: 100px; object-position:100% 30%; margin-top: -300px" src="./resource/sky.jpg">
        <router-view/>
        <div style="min-height: 50px"></div>
      </div>
    </v-main>

    <v-footer
        color="black"
        fixed
        padless
    >
      <v-card
          class="primary white--text text-center"
      >
        <v-card-text class="white--text" style="width: 100vw">
          <img src="./resource/penguin7.gif">
          {{ new Date().getFullYear() }}  <strong>too-too-note</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
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
  //height: 100vh;
}
/* Safari用のハックは、Chromeに適用されないようにする */
@supports (-webkit-touch-callout: none) {
  body {
    /* Safari用のハック */
    height: -webkit-fill-available;
  }
}

#thank {
  display: block;
  animation-name: move;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}

@keyframes move{
  /* Basic move left and right*/
  0% {transform: translateX(100vw) }
  100% {transform: translateX(-100px) }
}
</style>