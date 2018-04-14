<template lang="pug">
v-container
   h3.display-2 Events
   div.cal_wrapper
      div.googlecal
        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=llaco7t0qtl2i73cdu0a2kk324%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=Asia%2FTokyo"   frameborder="0" scrolling="no"></iframe> 

</template>
<script>
export default {
  name: "homepage",
  components: {
  },
  
};
</script>
<style lang="scss" scoped>
.cal_wrapper {
  max-width: 960px; /* 最大幅 */
  min-width: 300px; /* 最小幅 */
  margin: 2.0833% auto;
}
.googlecal {
  position: relative;
  padding-bottom: 100%; /* 縦横比 */
  height: 0;
}
.googlecal iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
/* 画面幅が768px以上の場合の縦横比の指定 */
@media only screen and (min-width: 768px) {
  .googlecal {
    padding-bottom: 75%;
  }
}
</style>