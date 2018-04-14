<template lang="pug">
div
  Hero(title="About Us" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="For Visitors to Japan")

  v-container(fluid).text-container

  p.headline Welcome to Japan 😆
  p.title Who are you ?
  p.body-2 We are English Speaking Society(ESS).
  p.body-2 Example
  p.title Did you see us ?
  p.body-2 Thank you for your interest. 
  p.body-2 Example 
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

</style>