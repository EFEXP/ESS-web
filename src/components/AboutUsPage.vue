<template lang="pug">
div
  Hero(title="About ESS" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="私達の活動を紹介します")
  v-container
    h1.page-headline どういう団体なの？
    v-layout(justify-center)
        v-flex(md6)
            v-card
                v-card-text 私たちは、東京理科大学の公認団体、野田文化局に属する「英語研究会」通称『ＥＳＳ(English Speaking Society)』です😁。活動の円滑化のため、Discussion,Debate,Speech,Guide,Drama 5つのセクションに分かれています。一つに集中して参加することも、何個もの活動に励むことも可能です。
            h1.page-headline 各セクションの具体的な活動は？
            v-card(v-for="it of sections" :key="it.title").section-con
                v-card-title.headline.section-title {{it.title}}
                v-card-text.body-2 {{it.text}}

</template>
<script>
import Hero from "../components/PageHero.vue";
export default {
  name: "aboutpage",
  components: {
    Hero
  },
    data: () => {
      return {
          sections:[
              {
                  title:"Discussion",
                  text:"毎週火・金の放課後（１８時２０分～）に活動しています。💭✅一緒に、英語で話すことに慣れ自分の考えを表現できるようになりましょう！ESSでは、他大学が主催するディスカッション大会にも参加しており、月に数回、休日を利用して首都圏各地の他大学キャンパスにて、合同で英語を話すイベントです。毎年7月には私たち主催の「理科大ディスカッション」もあります。この大会では基本的に他大の人と英語で会話するため、日常的に英語で会話を行っておかないと大変です。そのため、普段の部会では少人数のグループにわけて（１テーブル５，６人）ディスカッションの練習をしています。４月は自己紹介を主に練習しているので、気軽に遊びに来てみてください"
              },{
                  title:"Debate",
                  text:"週に2回、月・金に活動しています。💬✅一緒に、論理的に考え相手を説得できるようになりましょう！ディベートとは、ある論題について肯定側、否定側に分かれ、それぞれのチームが、自分達の立場の正当性を競って、議論するというものです。ちゃんとジャッジもいて、ディベート終了後に、どちらのチームの正当性が高かったか、どちらの主張に説得力があったかによって勝敗を決します！ディベートをする事によって、英語力はもちろん、ジャッジを説得するための論理的な思考力が養われます"
              }
              ,{
                  title:"Guide",
                  text:"✅一緒に、他の活動で培ったコミュニケーション力を生かして会話を楽しみましょう！⛩️ガイドでは明治神宮、皇居、浅草をガイド地として、他大学と少人数のグループを組んで外国人相手のフリーガイドをしています。生の英語に触れられるのも、外国人とコミュニケーションをとれるのもこの活動だけです。\n"
              }
              ,{
                  title:"Speech",
                  text:"週１回、木に活動しています。🎙✅一緒に、英語でわかりやすく惹きつけるスピーチができるようになりましょう！Speechとありますが、Speechの勉強だけでなく英語力向上のためにTOEICの勉強などもしています。勉強というと身構えてしまう人も多いですが、活動自体はゆる～く行っているので誰でも簡単に自分の英語力を磨くことができるかも！？"
              }
              ,{
                  title:"Drama",
                  text:"その名の通り演劇の活動です。💃後期に部全体で協力し、11月末の大学の文化祭に向けての練習に励みます。主役級につくのは新入生が主ですが、仕事は役者以外にも衣装や小道具などの裏方もあり、それに精を出す人も沢山います。"
              }
          ]
      }
    }
};
</script>
<style scoped  lang="scss" >
.section-title {
  font-family: "Montserrat", sans-serif;
  color: #ff9c00;
}
.section-con {
    margin-top: 4px;
}
</style>