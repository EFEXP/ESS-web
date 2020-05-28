<template lang="pug">
v-app-bar(app).primary
  v-menu(offset-y)
    template(v-slot:activator="{ on }")
       v-app-bar-nav-icon(v-on="on").d-lg-none
    v-list
      v-list-item(v-for="item in items" :key="item.title" @click="menuClicked(item)")
        v-list-item-title {{ item.title }}
        v-icon {{ item.icon }}
  v-toolbar-title
    span(@click="goHome" ) NODA ESS
  v-spacer
  div.d-none.d-lg-inline-block
      v-btn(text large @click="goToAbout") About
        v-icon.right info
      v-btn(text large @click="goToQandA") Q&amp;A
        v-icon.right question_answer
      v-btn(text large @click="goToTimeline") Timeline
         v-icon.right timeline
      v-btn(text large @click="goToContact") Contact
         v-icon.right contact_support
  v-btn(icon onclick="window.open('https://twitter.com/intent/user?user_id=3087362719')")
    v-icon fab fa-twitter
  v-btn(icon onclick="window.open('https://www.instagram.com/ess_tus_in_noda/')")
      v-icon fab fa-instagram

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
