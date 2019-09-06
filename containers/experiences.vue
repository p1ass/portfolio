<template>
  <section id="experiences" class="experiences-wrapper">
    <pageTitle title="Experiences" />
    <v-timeline
      :reverse="reverse"
      :dense="dense"
    >
      <v-timeline-item
        v-for="(experience, index) in experiences"
        :key="index"
        color="#2F80ED"
        fill-dot
        small
      >
        <span slot="">{{ experience.term }}</span>
        <span class="elevation-2">
          <v-card-title class="headline">
            {{ experience.key + ' ' + experience.value }}
          </v-card-title>
          <v-card-text>
            {{ experience.description }}
          </v-card-text>
        </span>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'Experiences',
  components: {
    pageTitle
  },

  data() {
    return {
      width: window.innerWidth,
      experiences: [
        {
          key: 'CAMPHOR-',
          value: 'コアメンバー',
          term: '2019/01 ~ Present',
          description:
            '京都のIT系学生コミュニティであるCAMPHOR-の運営を行っています。学生なら誰でも無料で使えるワークスペースの管理や勉強会の企画・開催などを行っています。'
        },
        {
          key: 'AbemaTV ',
          value: '就業形インターン',
          term: '2019/08',
          description:
            'SNSから番組への流入を増やすためにTwitterシェアに関する機能を追加しました。スケーラビリティを考慮しつつ仕様設計から実装、テストを全て行いました。'
        },
        {
          key: 'DeNA',
          value: 'サマーインターンプロダクト開発コース 優勝',
          term: '2019/08',
          description:
            '「3日間で最高のアプリに作り直す」というミッションが課せられていたインターンにサーバーサイドエンジニアとして参加し、Goを用いたAPIの実装や負荷対策の実装を行い優勝しました。'
        },
        {
          key: 'LINE',
          value: '就業型インターン',
          term: '2019/02 ~ 2019/03',
          description:
            'LINE LIVEという配信アプリのサーバサイドエンジニアとしてLIVE Qという配信者と視聴者がやり取りしながらクイズに参加できる新機能の実装を行いました。'
        },
        {
          key: 'CyberAgent',
          value: 'Architecture Challenge',
          term: '2019/02',
          description:
            '「架空のサービスのチャット機能部分のアーキテクチャを考える」がテーマのインターンに参加し、スケーラビリティや拡張性を考えた設計を行いました。'
        },
        {
          key: 'ピクシブ',
          value: '君だけのpixivを開発れ！ 優勝',
          term: '2018/12',
          description:
            '自分が考える最高のイラストコミニュケーションアプリを作るインターンにて、無限にイラストが見続けられるWebサービスを作成し優勝しました。'
        }
      ]
    }
  },

  computed: {
    dense() {
      return !(this.width > 670)
    },
    reverse() {
      return this.width > 670
    }
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';
@import '~vuetify/src/styles/styles.sass';

.experiences-wrapper {
  @include section;
  background-color: $background-color1;
}

.headline {
  justify-content: center;
}
</style>
