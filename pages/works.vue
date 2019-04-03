<template>
  <article class="works-wrapper">
    <pageTitle title="Works" />
    <div class="works">
      <work-box v-for="work in works" :key="work.link" :item="work" />
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import workBox from '@/components/workBox'

export default {
  name: 'Works',
  head() {
    return {
      title: 'Works'
    }
  },
  components: {
    pageTitle,
    workBox
  },
  data() {
    return {
      works: [
        {
          name: 'feeder',
          content:
            '複数のRSSやAtomフィードなどから記事を取得し、一つのRSSやJSONを生成するライブラリです。インターフェースを実装することで、Qiitaなど任意の場所からデータを取得することができます。',
          subContent: 'Go',
          link: 'https://github.com/naoki-kishi/feeder'
        },
        {
          name: 'GraphQL Chat Server',
          content:
            'GraphQL Subscriptionsを使ったリアルタイムチャットサーバです。Redis PubSubを使用してスケールアウトできる構成を目指しました。',
          subContent: 'Go, GraphQL, Redis',
          link: 'https://github.com/naoki-kishi/graphql-redis-realtime-chat'
        },
        {
          name: 'えもじっく',
          content:
            '人の顔を絵文字スタンプに変換するWebサービスです。プライバシーを配慮した画像を簡単にソーシャルメディアにアップロードできます。',
          subContent: 'Python, Nuxt.js, AWS',
          link: 'https://github.com/naoki-kishi/emojic.ch'
        },
        {
          name: 'marshiv',
          content:
            'pixivの2018年冬インターンシップに参加した際に作成した画像ビューワーです。Intersection Observerを使ったイラストの無限スクロースやタグを用いた簡易的なレコメンドシステムを作成しました。',
          subContent: 'Javascript, Nuxt.js',
          link: 'https://plus-blog.hatenablog.com/entry/pixiv-intern-2018'
        },
        {
          name: 'Portfolio Site',
          content:
            '私のポートフォリオです。iOSのApp Storeのようなドロップシャドウや、Instagramのアイコンのようなグラデーションを意識したデザインにしました。',
          subContent: 'HTML, SCSS, Nuxt.js',
          link: 'https://github.com/naoki-kishi/portfolio'
        },
        {
          name: 'KU休講情報Bot',
          content:
            '京都大学の休講情報を定期的につぶやくBotです。EC2上でcronを使って動かしています。Pythonで書かれており、休講情報はSeleniumとChrome Driverを使ってスクレイピングで取得しています。',
          subContent: 'Python, Selenium',
          link: 'https://github.com/naoki-kishi/KUCancelAnnouncementBot'
        },
        {
          name: 'SHABEL',
          content:
            'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースで作成したメッセージングアプリです。STOMP over Websocketを使った通信やローカルDBにメッセージを保存して永続化することができます。',
          subContent: 'Kotlin, SpringBoot',
          link: 'https://github.com/line-school2018summer/kyoto-a-client'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.works-wrapper {
  text-align: center;
}

.works {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}

a {
  text-decoration: none;
}
</style>
