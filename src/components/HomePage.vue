<template lang="pug">
div
  TopBanner
  v-container
    h3.display-2 Sections
    v-row.justify-space-around
        v-col( xs=12 sm="12" lg="4" v-for="it of items" :key="it.name" v-on:click="goToAbout")
            v-card.section-card()
                v-img(:src="it.picture.url" height="200px" )
                v-card-title(primary-title).headline.mb-0 {{it.nameEn}}
                v-card-text.body-1.text-left {{it.summary}}

</template>
<script>
import TopBanner from "../components/TopBanner.vue";
import {getMethod} from "../api/api";
export default {
  name: "homepage",
  components: {
    TopBanner
  },
    mounted() {
        getMethod((res)=>{
                this.items=res.data.contents.slice().reverse()}
            ,'sections')

    }
    ,
  data: () => ({
    items: []}),
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
