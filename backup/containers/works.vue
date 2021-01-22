<template>
  <section id="works" class="works-wrapper">
    <pageTitle title="Works" />
    <div class="works">
      <work-box v-for="work in works" :key="work.link" :item="work" />
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import workBox from '@/components/workBox'

export default {
  name: 'Works',
  components: {
    pageTitle,
    workBox,
  },
  data() {
    return {
      works: [
        {
          name: 'Memoito（めもいと）',
          content:
            'Memoito（めもいと）はTwitterと連携して、フォローしている人と紐付けてメモを保存することができるWebサービスです。オフ会で会った時に話した内容をメモしたり、フォローした理由をメモしておくことができます',
          subContent: 'Go, Nuxt.js',
          link: 'https://memoito.com',
        },
        {
          name: 'feeder',
          content:
            '複数のRSSやAtomフィードなどから記事を取得し、一つのRSSやJSONを生成するライブラリです。インターフェースを実装することで、Qiitaなど任意の場所からデータを取得することができます。',
          subContent: 'Go',
          link: 'https://github.com/p1ass/feeder',
        },
        {
          name: 'GraphQL Chat Server',
          content:
            'GraphQL Subscriptionsを使ったリアルタイムチャットサーバです。Redis PubSubを使用してスケールアウトできる構成を目指しました。',
          subContent: 'Go, GraphQL, Redis',
          link: 'https://github.com/p1ass/graphql-redis-realtime-chat',
        },
        {
          name: 'えもじっく',
          content:
            '人の顔を絵文字スタンプに変換するWebサービスです。プライバシーを配慮した画像を簡単にソーシャルメディアにアップロードできます。',
          subContent: 'Python, Nuxt.js, AWS',
          link: 'https:///emojic.ch',
        },
        {
          name: 'marshiv',
          content:
            'pixivの2018年冬インターンシップに参加した際に作成した画像ビューワーです。Intersection Observerを使ったイラストの無限スクロースやタグを用いた簡易的なレコメンドシステムを作成しました。',
          subContent: 'Javascript, Nuxt.js',
          link: 'https://blog.p1ass.com/posts/pixiv-intern-2018/',
        },
        {
          name: 'Portfolio Site',
          content:
            '私のポートフォリオ(このページ)です。iOSのApp Storeのようなドロップシャドウや、Instagramのアイコンのようなグラデーションを意識したデザインにしました。',
          subContent: 'HTML, SCSS, Nuxt.js',
          link: 'https://github.com/p1ass/portfolio',
        },
        {
          name: 'KU休講情報Bot',
          content:
            '京都大学の休講情報を定期的につぶやくBotです。EC2上でcronを使って動かしています。Pythonで書かれており、休講情報はSeleniumとChrome Driverを使ってスクレイピングで取得しています。',
          subContent: 'Python, Selenium',
          link: 'https://github.com/p1ass/ku-cancel-announcement-bot',
        },
        {
          name: 'SHABEL',
          content:
            'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースで作成したメッセージングアプリです。STOMP over Websocketを使った通信やローカルDBにメッセージを保存して永続化することができます。',
          subContent: 'Kotlin, SpringBoot',
          link: 'https://github.com/line-school2018summer/kyoto-a-client',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

.works-wrapper {
  @include section;
}

.works {
  @include box-wrapper;
}

a {
  text-decoration: none;
}
</style>
