<template lang="pug">
v-app()#app
  Toolbar
  v-content
      router-view
  v-footer().pa-3
    v-layout(row wrap justify-center) 
      v-flex(xs12 py-3 text-xs-center) &copy;{{ new Date().getFullYear() }} — TUS English Speaking Society 
    
   
</template>


<script>
import Toolbar from "./components/Toolbar.vue";


export default {
  name: "app",
  components: {
    Toolbar

  }
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "ヒラギノ角ゴ Pro", Hiragino Kaku Gothic Pro, "Yu Gothic", YuGothic, Arial, "メイリオ", Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    line-height: 1.8;
    font-size: 16px;
    letter-spacing: .05em;
  color: #323232;
  text-align: center;
}
::-webkit-selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}

::-moz-selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}

::selection, {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}


input,textarea{
  ::selection,::-moz-selection,::-webkit-selection {
      background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
  }
}
.page-title{
 font-family:  'Montserrat', sans-serif;
 color: #ff9c00;
}
.page-subtitle{
  margin-top: 10px;
}
.page-headline{
   color: #ff9c00;
}
@media only screen and (min-width: 1200px) {
.text-container{
  width: 933px;
  max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
}
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .text-container {
    width: 933px;
    margin-left: auto !important;
      max-width: 100% !important;
    margin-right: auto !important;
  }
}
@media only screen and (max-width: 767px) {
  .ui.container {
    width: auto !important;
    margin-left: 1em !important;
      max-width: 100% !important;
    margin-right: 1em !important;
  }

}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.container {
    width: 723px;
      max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}


</style>
