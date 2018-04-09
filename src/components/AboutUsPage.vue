<template lang="pug">
div
  Hero(title="About ESS" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="私達の活動を紹介します")
  v-container()
     v-layout(align-center column).text-container
      v-flex(text-xs-center)
        p.headline.page-headline どういう団体なの？
        p.body-2 私たちは、東京理科大学の公認団体、野田文化局に属する「英語研究会」通称『ＥＳＳ(English Speaking Society)』です。
        p.body-2 活動の円滑化のため、Discussion,Debate,Speech,Guide,Drama 5つのセクションに分かれています。
        p.body-2 一つに集中して参加することも、何個もの活動に励むことも可能です。
      v-flex(text-xs-center)
        p.headline.page-headline セクションの具体的な活動は？
        p.title.section-title Discussion
        p.body-2 年間を通しての活動しています。毎週月・水・金の放課後（１８時～）にＫ４０６で部会をやっています。
        p.body-2 ESSでは、他大学が主催するディスカッション大会にも参加しており、月に数回、休日を利用して首都圏各地の他大学キャンパスにて、合同で英語を話すイベントです。毎年7月には私たち主催の「理科大ディスカッション」もあります。
        p.body-2 この大会では基本的に他大の人と英語で会話するため、日常的に英語で会話を行っておかないと、ネイティブでない限り結構大変です。そのため、普段の部会では少人数のグループにわけて（１テーブル５，６人）ディスカッションの練習をしています。　
        p.body-2 とはいっても、最初から難しいことを話そうとしても難しいので、４月は自己紹介を主に練習しているので、気軽に遊びに来てみてくださいね♪
        p.title.section-title Debate
        p.body-2 週に3回、火・水・木にK405で活動しています。
        p.body-2 ディベートとは、ある論題について肯定側、否定側に分かれ、それぞれのチームが、自分達の立場の正当性を競って、議論するというものです。
        p.body-2 ちゃんとジャッジもいて、ディベート終了後に、どちらのチームの正当性が高かったか、どちらの主張に説得力があったかによって勝敗を決します！
        p.body-2 ディベートをする事によって、英語力はもちろん、ジャッジを説得するための論理的な思考力が養われます。
        p.title.section-titleSpeech
        p.body-2 週2回、火・木にK404で活動しています。speechとありますが、speechの勉強だけでなく英語力向上のためにTOEICの勉強などもしています。勉強というと身構えてしまう人も多いですが、活動自体はゆる～く行っているので誰でも簡単に自分の英語力を磨くことができるかも！？
        p.body-2 また、私たちＥＳＳでは、毎年11月に「野田市長杯・東京理科大学学長杯争奪英語弁論大会」というスピーチの大会を主催しています。昨年度でこのスピーチコンテストも第27回を迎えました。
        p.body-2 この大会の前身は1969年から始まった理科大部員同士によるE.S.S.杯英語弁論大会ですが、その後1977年にオープン化し、名称も東京理科大学理工学部長杯、東京理科大学学長杯争奪英語弁論大会と変わり、さらに1985年には野田市長杯を頂きました.
        p.body-2 志願者は他大学のスピーチコンテストにも出場することもできます。顧問の先生や先輩達が懇切丁寧に指導して下さいます。大会に参加するだけでなく、大会を見に行ったりもするので、興味のある人はK403に足を運んでみてください♪
        p.title.section-title Guide
        p.body-2 ガイドでは明治神宮、皇居、浅草、上野をガイド地として、他大学と少人数のグループを組んで外国人相手のフリーガイドをしています。
        p.body-2 生の英語に触れられるのも、外国人とコミュニケーションをとれるのもこの活動だけです★
        p.title.section-title Drama
        p.body-2 その名の通り演劇の活動です。後期に部全体で協力し、11月末の大学の文化祭に向けての練習に励みます。主役級につくのは新入生が主ですが、仕事は役者以外にも衣装や小道具などの裏方もあり、それに精を出す人も沢山います。

</template>
<script>
import Hero from '../components/PageHero.vue'
export default {
  name: "aboutpage",
  components: {
    Hero
  }
  
};
</script>
<style scoped  lang="scss" >
#top-title-image{
  width: 100%;
  height: 50vh;
  background: url(https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat;
  background-size:cover;
}
.section-title{
  padding-top: 24px; 
  font-family:  'Montserrat', sans-serif;
 color: #ff9c00;
}

</style>