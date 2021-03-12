<template>
  <div>
    <div class="game">
      <v-row :justify="'center'">
        <div v-if="this.$vuetify.breakpoint.mdAndUp">
          <div style="position: absolute; right: 30px; top: 30px; font-size: 25px; width: 150px">time : {{time}}</div>
          <div style="position: absolute; right: 30px; top: 90px; font-size: 25px; width: 150px">score: {{score}}</div>
        </div>
        <v-col cols="12" :align="this.$vuetify.breakpoint.mdAndUp ? 'center' : 'left'">
          <v-row justify="center">
            <v-col cols="8" align="center">
              <h1 class="game-title">DXモグラ叩き</h1>
            </v-col>
            <v-col cols="4" v-if="this.$vuetify.breakpoint.smAndDown">
              <div style="font-size: 15px;">time : {{time}}</div>
              <div style="font-size: 15px;">score: {{score}}</div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" align="center">
          <v-btn style="font-size: 25px" plain text x-large @click="startGame" :disabled="playing">Start</v-btn>
          <v-btn plain  @click="reset" style="font-size: 25px">Reset</v-btn>
        </v-col>


        <v-col :cols="12" align="center">
          <v-row class="mole-box">
            <v-col v-for="n in 9" :key="n" :cols="4" @click="clickCell(n)">
              <div class="mole-cell" :style="validNumber.includes(n) ? style : ''"></div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Result
        </v-card-title>
        <v-card-text>{{score}}点！ {{resultMessage}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DXMole from './DXMole.vue'

export default Vue.extend({
  name: 'App',

  components: {
    // DXMole
  },

  mounted() {
    this.time = 30
  },

  data: () => ({
    score: 0,
    time: 30,
    playing: false,
    validNumber: [] as number[],
    intervalIds: [] as number[],
    dialog: false,
    resultMessage: "",
    style: {'background-color': '#eeff2d'},
  }),

  methods: {
    generateNum() {
      if (this.validNumber.length > 8) return
      
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const random = Math.ceil( Math.random()*9 )
        if (!this.validNumber.includes(random)) {
          this.validNumber.push(random)
          setTimeout(() => {
            this.deleteNumber(random)
          },700)
          break
        }
      }
    },
    decreaseTime() {
      this.time--
      if (this.time == 20 || this.time == 7) {
        setTimeout(() => this.intervalIds.push(setInterval(this.generateNum, 600), 30))
      }
      if(this.time < 1) {
        this.playing = false
        this.dialog = true
        this.reset()
        if (this.score < 0) {
          this.resultMessage = "ダメだこりゃ"
        } else if (this.score < 20) {
          this.resultMessage = "まあまあだね"
        } else if (this.score < 40) {
          this.resultMessage = "なかなかだね"
        } else if (this.score < 50) {
          this.resultMessage = "そこそこやね"
        } else {
          this.resultMessage = "パねえ！"
        }
      }
    },
    startGame() {
      this.playing = true
      this.validNumber = []
      this.intervalIds.push(setInterval(this.generateNum, 600))
      this.intervalIds.push(setInterval(this.decreaseTime, 1000))
    },
    clickCell(num: number) {
      if (!this.playing) return
      if (this.validNumber.includes(num)) {
        this.score++
      } else {
        this.score -= 2
      }
      this.deleteNumber(num)
    },
    reset() {
      this.intervalIds.forEach(id => clearInterval(id))
      this.playing = false
      this.score = 0
      this.time = 30
      this.validNumber = []
    },
    deleteNumber(num: number) {
      this.validNumber.forEach((item, index) => {
        if(item === num) {
          this.validNumber.splice(index, 1);
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');

.game {
  height: calc(100vh - 94px);
}

.game-title {
  font-family: 'DotGothic16', sans-serif;
}

.mole-cell {
  border-radius: 5px;
  background-color: azure;
}

@media screen and (max-width: 480px) {
  .mole-cell {
    min-height: 97px;
  }
  .col {
    padding: 3px;
  }
  .mole-box {
    margin: 0 10px 0 10px;
  }
}

@media screen and (min-width: 481px) {
  .mole-cell {
    min-height: 123px;
  }
  .mole-box {
    max-width: 420px;
    min-height: 420px;
  }
}

.mole-cell:hover {
  //background-color: #f0f3f3;
}
</style>