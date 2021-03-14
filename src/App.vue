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
        <v-tab to="/works">Works</v-tab>
        <v-tab to="/game1">Games</v-tab>
      </v-tabs>
      <v-toolbar-title v-if="this.$vuetify.breakpoint.mdAndUp">Natio's Site</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div class="main__wrap">
        <div>
          <img id=thank src="./resource/bird18.gif">
        </div>
        <router-view/>
      </div>
    </v-main>
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
  animation-delay: 2s;
}

@keyframes move{
  /* Basic move left and right*/
  0% {transform: translateX(100vw) }
  100% {transform: translateX(-100px) }
}
</style>