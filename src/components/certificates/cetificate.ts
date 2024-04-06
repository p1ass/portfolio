import dayjs from 'dayjs'

export type Certificate = {
  title: string
  url: string
  image: {
    url: string
    width: number
    height: number
  }
  date: dayjs.Dayjs
}

export const certificates: Certificate[] = [
  {
    title: 'AWS Certified DevOps Engineer - Professional',
    url: 'https://www.credly.com/badges/04991802-a6ec-479c-9d61-a74662db8c62/linked_in_profile',
    image: {
      url: 'https://images.credly.com/size/680x680/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png',
      width: 600,
      height: 600
    },
    date: dayjs('2022-11-16')
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    url: 'https://www.credly.com/badges/26f4e584-98b9-4914-900d-2b06aa272ce4/public_url',
    image: {
      url: 'https://images.credly.com/size/680x680/images/d96faaa1-8c14-4d2d-8927-46f33ccf4523/image.png',
      width: 600,
      height: 600
    },
    date: dayjs('2022-07-01')
  }
]
