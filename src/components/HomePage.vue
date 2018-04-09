<template lang="pug">
div
  TopBanner
  v-container(grid-list-md text-xs-center)
    h3.display-2 Sections
    v-layout(row wrap)
      v-flex(lg1 xs0 )
      v-flex(lg2 xs12 v-for="it of items" :key="it['name']")#section
        v-card.section-card
          v-card-media(src="https://3.bp.blogspot.com/-UR43ITa4puA/WBsAM0DCFwI/AAAAAAAA_S8/Awk-1CzjIm09q7bU_0IKqNROPlz0_n87ACLcB/s450/english_speaking.png" height="200px")
          v-card-title(primary-title).headline.mb-0 {{it['name']}}
    h3.display-2 Events
    div.cal_wrapper
      div.googlecal
        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=llaco7t0qtl2i73cdu0a2kk324%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=Asia%2FTokyo"   frameborder="0" scrolling="no"></iframe> 
       
</template>
<script>
import TopBanner from "../components/TopBanner.vue";
export default {
  name: "homepage",
  components: {
    TopBanner
  },
  data: () => {
    return {
      items: [
        {
          name: "DISCUSSION",
          url: "",
          picUrl: "",
          description:
            "年間を通しての活動のメインです。毎週月・水・金の放課後（１８時～）にＫ４０６で部会をやっています。"
        },
        {
          name: "DEBATE",
          url: "",
          picUrl: "",
          description:
            "週に3回、火・水・木にK405で活動しています。ディベートとは、ある論題について肯定側、否定側に分かれ、それぞれのチームが、自分達の立場の正当性を競って、議論するというものです。"
        },
        {
          name: "SPEECH",
          url: "",
          picUrl: "",
          description:
            "週2回、火・木にK404で活動しています。speechとありますが、speechの勉強だけでなく英語力向上のためにTOEICの勉強などもしています。勉強というと身構えてしまう人も多いですが、活動自体はゆる～く行っているので誰でも簡単に自分の英語力を磨くことができるかも！？ "
        },
        {
          name: "GUIDE",
          url: "",
          picUrl: "",
          description:
            "ガイドで外国人とのコミュニケーションの活動をメインにしています。ガイドでは明治神宮、皇居、浅草、上野をガイド地として、他大学と少人数のグループを組んで外国人相手のフリーガイドをしています"
        },
        {
          name: "DRAMA",
          url: "",
          picUrl: "",
          description:
            "その名の通り演劇の活動です。後期に部全体で協力し、11月末の大学の文化祭に向けての練習に励みます。主役級につくのは新入生が主ですが、仕事は役者以外にも衣装や小道具などの裏方もあり、それに精を出す人も沢山います。"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.cal_wrapper {
  max-width: 960px; /* 最大幅 */
  min-width: 300px; /* 最小幅 */
  margin: 2.0833% auto;
}
.googlecal {
  position: relative;
  padding-bottom: 100%; /* 縦横比 */
  height: 0;
}
.googlecal iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
/* 画面幅が768px以上の場合の縦横比の指定 */
@media only screen and (min-width: 768px) {
  .googlecal {
    padding-bottom: 75%;
  }
}
</style>