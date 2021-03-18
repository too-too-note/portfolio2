<template>
  <div class="main-page">
    <h1 class="pageTitle">Works</h1>
    <v-row>
      <v-col md="12" sm="12" class="content">
        <div class="box">
          <h2>社内での開発</h2>
          <v-divider></v-divider>

          <v-timeline
              align-top
              :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                fill-dot
            >
              <v-card
                  color="green lighten-1"
                  dark
              >
                <v-card-title class="title">
                  {{item.title}}
                </v-card-title>
                <v-card-text class="white text--primary">
                  <p>{{item.content}}</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
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
    items: [
      {
        title: 'ユーザーロール管理アプリ',
        content: '研修で作成。ユーザーの有効無効、所持しているロールの編集を行えるアプリを作成。',
      },
      {
        title: '企画書アプリ',
        content: '製品企画書をウェブデータベース化。ワークフロー機能、コメント機能も実装。',
      },
      {
        title: 'バーコード読み取りシステム',
        content: '',
      },
      {
        title: '商品管理DBアプリ',
        content: '',
      },
    ],
  }),
});
</script>

<style>
.box {
  height: 100%;
  padding: 10px;
  border-radius: 6px;
  background-color: #cdecfc !important;
}

</style>