<template lang="pug">
v-app()#app
  Toolbar
  TopBanner
  v-content
      router-view
  v-footer(app)
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import TopBanner from "./components/TopBanner.vue";

export default {
  name: "app",
  components: {
    Toolbar,
    TopBanner

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
</style>
