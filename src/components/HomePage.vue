<template lang="pug">
div
  TopBanner
  v-container(grid-list-md text-xs-center)
    h3.display-2 Sections
    v-layout(row wrap)
      v-flex(lg1 xs0 )
      v-flex(lg2 xs12 v-for="it of items" :key="it['name']")#section
        v-card.section-card
          v-card-media(:src="it['picUrl']" height="200px")
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
          picUrl: "https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "年間を通しての活動のメインです。毎週月・水・金の放課後（１８時～）にＫ４０６で部会をやっています。"
        },
        {
          name: "DEBATE",
          url: "",
          picUrl: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1478102103000/photosp/fb334fbc-773e-43f1-9f65-bcaf4d83dd02/stock-photo-people-support-communication-group-work-meeting-team-collaboration-debate-fb334fbc-773e-43f1-9f65-bcaf4d83dd02.jpg",
          description:
            "週に3回、火・水・木にK405で活動しています。ディベートとは、ある論題について肯定側、否定側に分かれ、それぞれのチームが、自分達の立場の正当性を競って、議論するというものです。"
        },
        {
          name: "SPEECH",
          url: "",
          picUrl: "https://images.pexels.com/photos/722706/mic-microphone-sound-check-sing-722706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "週2回、火・木にK404で活動しています。speechとありますが、speechの勉強だけでなく英語力向上のためにTOEICの勉強などもしています。勉強というと身構えてしまう人も多いですが、活動自体はゆる～く行っているので誰でも簡単に自分の英語力を磨くことができるかも！？ "
        },
        {
          name: "GUIDE",
          url: "",
          picUrl: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1471001904000/photosp/c40753cb-7aff-4e2b-97aa-172e6873129b/stock-photo-people-sport-fun-hiking-tourism-map-rocks-group-hike-c40753cb-7aff-4e2b-97aa-172e6873129b.jpg",
          description:
            "ガイドで外国人とのコミュニケーションの活動をメインにしています。ガイドでは明治神宮、皇居、浅草、上野をガイド地として、他大学と少人数のグループを組んで外国人相手のフリーガイドをしています"
        },
        {
          name: "DRAMA",
          url: "",
          picUrl: "data:image/jpeg;base64,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",
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