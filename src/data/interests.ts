type Interest = {
  field: string
  contents: string[]
}

export const interests: Interest[] = [
  {
    field: '事業',
    contents: [
      '自分が実際に使いたいと思うtoC事業',
      '音楽/ラジオといった音声コンテンツ',
      'アニメや同人などのオタクコンテンツ'
    ]
  },
  {
    field: '技術',
    contents: [
      'Goなどの静的型付け言語',
      '検索・決済・認証認可・MLOpsといった未経験の技術領域',
      'テスト・CI/CD・DesignDocといったチームの生産性・品質を高めるための取り組み'
    ]
  },
  {
    field: '会社・文化',
    contents: [
      'オープンなコミュニケーションを心がける姿勢',
      'マネジメント職を育成しようとする姿勢',
      '新しい技術を学び、プロダクトを改善しようとする姿勢'
    ]
  }
]
