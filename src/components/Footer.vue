<template lang="pug">
v-footer(app)
    v-card(flat tile)#footer-root.primary
        v-card-actions.justify-center    &copy;{{ new Date().getFullYear() }} —
            strong TUS English Speaking Society
</template>
<script>

export default {
  name: "appfooter",
  components: {
  },
  data:()=>{
      return{
               icons: [ 'fab fa-twitter',  'fab fa-instagram'],
      }
  }
};
</script>
<style  scoped lang="scss" >
#footer-root{
    width: 100%;
}
</style>

