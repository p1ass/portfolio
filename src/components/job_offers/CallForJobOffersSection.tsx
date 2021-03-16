import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { MotivationCard } from './MotivationCard'

export const CallForJobOffersSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title="Call for Job Offers"
        subtitle="転職のお誘い"
        backgroundStyle="blue"
      ></SectionTitle>
      <MotivationCard></MotivationCard>
    </SectionWrapper>
  )
}
