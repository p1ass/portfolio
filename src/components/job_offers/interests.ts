type Interest = {
  field: string
  contents: string[]
}

export const interests: Interest[] = [
  {
    field: '事業',
    contents: ['新しい技術やテクノロジーを活用したビジネス', 'toC・toBは問わない']
  },
  {
    field: '技術',
    contents: [
      'LLMを活用したAI Agentの開発',
      'Goなどの静的型付け言語',
      'プロダクト開発だけでなくクラウドインフラの管理や運用'
    ]
  },
  {
    field: '会社・文化',
    contents: [
      'オープンで誠実なコミュニケーションを心がける姿勢',
      '育休や子育てに寛容な姿勢',
      'フルリモートかどうかは問わない'
    ]
  }
]
