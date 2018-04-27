<template lang="pug">
  div#jumbotron-top
     div#banner-container
        h3.display-3.white--text#our-name 
          | English 
          span
          |Speaking 
          span
          |Society
        h3.display-1#our-name-jp.white--text
          |東 京 理 科 大 学 
          span
          | 英 語 研 究 会 
        v-btn.primary.primary--text(large outline to="WelcomeToJapan") For English speaker
</template>
<script>

export default {
  name: "topbanner",
  components: {
  }
};
</script>
<style  scoped lang="scss" >

#banner-container{
  margin: 0 auto;
}
#jumbotron-top{
  width: 100%;
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f6e5055d9ad1d603fd364c11823d026&auto=format&fit=crop&w=1952&q=80) no-repeat;
  background-size:cover;
  display:flex;
  align-items: center;
  justify-content: center;
}
#banner-flex{
   align-items: center;
}
#our-name{
 font-family:  'Montserrat', sans-serif;
}
#our-name-jp{
  margin-top: 10px;
}

</style>