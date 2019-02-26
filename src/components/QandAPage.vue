<template lang="pug">
div
  Hero(title="Q&A" url="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" subtitle="実際に寄せられた質問です。")
  v-container.text-container
    h1 よくある質問に回答します
    v-layout(justify-center)
            v-flex(sm6)
                v-card(v-for="it of questions" :key="it.q" ).question-con
                    v-card-title(primary-title).headline Q.{{it.q}}
                    v-card-text A.{{it.a}}
</template>
<script>
import Hero from "../components/PageHero.vue";
export default {
  name: "question",
  components: {
    Hero
  },
  data: () => {
    return {
      questions: [
        {
          q: "英語話せなくても大丈夫？",
          a:
            "ESSに入った段階で英語が話せる人など稀です😃それは私達が理系だから、ということではなく他の文系大学を見ても当てはまります。大切なのは英語で話そう、という気持ちです。"
        },
        {
          q: "バイト、兼部は可能ですか？",
          a:
            "バイトも兼部も可能です✨しかし、学科の勉強も忘れずにスケジュールを立てましょう。"
        },
        {
          q: "週に何回活動があるの？",
          a:
            "基本的に部会は毎日開かれています✨曜日によって活動は異なります、毎日必ず出ないといけないというわけではありません。行きたい日に自由に参加できるのもESSの魅力の一つです！"
        },
        {
          q: "部員数はどれくらいですか？",
          a: "毎年100人を超えるほどです✨理科大の中でも最大級の部活です。"
        },
        {
          q: "発音悪くても大丈夫ですか？",
          a:
            "発音こそ、話していかなければ上達しません❗️英語に関する能力の未熟さは問題ではないのです✨大切なのは実際に英語を使って話すことなのです✋"
        },
        {
          q: "合宿はありますか？",
          a:
            "あります✨泳いだり、BBQをしたりする夏合宿、スノボーをしにいく冬合宿、このように遊ぶ合宿に加え、プレゼンなどの英語の実用化に重きを置くEnglish campもあります❗"
        },
        {
          q: "ESSに入ったら外国人と話せるようになりますか？",
          a:
            "なります❗️そこに関して強いのは、対人であるディスやディべやガイドですね。特にガイドでは実際に外国の方々を案内し、フリートークをしたりするので得られるものは大きいと思います❗️"
        },
        {
          q: "新歓ガイドって何ですか？",
          a:
            "新歓ガイドは普段のガイドの活動を新入生向けにしたものです(*^◯^*)　通常は観光しにきた外国の方を案内するのですが、今回は新入生の皆さんを上級生が案内します❗️"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.question {
}
.question-con {
  margin-top: 4px;
}
</style>