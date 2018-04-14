<template lang="pug">
 v-toolbar(app).primary
  v-menu(bottom left) 
    v-toolbar-side-icon(slot="activator")
    v-list
      v-list-tile(v-for="item in items" :key="item.title" @click="menuClicked(item)")
        v-list-tile-title {{ item.title }}
  v-toolbar-title
    span(@click="goHome" ) TUS in Noda ESS
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat @click="goToAbout") About
    v-btn(flat @click="goToQandA") Q&amp;A
    v-btn(flat @click="goToContact") Contact
  v-spacer
  v-btn(icon onclick="window.open('https://twitter.com/tusshinkan2018')")
    v-icon(size="24px") fab fa-twitter
  v-btn(icon  onclick="window.open('https://twitter.com/tusshinkan2018')")
    v-icon(size="24px") fab fa-instagram  
  v-toolbar-items.hidden-sm-and-down  
    v-btn(flat @click="goToForMember") for Members
    
</template>
<script>
export default {
  name: "toolbar",
  components: {},
  data: () => ({
    items: [
      { title: "ABOUT" },
      { title: "CONTACT" },
      { title: "Q & A" },
      { title: "FOR MEMBERS" }
    ]
  }),
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    },
    goHome: function() {
      this.$router.push("/");
    },
    goToQandA: function() {
      this.$router.push("/question");
    },
    goToContact: function() {
      this.$router.push("contact");
    },
    goToForMember: function() {
      this.$router.push("formember");
    },
    menuClicked: function(it) {
      console.log(it);
      switch (it["title"]) {
        case "ABOUT": {
          this.goToAbout();
          break;
        }
        case "CONTACT": {
          this.goToContact();
          break;
        }
        case "Q & A": {
          this.goToQandA();
          break;
        }
        case "FOR MEMBERS": {
          this.goToForMember();
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>