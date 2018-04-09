<template lang="pug">
 v-toolbar(app)
  v-toolbar-title
    span(@click="goHome" ) TUS in Noda ESS
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat @click="goToAbout") About
    v-btn(flat @click="goToContact") Contact
  v-spacer
  v-toolbar-items  
    v-btn(flat @click="goToForMember") for Members
</template>
<script>
export default {
  name: "toolbar",
  components: {},
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    },
    goHome: function() {
      this.$router.push("/");
    },
    goToContact: function() {
      this.$router.push("contact");
    }
    ,
    goToForMember: function() {
      this.$router.push("formember");
    }
  }
};
</script>
<style lang="scss" scoped>

</style>