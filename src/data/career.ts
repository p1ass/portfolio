export type Career = {
  term: string
  companyName: string
  description: string
}

export const careers: Career[] = [
  {
    term: '2020/01~',
    companyName: '株式会社ディー・エヌ・エー',
    description:
      '内定者アルバイトとして、日比谷音楽祭向けスマートフォンアプリのバックエンド開発や社内システムの開発を行っています。'
  },
  {
    term: '2019/01~ 2020/12',
    companyName: 'CAMPHOR-',
    description:
      '京都のIT系学生コミュニティであるCAMPHOR-の運営を行っています。学生なら誰でも無料で使えるワークスペースの管理や勉強会の企画・開催などを行いました。'
  },
  {
    term: '2019/09',
    companyName: '株式会社アカツキ',
    description:
      'OSSであるaktsk/atgenという静的解析を用いたGoのテストジェネレーターの機能追加やゲーム内通貨管理サービスの大規模なアプリケーション設計の改善を行いました。'
  },
  {
    term: '2019/08',
    companyName: '株式会社AbemaTV',
    description:
      'SNSから番組への流入を増やすためにTwitterシェアに関する機能を追加しました。スケーラビリティを考慮しつつ仕様設計から実装、テストを行いました。'
  },
  {
    term: '2019/02 ~ 2019/03',
    companyName: 'LINE株式会社',
    description:
      'LINE LIVEという配信アプリのサーバサイドエンジニアとしてLIVE Qという配信者と視聴者がやり取りしながらクイズに参加できる新機能の実装を行いました。'
  }
]
