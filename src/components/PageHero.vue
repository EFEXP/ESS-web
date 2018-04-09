<template lang="pug">
  v-jumbotron(:src="url" :gradient="gradient"  dark)#root-tron
    v-container(fill-height)
      v-layout(align-center)
        v-flex(text-xs-center)
          h3.display-3.page-title  {{title}}
          h3.display-1 {{subtitle}}
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
#root-tron{
  display: block;
}
</style>