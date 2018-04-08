<template lang="pug">
 v-toolbar(app)
  v-toolbar-title TUS in Noda ESS
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat) About us
    v-btn(flat) Contact
</template>
<script>

export default {
  name: "toolbar",
  components: {
  }
};
</script>
<style lang="scss" scoped>

</style>