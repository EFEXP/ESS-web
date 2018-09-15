<template lang="pug">
div
  Hero(title="Gallery" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="どのように活動しているのでしょう？")
  div(class="text-xs-center")
    v-dialog(v-model="dialog" fluid)
      v-card
        v-img(:src="activeUrl" ) 
           
  v-layout
    v-flex(xs12 sm6 offset-sm3)
      v-card
        v-card-title(primary-title)
            v-flex(no-wrap)
                v-avatar(size="48px" slot="activator")
                    img(src="https://pbs.twimg.com/profile_images/1029397628537032704/MR6ciz4f_400x400.jpg")
                h3.headline.mb-0 Kentaro Maeda
        v-card-text   
            strong ひとこと     
            p 下の人何いってんだ
        v-container(grid-list-sm fluid)
          v-layout(row wrap)
            v-flex(v-for="n in 9" :key="n" xs4 d-flex)
                v-card(flat  hover=true).d-flex
                  v-img(:src="`./img/${n}.jpg`"  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"  aspect-ratio="1" class="grey lighten-2" @click="activeUrl=`./img/${n}.jpg`;clickPicture();")
                    v-layout(slot="placeholder" fill-height align-center justify-center ma-0)
                      v-progress-circular(indeterminate color="grey lighten-5")
        v-card
          v-card-title(primary-title)
            v-flex(no-wrap)
                v-avatar(size="48px" slot="activator")
                    img(src="https://pbs.twimg.com/profile_images/1014363132477636609/dGWNQ8tl_400x400.jpg")
                h3.headline.mb-0 Kyohei Katada
          v-card-text   
            strong ひとこと     
            p 花火が見えない？お前が居るから大丈夫👌
          v-container(grid-list-sm fluid)
           v-layout(row wrap)
            v-flex(v-for="n in 9" :key="n" xs4 d-flex)
              v-card(flat tile class="d-flex")
                v-img(:src="`./img/kat/${n}.jpg`"  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"  aspect-ratio="1" class="grey lighten-2" @click="activeUrl=`./img/kat/${n}.jpg`;clickPicture();")
                    v-layout(slot="placeholder" fill-height align-center justify-center ma-0)
                        v-progress-circular(indeterminate color="grey lighten-5")                  
</template>
<script>
import Hero from "../components/PageHero.vue";
export default {
  name: "gallerypage",
  components: {
    Hero
  },
  data() {
    return {
      dialog: false,
      activeUrl: "",
      author: ""
    };
  },
  methods: {
    clickPicture: function(event) {
      console.log(this.activeUrl);
      this.dialog = true;
    }
  }
};
</script>
<style scoped  lang="scss" >
#top-title-image {
  width: 100%;
  height: 50vh;
  background: url(https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat;
  background-size: cover;
}
.section-title {
  padding-top: 24px;
  font-family: "Montserrat", sans-serif;
  color: #ff9c00;
}
</style>