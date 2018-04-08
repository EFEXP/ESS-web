<template lang="pug">
v-container(grid-list-md text-xs-center)
  h3.display-2 Sections
  v-layout(row wrap)
    v-flex(lg1 xs0 )
    v-flex(lg2 xs12 v-for="it of items" :key="it['name']")#section
      v-card.section-card
        v-card-media(src="https://3.bp.blogspot.com/-UR43ITa4puA/WBsAM0DCFwI/AAAAAAAA_S8/Awk-1CzjIm09q7bU_0IKqNROPlz0_n87ACLcB/s450/english_speaking.png" height="200px")
        v-card-title(primary-title).headline.mb-0 {{it['name']}}
  h3.display-2 Events      
</template>
<script>
export default {
  name: "homepage",
  components: {
  },
data: ()=>{
  return{items: [
      { name: 'DISCUSSION' ,
        url:'',
        picUrl:'',
        description:'年間を通しての活動のメインです。毎週月・水・金の放課後（１８時～）にＫ４０６で部会をやっています。'
      },
       { name: 'DEBATE' ,
        url:'',
        picUrl:'',
        description:'週に3回、火・水・木にK405で活動しています。ディベートとは、ある論題について肯定側、否定側に分かれ、それぞれのチームが、自分達の立場の正当性を競って、議論するというものです。'
      },
       { name: 'SPEECH' ,
        url:'',
        picUrl:'',
        description:'週2回、火・木にK404で活動しています。speechとありますが、speechの勉強だけでなく英語力向上のためにTOEICの勉強などもしています。勉強というと身構えてしまう人も多いですが、活動自体はゆる～く行っているので誰でも簡単に自分の英語力を磨くことができるかも！？ '
      },
       { name: 'GUIDE' ,
        url:'',
        picUrl:'',
        description:'ガイドで外国人とのコミュニケーションの活動をメインにしています。ガイドでは明治神宮、皇居、浅草、上野をガイド地として、他大学と少人数のグループを組んで外国人相手のフリーガイドをしています'
      },
       { name: 'DRAMA' ,
        url:'',
        picUrl:'',
        description:'その名の通り演劇の活動です。後期に部全体で協力し、11月末の大学の文化祭に向けての練習に励みます。主役級につくのは新入生が主ですが、仕事は役者以外にも衣装や小道具などの裏方もあり、それに精を出す人も沢山います。'
      },
    ]}
}
  
};
</script>
<style lang="scss">

</style>