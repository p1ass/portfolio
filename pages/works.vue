<template>
  <article class="works-wrapper">
    <pageTitle title="Works" />
    <div class="works">
      <box v-for="work in works" :key="work.link" :item="work">
        <a :href="work.link" target="_blank">
          URL
        </a>
      </box>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Works',
  head() {
    return {
      title: 'Works'
    }
  },
  components: {
    pageTitle,
    box
  },
  data() {
    return {
      works: [
        {
          name: 'えもじっく',
          content:
            'AWS Rekognitionの顔認識機能を使って、人の画像を絵文字に変換するWebサービスです。フロントエンドにはNuxt.jsを、バックエンドにはPythonを使い、Serverless Frameworkで構築しています。',
          link: 'https://github.com/naoki-kishi/emojic.ch'
        },
        {
          name: 'marshiv',
          content:
            'pixivの2018年冬インターンシップに参加した際に作成した画像ビューワーです。Intersection Observerを使ったイラストの無限スクロースやタグを用いた簡易的なレコメンドシステムを作成しました。',
          link: 'https://plus-blog.hatenablog.com/entry/pixiv-intern-2018'
        },
        {
          name: 'Portfolio Site',
          content:
            '今までフロントエンドの勉強をしたことがなかったので、勉強のために作成しました。デザインはiPhoneのApp StoreのようなドロップシャドウやInstagramのアイコンのようなグラデーションを意識しました。',
          link: 'https://github.com/naoki-kishi/portfolio'
        },
        {
          name: 'KU休講情報Bot',
          content:
            '京都大学の休講情報を定期的につぶやくBotです。EC2上でcronを使って動かしています。Pythonで書かれており、休講情報はSeleniumとChrome Driverを使ってスクレイピングで取得しています。',
          link: 'https://github.com/naoki-kishi/KUCancelAnnouncementBot'
        },
        {
          name: 'SHABEL',
          content:
            'LINE SUMMER INTERNSHIP 2018 エンジニアスクールコースで作成したメッセージングアプリです。STOMP over Websocketを使った通信やローカルDBにメッセージを保存して永続化することができます。',
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
