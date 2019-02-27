<template lang="pug">
div
  TopBanner
  v-container(grid-list-md text-xs-center)
    h3.display-2 SECTIONS
    v-layout(row wrap)
      v-flex(lg1 xs0 )
      v-flex(lg2 xs12 v-for="it of items" :key="it.name" v-on:click="goToAbout")#section
        v-hover
          v-card.section-card()
             v-card-media(:src="it.picUrl" height="200px" )
             v-card-title(primary-title).headline.mb-0 {{it.name}}
             v-card-text {{it.description}}
</template>
<script>
import TopBanner from "../components/TopBanner.vue";
export default {
  name: "homepage",
  components: {
    TopBanner
  },
  data: () => ({
    items: [
      {
        name: "DISCUSSION",
        url: "",
        picUrl:"./img/discussion/shinkan/1.jpg",
         description: "英語であるテーマについて議論をし、価値観を共有します。"
      },
      {
        name: "DEBATE",
        url: "",
        picUrl:"./img/debate/debatetop.jpg",
          description: "ある論題について、自分達の正当性を競って議論します。"
      },
      {
        name: "SPEECH",
        url: "",
        picUrl:"./img/speech/speechtop.jpg",
          description: "いろいろなアクティビティで、英語を話す力を養います。"
      },
      {
        name: "GUIDE",
        url: "",
        picUrl:"./img/guide/guidetop.jpg",
          description: "少人数のグループを組んで外国人相手のガイドをしています。"
      },
      {
        name: "DRAMA",
        url: "",
        picUrl:"./img/drama/dramatop.jpg",
          description: "英語の演劇の活動です。理大祭に向けての練習に励みます。"
      }
    ]
  }),
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>