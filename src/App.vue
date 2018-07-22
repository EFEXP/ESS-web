<template lang="pug">
v-app()#app
  Toolbar 
  v-content(v-scroll="onScroll")
    v-container(fluid)#margin-zero
      transition(name="fade")
        router-view
  Footer
  
    
   
</template>
<script>
import Toolbar from "./components/Toolbar.vue";
import Footer from "./components/Footer.vue";
import firebase from 'firebase/app';
import 'firebase/firestore';
  var config = {
    apiKey: "AIzaSyCOH6Q88NenF_Qz39XZ2p4VQW4SHGRu3uA",
    authDomain: "ess-tus.firebaseapp.com",
    databaseURL: "https://ess-tus.firebaseio.com",
    projectId: "ess-tus",
    storageBucket: "ess-tus.appspot.com",
    messagingSenderId: "57430050889"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
 

export default {
  name: "app",
  components: {
    Toolbar,
    Footer

  },
   data: () => ({
      offsetTop: 0
    }),
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
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
Footer{
  padding-top: 0px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
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
   margin-top: 10px;
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
  .text-container {
    width: auto !important;
    margin-left: 1em !important;
      max-width: 100% !important;
    margin-right: 1em !important;
  }

}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .text-container {
    width: 723px;
      max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
#margin-zero{
  margin: 0%;
  padding: 0%;
}

</style>
