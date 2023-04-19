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
    url: 'https://www.credential.net/8beb314b-f8ab-4947-835a-b10f04fa7cd2',
    image: {
      url: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/54045266',
      width: 600,
      height: 464
    },
    date: dayjs('2022-07-01')
  }
]
