<template lang="pug">
  div#jumbotron-top
     div#banner-container
        h3.display-3.white--text#our-name
          |English
          br
          |Speaking
          br
          |Society
        h3.display-1#our-name-jp.white--text
          |東京理科大学
          span
          |英語研究会
</template>
<script>
export default {
  name: "topbanner",
  components: {}
};
</script>
<style  scoped lang="scss" >
#banner-container {
  margin: 0 auto;
}
#jumbotron-top {
  width: 100%;
  height: 100vh;
  background: url(../../public/static/top.jpg)
    no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
#banner-flex {
  align-items: center;
}
#our-name {
  font-family: "Montserrat", sans-serif;
}
#our-name-jp {
  margin-top: 10px;
}
.margin-zero{
        margin: 0;
        padding: 0;
    }

</style>
