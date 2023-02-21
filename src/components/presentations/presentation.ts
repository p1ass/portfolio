import dayjs from 'dayjs'

export type Presentation = {
  title: string
  url: string
  image: {
    url: string
    width: number
    height: number
  }
  date: dayjs.Dayjs
  hashtags: string[] // #はいらない
}

// TODO(p1ass): APIで取ってこれるようにする
export const presentations: Presentation[] = [
  {
    title: 'TypeScript Compiler APIで型定義をJavaのクラスに変換した話',
    url: 'https://speakerdeck.com/dena_tech/techcon2021-winter-lt3',
    image: {
      url: 'https://files.speakerdeck.com/presentations/d15d5bf59ea2436d9c6ab592719834b3/slide_0.jpg',
      width: 1024,
      height: 576
    },
    date: dayjs('2021-12-27'),
    hashtags: ['DeNATechCon', 'TypeScript', 'Java']
  },
  {
    title: '趣味プロジェクトをリードする技術',
    url: 'https://speakerdeck.com/p1ass/technology-to-lead-hobby-projects',
    image: {
      url: 'https://files.speakerdeck.com/presentations/bcf73bb224c34201a84b0012161fa011/slide_0.jpg',
      width: 1024,
      height: 768
    },
    date: dayjs('2020-03-27'),
    hashtags: ['Management', 'camphor_day']
  },
  {
    title: 'vercel/og-imageを使ったブログOGPの簡単自動生成',
    url: 'https://speakerdeck.com/p1ass/generate-ogp-easily-using-vercel-og-image',
    image: {
      url: 'https://files.speakerdeck.com/presentations/7b0753e946ed4050a60b184457cd3867/slide_0.jpg',
      width: 1024,
      height: 576
    },
    date: dayjs('2020-11-21'),
    hashtags: ['OGP', 'Vercel']
  },
  {
    title: 'Webアプリケーションにおける並行処理の難しさ',
    url: 'https://speakerdeck.com/p1ass/number-gocon-sendai',
    image: {
      url: 'https://files.speakerdeck.com/presentations/6abe88154f9b4de19f327545fdeaf27b/slide_0.jpg',
      width: 1024,
      height: 576
    },
    date: dayjs('2020-10-10'),
    hashtags: ['Go', 'Gocon_Sendai']
  },
  {
    title: 'RSSフィードをもっと便利に',
    url: 'https://speakerdeck.com/p1ass/make-rss-feeds-more-convenient-number-camphor-lt',
    image: {
      url: 'https://files.speakerdeck.com/presentations/a8fdbaceeffc42a3b2b46592c824034e/slide_0.jpg',
      width: 1024,
      height: 768
    },
    date: dayjs('2020-08-08'),
    hashtags: ['feeder', 'OSS', 'camphor_lt']
  },
  {
    title: 'うじまる君の生活習慣の乱れを可視化したい！',
    url: 'https://speakerdeck.com/p1ass/uzimaru-birthday-lt',
    image: {
      url: 'https://files.speakerdeck.com/presentations/5cd86d0c3c6642c0aa5d45330c80d324/slide_0.jpg',
      width: 1024,
      height: 576
    },
    date: dayjs('2020-06-01'),
    hashtags: ['midare', 'WebApp']
  },
  {
    title: '複数サービスを運用しやすい理想のコンテナ環境をVPS上に構築する',
    url: 'https://speakerdeck.com/p1ass/building-ideal-container-environment-on-vps',
    image: {
      url: 'https://files.speakerdeck.com/presentations/388f5d3e4da2482ba946db5c2f84d480/slide_0.jpg',
      width: 1024,
      height: 768
    },
    date: dayjs('2020-03-29'),
    hashtags: ['VPS', 'DockerCompose', 'Loki']
  },
  {
    title: 'ドメインロジックと 永続化処理を分離する設計改善 を行って得られた知見',
    url: 'https://speakerdeck.com/p1ass/design-improvements-that-separate-domain-logic-and-persistence-function',
    image: {
      url: 'https://files.speakerdeck.com/presentations/0c518f77dec8474f99c6f80994ffbba3/slide_0.jpg',
      width: 1024,
      height: 576
    },
    date: dayjs('2019-09-20'),
    hashtags: ['DIP', 'Architecture']
  }
]
