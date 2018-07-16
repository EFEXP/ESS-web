<template lang="pug">
div
  Hero(title="About Us" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="For visitors to Japan")
  v-container(fluid).text-container
  p.headline  Welcome to Japan !! 
  p.body-2 Thank you for your interest😉.
  p.body-2 We are Tokyo University of Science English speaking society(TUS ESS) in Noda(野田).
  p.body-2 Through English communication, we enjoy talking in English and improve communication skills. 
  p.title.primary--text Our Activity
  p.body-2 For English speakers, now we carry out GUIDE activity at Asakusa(浅草), Imperial Palace(皇居) or Meiji Shrine(明治神宮) several times a month.
  p.body-2 We enjoy communicating with you while showing you aroud famous spots.
  p.body-2 To Get Latest Information Check Out Our SNS Accounts 👍
  p.title.primary--text  Free or not ? 
  span.body-2  Absolutely Free ✅
  p.headline#Trip Have A Good Trip ✈️
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
.body-2{
  padding-right: 15px;
  padding-left: 15px;
}
#Trip{
   padding-top: 30px;
}
</style>