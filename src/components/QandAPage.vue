<template lang="pug">
div
  Hero(title="Q&A"  subtitle="実際に寄せられた質問です。")
  v-container.text-container
    h1 よくある質問に回答します
    v-container(v-if="items")
        v-row
            v-col(v-for="it of items" :key="it.question" cols="12" md="6" lg="6").d-flex.align-stretch.align-content-stretch
                v-card.question-con.flex-grow-1
                 v-card-title(primary-title).headline Q.{{it.question}}
                 v-card-text.body-1.text-left A.{{it.answer}}


</template>
<script>
import Hero from "../components/PageHero.vue";
import {getMethod} from "../api/api";
export default {
  name: "question",
  components: {
    Hero
  },
mounted() {
    getMethod((res)=>{
            this.items=res.data.contents.slice().reverse()}
        ,"faq")
}
    ,
  data: () => {
    return {
        items:[]
    };
  }
};
</script>
<style lang="scss" scoped>

.question-con {
  margin-top: 4px;
}
</style>
