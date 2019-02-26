<template lang="pug">
div
  TopBanner
  v-container(grid-list-md text-xs-center)
    h3.display-2 SECTIONS
    v-layout(row wrap)
      v-flex(lg1 xs0 )
      v-flex(lg2 xs12 v-for="it of items" :key="it.name" v-on:click="goToAbout")#section
        v-hover
          v-card.section-card()
             v-card-media(:src="it.picUrl" height="200px" )
             v-card-title(primary-title).headline.mb-0 {{it.name}}
             v-card-text {{it.description}}
</template>
<script>
import TopBanner from "../components/TopBanner.vue";
export default {
  name: "homepage",
  components: {
    TopBanner
  },
  data: () => ({
    items: [
      {
        name: "DISCUSSION",
        url: "",
        picUrl:
          "https://lh3.googleusercontent.com/zmcSFY1A-p6UqUvtxSP718gjF22QKN5gqeiIbGpUzvWrR5ECt87yqp0BsnQNfqF7JBNWVAXRCoqeANnxo1QiEmYylcT0yxdP7iJfKAo1CRiKNKEC5WIDzQ-gX45XxFiwpGSCbM_5AiVy5Iu87cuZZ_j08Ri9uoxQ2trIoo9R5gBumfxSd1lpPW9JuOdqcHDJCBMLjDr1n_YReC04T3QJPz44wQAhVvidpQbp71MwgRx2jg3y93dOEFu-jUnLao_NS5ks5rQtMHB-O6hjQgUC_qt0TgSaDcb0AF_DF3l7m92r8Ia8klS8W0-5z-ZH8ed-hMmAsM3sIvv9PQzpnZAdyb89J9qh2Yi5spWGhVzmwdxEL_wBiOqmFXQ_24GNL7kaGIqprOw2xOtX94cOjOmLZLUowfs20ClRmUHfk7sirN6-gP4cHpp-7sqaUvXLHo5HEogPyOHMegN8diR_C0h4Ttn8JxpgrjiQMWPJsNADCMT3dcOCIpECturD27wtwIS53Bs_ZmgkmVmO4CdXtNWT11Ld9IjoHN7mHJMFtuJyaPktF7811KjojNerqhi8JZm_f9sC44ubi541sO09Uk7LN06GmZqdKLhUGC3_QDh3lyUaqv6qo2leOYEWpa1M9Z5Kl6Atq6j7_A7tbSFTtvoqDDlNeONxeufo6kFWLbwXQaR_iBhX6RlMbLuToCsXyZNm3zi5sGczi5I_HnXAqurVJxFz=w1471-h979-no",
        description: "英語であるテーマについて議論をし、価値観を共有します。"
      },
      {
        name: "DEBATE",
        url: "",
        picUrl:
          "https://lh3.googleusercontent.com/A-gZVrRAFiBr7bTVDOHPfI8Tk-nMXCfxg_qF3J1obU1R4eH0nzpc08sx4c0jWwIGte_2oOTkhxnztMdu_zbCoPVqIDC0HMOtUQ-4uWrrIf58ioPPm_bdILZF4eYVXcUNj0Ro9B293PN1IRTWjje0nsKhBCVbELesUkMCxEGy6jQeU4vmvTwk_aJg3VxzbdKKyq_wKNIp7mDZbqfA-Tbo9f-nkARxB-_MkHbfNkitUcVDWBYZBaIJSQdQukBb76VOQ2ciQQYpIng7SzBAhfyxue6QOFOmZAJbu0PNx1XljlzaVBsT32xokkOwNDMHQm_15YEQ411FXCQzs4SxUY4pc-3gneQTvaXxNN7_bkK8WSzNTyIkPya3tU5UaUDbxF8pRGkyMuhxl-8tQtZo3oXXeIydUFRLTdKQIYpgqHNg-VGNBKEooEYZSRsy3vUxBAQ3L42eG5tSgN14VqjPtdrbavmAQvmqMa03-ZwX42eE7RdPerOgBAfacPOFHF5Y18Dm3wj12OXVvLtRB3MgM4hgNpOKZRnPtJH7BfZNO1zUfKx55vFfX4ZKnT2fbWuaZgaIk0pLSe29uPXjf494MSvmRn5nwvPNitH0zx_VLoarF2DGxaOP9OTj0J1LZXv-fiNVTimqxSiLhOf9KSao8te6yRRJkqtsHuY=w1305-h979-no",
        description: "ある論題について、自分達の正当性を競って議論します。"
      },
      {
        name: "SPEECH",
        url: "",
        picUrl:
          "https://lh3.googleusercontent.com/QLVDLkmAJZ16COEkUiOxCXyogtISDvmlJu9TI0vMciGjECDQ9PG4M7t5Qn6hD7GsHCU3eVMk_WqP4YMTLsgu0YFgzbxBVWCr0uDsBU1XppIzwSfi6UUrvfHaJUv_4oatov4AdqkuTeFltVA8tkp0kjnGqPJSJ6BTyp1rY0uUQkmnjwC513QTxapPPpvy5kB-gZKSvFujFyxBVx3p4apY6o7LezKv1fztj7ugZTZAHpbmQVFAWf-qtSYGM2PfIODf_V1Ayi8w87xSxTvWsA2bc6K0aihUE5hHwxFcmhpJTG9p0XJP80ws4mgIoa_KXgEtfh9wEoiGmDK83JtsP-JtU5azL6NQhVsCzszVSQH7fZBDe8ZcxXgHGkym_BP45-Zdk8UBPqANkFKl99a49fzfG9ep8LW2OLQgzaDwl_tLJJlVTn2QRp4wR91Y7LECnP0o5LSPwt5BPySW-a3BN8Ik6ByYj-zpb7e3PIs1evAJ6O9pjdnPqwyiT3yvcsG2oDXfDxTRqZ4G3A_QFC-pQwienq_UPZ1h8d00TfT8PfUybF1-3Vl-JcLVrHXFXTOBp6_XovPcxU6eksZDncBzeHJr2ILizaX0ushRa5E2UducucRRcftOTQmBQxuzk-lhPdjpC-No8OVulI2HNMJRB6eFZH0_driEHSU=w1469-h979-no",
        description: "いろいろなアクティビティで、英語を話す力を養います。"
      },
      {
        name: "GUIDE",
        url: "",
        picUrl:
          "https://lh3.googleusercontent.com/k2EQtUW9HzP3ldTysLbQ7ijAPVd7gjnjVJvVRFE1_kF6dTxvBsef3707Dx0uNW4--wx6ju5TOwmrkJVcc8luBcLHPxpnXc9GDAl2Nr88GsDEje4uHxr11xs0TEJbGr9w21eKkMtoFSWSU6OBJuazspdPzlfg3U_iPq99Pn-YI3drlxp-40j1mfFs2mXazX_-SURND3D5tQvnCB0Tpir6vIGXmJEdcHz7aUrJVfoYm6Oi2ZRmMnIKW2glZ7nmN_T0guEYzbzMWc1hW8KyVHAgeH7hfI09KLzlr7P2Pb4md3_FjbTuZhhNdQopOhbO_-afNOcDT10F6uE8f-JVP8A4F7Su84mmzNVESWHuOWsjsJ1pmQhiyw9ufyl5wBGOA2LTqNAbSh9A_0r0XVL3Hs5N1_Rp0-ZlnvU9hrYq1iRBbQkJzMRNb_nkYkAwbonshHdoKK50t5rLK3rsQsP8a7rvcLbhYRk7HYVrsjlJ-mha3oVDp_D8f-UGHTCMGSiuG9H5D1hqLSyW_1P6IO_7FOCcTYv_qiPsbfjmG0fX7d4pl-pl5VcwmFQWlq5dfZGwZjD_mofCyXiQJnWTzO66sAgDvicYeo9umfJgD5xdzdiIJXIajf_tj7qawJIU1Ga5IyYxJCypo1JY0NLVgg4GsKWuRCHOZy9_sKI=w1240-h930-no",
        description: "少人数のグループを組んで外国人相手のガイドをしています。"
      },
      {
        name: "DRAMA",
        url: "",
        picUrl:
          "https://lh3.googleusercontent.com/FgdlTKlPs3vx5TIcJdPVHMhHcz8UwLpumrN_qscW8etEJc_7jiaWJrgT7idIvWTYJm0sKlAuHHWWHez8ahSfMrl25L6eLIp89xF6SScMohv3Lb5huZe1wQcSzGxxexEdwJp3I6cDxVNXhURgPM6eQXEqlKkDtGaqy3-tdldl9XxvTzaHViJEZ7OwJ7FM-26qCZ9gjEv5uBpOm1K8-GD02Ma2XFQNl2pX9MUYB8Xj1zSh8xzfsIE6j4GRA7MfSzocQvow4kCEwtpZWiDVw86-PBnk2uoLIXuPjqu8VA7iu4dCtxdgvzzJFGZGkzFDhVgN7ZYdiPv_SIYe9Dqr4KGZkGH8hUFXhLky-zJLZxAkw03jhSuH4CCepyB883oo_vR7kw1eq2uhWpEdk7PAqnzVlqUeT-Bc_dDZghPiNlEBmrLuPEOR4kJj9NQuZw0D_3buBn1ydbwe9Jm7ivv5p46DoiF-zBu38IS5IvwJe3OJ11d4Td0_m3w99-acgUsOBhsoxKcy2XG0JFU9iKjZiJvZThf-tUZLJ0a1pxCRz58tX5rG_PWOrY4SIUM-L9aSKP4Ie95LhyRYjUWi4MwVQNwjxWnM808tWxqQ0CHgRUGnrf1H_JJxukcd1zbFSQsbU4tWlNl77s_Kerzualy5T-H_WeD19M94tWA=w1396-h930-no",
        description: "英語の演劇の活動です。理大祭に向けての練習に励みます。"
      }
    ]
  }),
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>