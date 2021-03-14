<template>
  <div class="main-page">
    <h1 class="pageTitle">About</h1>
    <v-row>
      <v-col md="6" class="content" :sm="12">
        <div class="box">
          <h2>Profile</h2>
          <v-row>
            <v-col :md="4" :sm="12">
              <v-img
                  max-height="200"
                  max-width="400"
                  src="../resource/dog.jpg"
              ></v-img>
            </v-col>
            <v-col :md="8" :sm="12">
              <v-list class="box" style="margin-top: -30px">
                <v-list-item
                    v-for="item in profiles"
                    :key="item"
                >
                  <v-list-item-icon>
                    <v-icon>
                      mdi-check
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title><h3>{{item}}</h3></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col md="6" class="content" :sm="12">
        <div class="box">
          <h2>Work History</h2>
          <h3>2016.4 ~ 2017.3</h3>
          <p>
            大阪のIT企業に入社。<br>
            大手メーカーの基幹システムの設計とPGに携わり、忙しながらも楽しく業務をこなす。<br>
            勉強会でvue.jsに触れてもっとモダンな環境で開発したくなったので、2年勤めた後に転職。
          </p>
          <h3>2017.5 ~ </h3>
          <p>
            メーカー企業の社内SEとして転職。<br>
            kotlinとvue.jsでひたすらシステム開発を行う。<br>
            すべて自社開発のため、要件定義からテストまでを一人、二人で行うことになり、<br>
            自然と全行程の開発ノウハウが身についた。<br>
            チームでの開発に憧れを抱いている。
          </p>
        </div>
      </v-col>

      <v-col :cols="12">
        <div class="box">
          <h2>Skills</h2>
          <v-row align="center" v-for="(skill, key) in skills" :key="key">
            <v-col :md="2" :sm="12" align="center"><h3>{{key}}</h3></v-col>
            <v-col :md="2" :sm="6" align="center" v-for="item in skill" :key="item.title">
              <h4>{{item.title}}</h4>
              <v-progress-circular
                  :rotate="270"
                  :size="50"
                  :width="3"
                  :value="item.value"
                  color="teal"
              >
                {{ item.value }}
              </v-progress-circular>
            </v-col>
          </v-row>

          <h5 style="margin-top: 20px">100の基準は一人でその技術を用いて開発が進められるレベルです。<br>すべてを司っているわけではないです。</h5>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',

  data: () => ({
    profiles: [
      'ネイティオ',
      '1994年生まれ',
      'Webエンジニアで社内SE',
      'フロントエンドが好き',
      '動物が大好き(特に犬と鳥)',
      'ラーメン好き',
    ],
    skills: {
      'JavaScript': [
        {
          title: 'JavaScript',
          value: 100
        },
        {
          title: 'Vue.js',
          value: 80
        },
        {
          title: 'React.js',
          value: 40
        }
      ],
      'Java': [
        {
          title: 'Java',
          value: 70
        },
        {
          title: 'Kotlin',
          value: 100
        },
        {
          title: 'Spring Boot',
          value: 70
        }
      ],
      'Tools': [
        {
          title: 'Git',
          value: 80
        },
        {
          title: 'GitHub',
          value: 70
        },
        {
          title: 'AWS',
          value: 40
        },
        {
          title: 'Docker',
          value: 40
        }
      ],
      'Other': [
        {
          title: 'Postgres',
          value: 80
        },
        {
          title: 'HTML',
          value: 80
        },
        {
          title: 'CSS',
          value: 80
        },
        {
          title: 'Linux',
          value: 40
        },
        {
          title: 'UiPath',
          value: 100
        }
      ],
    }
  }),
});
</script>

<style>
.box {
  height: 100%;
  padding: 10px;
  border-radius: 6px;
  background-color: #f5f2f2 !important;
}

</style>