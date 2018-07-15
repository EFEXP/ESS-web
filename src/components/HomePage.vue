<template lang="pug">
div
  TopBanner
  v-container(grid-list-md text-xs-center)
    h3.display-2 SECTIONS
    v-layout(row wrap)
      v-flex(lg1 xs0 )
      v-flex(lg2 xs12 v-for="it of items" :key="it['name']")#section
        v-card.section-card
          v-card-media(:src="it['picUrl']" height="200px")
          v-card-title(primary-title).headline.mb-0 {{it['name']}}
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
            "年間を通して活動しています。毎週月・水・金の放課後に部会をやっています。"
        },
        {
          name: "DEBATE",
          url: "",
          picUrl: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1478102103000/photosp/fb334fbc-773e-43f1-9f65-bcaf4d83dd02/stock-photo-people-support-communication-group-work-meeting-team-collaboration-debate-fb334fbc-773e-43f1-9f65-bcaf4d83dd02.jpg",
          description:
            "週に3回、火・水・木に活動しています。ディベートとは、ある論題について肯定側、否定側に分かれ、それぞれのチームが、自分達の立場の正当性を競って、議論するというものです。"
        },
        {
          name: "SPEECH",
          url: "",
          picUrl: "https://images.pexels.com/photos/722706/mic-microphone-sound-check-sing-722706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description:
            "週2回、火・木に活動しています。speechとありますが、speechの勉強だけでなく英語力向上のためにTOEICの勉強などもしています。勉強というと身構えてしまう人も多いですが、活動自体はゆる～く行っているので誰でも簡単に自分の英語力を磨くことができるかも！？ "
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
          picUrl: "https://imgs.marry-xoxo.com/uploads/image/file/17242/top_1459deac-ce23-4561-8817-5a2f4f9b3887.jpg",
          description:
            "その名の通り演劇の活動です。後期に部全体で協力し、11月末の理大祭に向けての練習に励みます。主役級につくのは新入生が主ですが、仕事は役者以外にも衣装や小道具などの裏方もあり、それに精を出す人も沢山います。"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>

</style>