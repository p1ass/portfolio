<template>
  <section id="skills" class="skills-wrapper">
    <pageTitle title="Skills" />
    <div class="skills">
      <box v-for="(skill,index) in skills" :key="index" :item="skill">
        {{ "★".repeat(skill.level) }}{{ "☆".repeat(3-skill.level) }}
      </box>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'

export default {
  name: 'Skills',
  components: {
    pageTitle,
    box
  },
  data() {
    return {
      skills: [
        {
          name: 'AWS',
          content:
            'EC2やECS、RDS、Lambda、CloudFront、Route53、RekognitionといったAWSの主要なサービスを使用したことがあります。',
          level: 3
        },
        {
          name: 'GitHub',
          content:
            'rebaseやcherry-pickを自由に使いこなすレベルです。また、プルリクエスト、レビューといった複数人での開発の経験があります。',
          level: 3
        },
        {
          name: 'Vue.js / Nuxt.js',
          content:
            'えもじっくやポートフォリオのフロントエンドに使用しています。また、pixivのハッカソンではNuxt.jsを使用し優勝しました。',
          level: 3
        },

        {
          name: 'Docker',
          content:
            'Dockerやdocker-composeを用いて、コンテナ環境での開発を行っています。',
          level: 3
        },
        {
          name: 'Circle CI',
          content:
            'テストや各種クラウドサービスへのデプロイをCI上で行っています。',
          level: 3
        },
        {
          name: 'Firebase',
          content:
            'Firebase Authenticationを使用したログイン機能の実装やJWTを使ったサーバーサイドとの連携の実装をしました。また、Cloud Firestoreを用いたデータベースの構築も行いました。',
          level: 2
        },
        {
          name: 'Django',
          content:
            'Django REST Frameworkを使ったバックエンドAPIの実装を行いました。また、Firebase Authenticationと連携させて認証ありAPIの実装も行いました。',
          level: 2
        },
        {
          name: 'GCP',
          content:
            'Postsに表示する投稿を返すAPIをGoogle App Engineにデプロイしていています。',
          level: 1
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_mixin.scss';

.skills-wrapper {
  @include section;
}

.skills {
  @include box-wrapper;
}

/*タブレット*/
@media (max-width: 1100px) {
  .skills {
    width: 100%;
    justify-content: center;
  }
}
</style>
