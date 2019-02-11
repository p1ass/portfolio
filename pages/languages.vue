<template>
  <article class="languages-wrapper">
    <pageTitle title="Languages" />
    <div class="languages">
      <box v-for="language in languages" :key="language.name" :item="language">
        使用歴 : {{ language.term }}
      </box>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Languages',
  components: {
    pageTitle,
    box
  },

  head() {
    return {
      title: 'Languages'
    }
  },

  data() {
    return {
      languages: [
        {
          name: 'Python',
          content:
            '私が一番使っている言語です。Django REST Frameworkを使ったAPI実装やKU休講情報Bot(@KUBotver2)の開発などを行いました。',
          term: '2年'
        },
        {
          name: 'Golang',
          content:
            '最近勉強を始めた言語です。REST APIやgRPCサーバーのサンプルを動かしたりして遊んでいます。',
          term: '1ヶ月'
        },
        {
          name: 'HTML & SCSS',
          content:
            'このポートフォリオサイトを作成に当たって勉強しました。基本知識はProgateを使って学びました。',
          term: '3ヶ月'
        },
        {
          name: 'JavaScript (ES6)',
          content:
            'こちらもポートフォリオサイト作成に当たって勉強しました。Progateを使って学んだ後は分からないところが見つかるたびに調べて勉強しました。',
          term: '3ヶ月'
        },
        {
          name: 'C',
          content:
            '私が初めて学んだ言語です。高校生の時に1年ほど勉強しました。その後、大学の授業で基礎的なニューラルネットワークの実装などを行いました。',
          term: '2年'
        },
        {
          name: 'Kotlin',
          content:
            'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースにて使用しました。Spring Bootを用いたサーバーサイドAPIの実装やAndroidクライアントの作成を行いました。',
          term: '3ヶ月'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.languages-wrapper {
  text-align: center;
}

.languages {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
</style>
