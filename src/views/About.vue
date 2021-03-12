<template>
  <div class="about">
    <h1 class="pageTitle" style="margin-bottom: 30px">About</h1>
    <v-row>
      <v-col cols="6">
        <div class="box">
          <h2>Profile</h2>
          <p style="white-space: pre-wrap;">
            ネイティオと申します。今年27歳、2016年からプログラミングを始めました。<br>
            きっかけは大学の授業で、急遽就活の方針を変えて大阪のIT企業に就職しました。<br>
            雑談を交えながら楽しく仕事をするのが好きです。<br>
            最近はVue.jsなどフロントエンドを中心に学習しています。
          </p>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="box">
          <h2>Work History</h2>
          <h3>2016.4 ~ 2017.3</h3>
          <p>
            大阪のIT企業に入社。<br>
            大手メーカーの基幹システムの設計とPGに携わり、忙しながらも楽しく業務をこなす。<br>
            仕事の質よりも勤務時間が評価される環境に疑問を感じ、2年勤めた後に転職。
          </p>
          <h3>2017.5 ~ </h3>
          <p>
            メーカー企業の社内SEとして転職。<br>
            社内SEのイメージとは異なるモダン環境でひたすらシステム開発を行う。<br>
            すべて自社開発のため、要件定義からテストまでを一人、二人で行うことになり、<br>
            自然と全行程の開発ノウハウが身についた。<br>
            チームでの開発に憧れを抱いている。
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.box {
  height: 100%;
  /*!*margin: 3px;*!*/
  padding: 10px;
  border-radius: 6px;
  background-color: #f5f2f2;
}
</style>