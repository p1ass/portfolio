export type Product = {
  title: string
  url: string
  image: string
  description: string
  hashtags: string[] // #はいらない
}

export const products: Product[] = [
  {
    title: 'Relaym',
    url: 'https://relaym.camph.net',
    image: 'https://relaym.camph.net/ogp.png',
    description: 'みんなに聴いてもらいたいSpotifyの曲を1つのスピーカーで楽しめるWebアプリ',
    hashtags: ['Go', 'MySQL', 'Concurrency', 'OSS']
  },
  {
    title: '生活習慣の乱れを可視化するやつ',
    url: 'https://midare.p1ass.com',
    image: 'https://midare.p1ass.com/ogp.jpg',
    description: 'ツイートを使って生活習慣の乱れを可視化するWebアプリ',
    hashtags: ['Go', 'TypeScript', 'Next.js']
  },
  {
    title: 'feeder',
    url: 'https://github.com/p1usoon/feeder',
    image:
      'https://repository-images.githubusercontent.com/176959575/eae4a900-f3f2-11e9-8d95-60cb8ca12fd9',
    description: '複数のRSSやAtomフィードなどから記事を取得し、一つのRSSやJSONを生成するライブラリ',
    hashtags: ['Go', 'Library', 'RSS', 'OSS']
  }
]
