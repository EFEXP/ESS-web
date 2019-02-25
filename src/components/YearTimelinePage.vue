<template lang="pug">
    div
        Hero(title="Timeline" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="一年の流れを見てみましょう。")
        v-content
            v-container
                h1 ESSの一年間
                v-timeline(:class="{'v-timeline--dense':$vuetify.breakpoint.mdAndDown}")
                    v-timeline-item(v-for="it in items" :key="it.title" color="red lighten-2" large )
                        span(slot="icon").font-weight-bold.white--text {{it.month}}月
                        v-card
                            v-img(:src="it.picture")
                            v-card-title(primary-title).title {{it.title}}
                            v-card-text.hidden-sm-and-down  {{it.text}}
                            v-card-text.hidden-md-and-up  {{it.text}}

</template>

<script>
    import Hero from "../components/PageHero.vue";
    export default {
        name: "YearTimelinePage",

    components: {
        Hero
    },
        data() {
            return {
                isPhone:true,
                items: [
                    {
                        month:4,
                        title:"新歓ディス",
                        text:"新入生がdiscussionとはどんなものか、分かるような大会です🤭普段のdis大会は他大とたくさん交流するけど、新歓dis大会は野田ESSだけでリラックスして臨めます、dis大会デビューはこの大会で間違いなし！！新入生にとっても難しすぎない話題でdiscussionします！",
                        summary:"新入生がdiscussionとはどんなものか分かるような大会です🤭",
                        picture:"./img/discussion/shinkan/1.jpg"
                    },
                    {
                        month:4,
                        title:"新歓スピーチ大会",
                        text:"今年がなんと第一回目！参加者はもちろん新入生だけですよ〜🙆‍♂現役生がしっかりサポートするので、自信がないというそこのキミもぜひぜひ参加してみよう！👍スピーチに対するイメージだけじゃなく、見える世界も変わるぞ！✨",
                        summary:"参加者は新入生だけのスピーチ大会！🙆‍♂",
                        picture:""
                    },
                    {
                        month:5,title:"Debate Inner Cup",
                        text:" 1年生が初めてディベートの大会を経験する機会🏆自分のスピーチを真剣に聞いてくれる審判、勝敗の決まる緊張感は他では中々味わえない😎先輩とペアを組むから英語が苦手でも心配ないよ！さらにインナーのみだからこそよりみんなと親睦を深められる🤗",
                        summary:"1年生が初めてディベートの大会を経験する機会です🏆🤗",
                        picture:"./img/debate/inner/1.jpg"
                    },
                    {
                        month:6,
                        title:"PPJ",
                        text:"参加者は部員全員！🦅新入生の部と現役生の部の二部構成でそれぞれベスト3、つまり合計6人も賞品をゲットすることができるぞ！👏また今回も新入生には心強い現役生のサポーターがついてくれる他、スピセクからの手厚いフィードバックもあるから安心して大会に臨めるぞ！⭐",
                        summary:"参加者部全員のスピ大会⭐",
                        picture:""
                    },
                    {
                        month:7,
                        title:"理科大ディス",
                        text:"前期に開催されるということもあり、関東最大級のdis大会です💐関西からも参加者が来てくれて、ディスカッションをするだけでなくいつもは会えない他大の人と交流できることも大きな魅力✨この大会では考えれば考えるほど深くなるTopic(毎年変わる！)でdiscussionします!",
                        summary:"関東最大級の大会です✨",
                        picture:"./img/discussion/rikadaidis/1.jpg"
                    },
                    {
                        month:8,
                        title:"夏合宿",
                        text:"ESS夏合宿はBBQ、川遊び、肝試し、レクリエーション等々楽しいイベントが盛りだくさん🌻２泊３日でより皆と親睦を深めることができる夏の一大イベント☀毎年80人ほど参加しており、英語が苦手な人やまだESSで友達が出来てない人でも大歓迎😊夏合宿を通してESSライフをよりよいものにしていこう！",
                        summary:"2泊3日でより皆と親睦を深めることができる夏の一大イベント☀",
                        picture:"./img/president/natsuga/2.jpg"
                    },
                    {
                        month:9,
                        title:"京都ガイド",
                        text:"みんなで京都に行ってガイドします！関西の大学の友達とも仲良くなれちゃいます！！ガイド後はみんなでUSJに行ったり大阪観光🐙などもできちゃう楽しいイベント😋",
                        summary:"大阪観光🐙などもできちゃう楽しいイベント😋",
                        picture:""
                    }
                    ,
                    {
                        month:10,
                        title:"PPA",
                        text:"今回は新入生に現役生のサポートがつかず、また新入生&現役生の分け隔てなく、スピーチで競ってもらうバトルロワイヤルだ！🔥毎年、最高の盛り上がりを見せているこの大会で今年はどんなスピーチが聴けるのか！？😋今年一番アツイ戦いがここにある！🔜",
                        picture: "https://lh3.googleusercontent.com/3pNnUYAll2CeNipD_JJrU4IDTD_pOik-yOyn9h13JgyJ_TzixWzxs1fQluYZB3AUZACkSj3PEmsK1LU2PMEjiKEsuozPJzVnT_H1ULzsZW6gZ_FfFLASj6g2MbnX0umoA-GOpQ8uEBbnx1jbPzytgmX-9vnbdbfV7UHOrrp6TOsHdDn_bDuAPGRBCC4Q6DA3lVQJGw-0HPHIaxF0A8pwM9ipNC4KLZEhavRF7XmHCvHivibMmRc-ijqvNucN7Bs4K85JVjdtHNIHEddEXxvRC11tyIG_bNcIcxJ9i-_f1IogpwM33eEu62GMGGSwgb8heR31Okk6QxmPdlY1eYNLb_sRbGtRqnXqffXTt73ZqfJbcM_b7LIKT6x9Fvzp_H1HjXDD-CatimQwzxs5mydI0cMKZ_4XtG3S5HXCLqQtoVV7j5UEkaEqbTdNl67TYbq7x5rlJgv-9RTCxZna-JyiM33Ws08W7ophzM2Pqqh9cS0_sVwZIV_PyQko2Xh8mw8lUq-X6wKT9RMIT6tWxpifyY2ox6M-97-RnbjTL9r2PsTon9SYkJW_BddXXKM76_g90jw2Q8ACIhrRhz75hkYNdqV6DQhR4Q3EpoFkiCRePi5FWeEzJprXB7SpSErj4Y4fJ17A8flwGnsuNJHOqQ_GfSRYeSiKdAk=w1471-h979-no",
                        summary:"今回は新入生&現役生の分け隔てなく、スピーチで競ってもらうバトルロワイヤル！"

                    },
                    {
                        month:11,
                        title:"理大祭ドラマ",
                        text:"理大祭でESS全体でつくりあげる、後期最大イベント😍🎉ドラマは、普段は聞き慣れない英語の発音に触れ、自分の殻を破り、全力で取り組むことの楽しさや大きな達成感を味わうことができる最高のステージです✊✨",
                        picture: "./img/drama/fesdrama/1.jpg",
                        summary:"理大祭でESS全体でつくりあげる、後期最大イベント!"

                    },
                    {
                        month:12,
                        title:"代替え",
                        text:"今までお世話になった三年生にむけて思い出のムービー流したり、プレゼントを渡したりして送り出します！！出会いがあれば別れもあり😭😭 感謝の気持ちを精一杯込めて送り出しましょう！！",
                        picture: "./img/president/daigae/1.jpg",
                        summary:"出会いがあれば別れもあり😭😭 感謝の気持ちを精一杯込めて送り出しましょう"
                    }
                    ,
                    {
                        month:12,
                        title:"ファイナルガイド",
                        text:"理科大主催の1年を通して最後のガイドです！今までのガイドにないくらいたくさんの人たちが参加する一大イベントです🤩",
                        picture: "",
                        summary:"理科大主催の1年を通して最後のガイドです！"
                    },
                    {
                        month:2,
                        title:"冬合宿",
                        text:"ESS冬合宿は２泊３日でスキー場へ行き、ウィンタースポーツ、温泉、レクリエーション等を楽しめるイベント☃毎年多くの人がスキーやスノボ初心者なので、これを機に皆と一緒に滑れるようになるよ✨同期とも、先輩後輩とも、ESS内の親睦を深めるいい機会になるよ！",
                        picture: "./img/president/fuyuga/1.jpg",
                        summary:"スキー場へ行き、ウィンタースポーツ、温泉、レクリエーション等を楽しめるイベント☃"

                    },
                ]
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