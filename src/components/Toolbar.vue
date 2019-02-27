<template lang="pug">
 v-toolbar(app).primary
  v-menu(bottom left) 
    v-toolbar-side-icon.hidden-md-and-up(slot="activator")
    v-list
      v-list-tile(v-for="item in items" :key="item.title" @click="menuClicked(item)")
        v-list-tile-title {{ item.title }}
        v-icon {{ item.icon }}
  v-toolbar-title
    span(@click="goHome" ) NODA ESS
  v-toolbar-items.hidden-sm-and-down
    v-btn(flat @click="goToAbout") About
      v-icon.right info
    v-btn(flat @click="goToQandA") Q&amp;A
      v-icon.right question_answer
    v-btn(flat @click="goToContact") Contact
      v-icon.right contact_support
    v-btn(flat @click="goToTimeline") Timeline
      v-icon.right timeline
  v-spacer
  v-btn(icon onclick="window.open('https://twitter.com/intent/user?user_id=3087362719')")
    v-icon(size="24px") fab fa-twitter
  <!-- v-toolbar-items.hidden-sm-and-down v-btn(flat @click="goToForMember") for Members v-icon(size="24px") group -->
    
</template>
<script>
export default {
  name: "toolbar",
  components: {},
  data: () => ({
    items: [
      { title: "ABOUT", icon: "info" },
      { title: "Q & A", icon: "question_answer" },
      { title: "CONTACT", icon: "contact_support" },
    //  { title: "FOR MEMBERS", icon: "group" },
      { title: "TIMELINE", icon: "timeline" }
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
      this.$router.push("question");
    },
    goToContact: function() {
      this.$router.push("contact");
    },
    goToForMember: function() {
      this.$router.push("formember");
    },
    goToGallery: function() {
      this.$router.push("gallery");
    },
    goToTimeline: function() {
          this.$router.push("timeline");
      },
    menuClicked: function(it) {
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
        case "GALLERY": {
          this.goToGallery();
          break;
        }
        case "FOR MEMBERS": {
              this.goToForMember();
              break;
          }
        case "TIMELINE": {
              this.goToTimeline();
              break;
          }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.right {
  padding-left: 8px;
}
</style>