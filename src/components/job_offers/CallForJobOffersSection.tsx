import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { MotivationCard } from './MotivationCard'
import { InterestsCard } from './InterestsCard'

export const CallForJobOffersSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title="Call for Job Offers"
        subtitle="転職のお誘い"
        backgroundStyle="blue"
      ></SectionTitle>
      <div className="flex flex-grow mt-4">
        <MotivationCard></MotivationCard>
        <InterestsCard></InterestsCard>
      </div>
    </SectionWrapper>
  )
}
