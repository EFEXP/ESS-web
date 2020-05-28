<template lang="pug">
    div
        Hero(title="Timeline" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="一年の流れを見てみましょう。")
        v-content
            v-container
                h1.page-headline ESSの一年間
                v-timeline(:class="{'v-timeline--dense':$vuetify.breakpoint.mdAndDown}" v-if="items.length>0")
                    v-timeline-item(v-for="it in items" :key="it.id" color="red lighten-2" large )
                        span(slot="icon").font-weight-bold.white--text {{it.month}}月
                        v-card
                            v-img(v-if='it["picture"]' :src='it["picture"]["url"]')
                            v-card-title(primary-title).headline {{it.name}}
                            v-card-text.body-1  {{it.description}}
                            //v-card-text.hidden-md-and-up  {{it.text}}

</template>

<script>
    import Hero from "../components/PageHero.vue";
    import {getMethod} from "../api/api";
    export default {
        name: "YearTimelinePage",

    components: {
        Hero
    },
    mounted() {
            getMethod((res)=>{
                this.items=res.data.contents.slice().reverse()}
                ,'timeline')
    }
        ,
        data() {
            return {
                isPhone:true,
                items: []
            };
        },

        methods: {
            toggleIsPhone: function() {
                this.isPhone=!this.isPhone

            }

        }

    }
</script>

<style scoped>

</style>
