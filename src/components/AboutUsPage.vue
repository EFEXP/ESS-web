<template lang="pug">
div
  Hero(title="About ESS" subtitle="私達の活動を紹介します")
  v-container
    h1.page-headline どういう団体なの？
    v-row(justify="center" ).ma-4
        v-card(width="1000px")
            v-card-text.body-1 私たちは、東京理科大学の公認団体、野田文化局に属する「英語研究会」通称『ＥＳＳ(English Speaking Society)』です😁。活動の円滑化のため、Discussion,Debate,Speech,Guide,Drama 5つのセクションに分かれています。一つに集中して参加することも、何個もの活動に励むことも可能です。
    v-row(justify="center")
      h1.page-headline 各セクションの具体的な活動は？
    v-row(justify="center" v-if="items.length")
        v-col(cols="12" align="center")
            v-card(v-for="it of items" :key="it.nameEn" width="1000px").mt-4
                v-card-title.headline.section-title {{it.nameEn}}
                v-card-text.body-2 {{it.desc}}


</template>
<script>
import Hero from "../components/PageHero.vue";
import {getMethod} from "../api/api";

export default {
  name: "aboutpage",
  components: {
    Hero
  },
mounted() {
    getMethod((res)=>{
            this.items=res.data.contents.slice().reverse()}
        ,'sections')
},
    data: () => {
      return {
          items:[]
      }
    }
};
</script>
<style scoped  lang="scss" >
.section-title {
  font-family: "Montserrat", sans-serif !important;
  color: #ff9c00;
}
.section-con {

}
</style>
