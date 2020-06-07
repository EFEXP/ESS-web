<template lang="pug">
  div
       v-img(src="./static/pagetop.jpg" :gradient="gradient"  dark height="400px" ).d-flex.align-center
           h3.display-3.page-title  {{title}}
               h3.display-1.white--text {{subtitle}}



</template>
<script>
export default {
  name: "pagehero",
  components: {
  },
  props:['url','title','subtitle']
  ,
    data: () => ({
        gradient: 'to bottom, rgba(0,0,0,0.3) 100%,rgba(0, 0, 0, 0.3) 100%'
    })
};
</script>
<style lang="scss" scoped>
</style>
