type JobChangeMotivation = {
  currentStatus: MotivationStatus
  statusDescriptions: {
    status: MotivationStatus
    description: string
    icon: string
  }[]
}

type MotivationStatus = 'negative' | 'normal' | 'positive'

export const jobChangeMotivation: JobChangeMotivation = {
  currentStatus: 'normal',
  statusDescriptions: [
    {
      status: 'negative',
      description: '事業領域及び雇用条件が現職を大幅に上回る場合のみ検討',
      icon: '🙅‍♂️'
    },
    {
      status: 'normal',
      description: 'すぐ転職したいとは思っていないが他の職場が気になる状況',
      icon: '👀'
    },
    {
      status: 'positive',
      description: '退職を決めているなど積極的に転職活動中の状況',
      icon: '🚀'
    }
  ]
}
