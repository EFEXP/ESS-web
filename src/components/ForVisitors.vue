<template lang="pug">
div
  Hero(title="About Us" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="For Visitors to Japan")
  v-container(fluid).text-container
  p.headline Welcome to Japan 😆
  p.body-2 We are English speaking society(ESS) of Tokyo University of Science(東京理科大学).
  p.title.primary--text What are you doing ?
  p.body-2 Thank you for your interest. 
  p.body-2 It's one of our activities to improve our English skills.
  p.body-2 We guide English speakers aroud Japanese famous sight seeing spots, Asakusa, Imperial Palace(Koukyo), Meiji Shrine(Meiji jingu)
  p.title.primary--text  Free or not ?
  span.body-2  Absolutely free.
  p.headline Have a good trip ✈️
</template>
<script>
import Hero from '../components/PageHero.vue'
export default {
  name: "homepage",
 components: {
   Hero 
  },
  
};
</script>
<style lang="scss" scoped>
.title{
  padding-top: 10px;
}
.body-2{
  padding-right: 15px;
  padding-left: 15px;
}
</style>