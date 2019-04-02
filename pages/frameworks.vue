<template>
  <article class="tools-wrapper">
    <pageTitle title="Frameworks & Tools" />
    <div class="tools">
      <box v-for="tool in tools" :key="tool.name" :item="tool">
        使用歴 : {{ tool.term }}
      </box>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Frameworks',
  head() {
    return {
      title: 'Frameworks'
    }
  },
  components: {
    pageTitle,
    box
  },
  data() {
    return {
      tools: [
        {
          name: 'AWS',
          content:
            'EC2やECS、RDS、Lambda、CloudFront、Route53、RekognitionといったAWSの主要なサービスを使用したことがあります。',
          term: '1年'
        },
        {
          name: 'GitHub',
          content:
            'rebaseやcherry-pickを自由に使いこなすレベルです。また、プルリクエスト、レビューといった複数人での開発の経験があります。',
          term: '1年'
        },
        {
          name: 'Vue.js / Nuxt.js',
          content:
            'えもじっくやポートフォリオのフロントエンドに使用しています。また、pixivのハッカソンではNuxt.jsを使用し優勝しました。',
          term: '6ヶ月'
        },

        {
          name: 'Docker',
          content:
            'Dockerやdocker-composeを用いて、コンテナ環境での開発を行っています。',
          term: '6ヶ月'
        },
        {
          name: 'Circle CI',
          content:
            'テストや各種クラウドサービスへのデプロイをCI上で行っています。',
          term: '6ヶ月'
        },
        {
          name: 'Django',
          content:
            'Django REST Frameworkを使ったバックエンドAPIの実装を行いました。また、Firebase Authenticationと連携させて認証ありAPIの実装も行いました。',
          term: '6ヶ月'
        },
        {
          name: 'Firebase',
          content:
            'Firebase Authenticationを使用したログイン機能の実装やJWTを使ったサーバーサイドとの連携の実装をしました。また、Cloud Firestoreを用いたデータベースの構築も行いました。',
          term: '6ヶ月'
        },
        {
          name: 'GCP',
          content:
            'Postsに表示する投稿を返すAPIをGAEにデプロイしていています。',
          term: '1ヶ月'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.tools-wrapper {
  text-align: center;
}

.tools {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
</style>
