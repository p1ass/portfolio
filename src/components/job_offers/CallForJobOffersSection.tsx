import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { MotivationCard } from './MotivationCard'
import { InterestsCard } from './InterestsCard'

export const CallForJobOffersSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Call for Job Offers" inverted />
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
        <MotivationCard />
        <InterestsCard />
      </div>
    </SectionWrapper>
  )
}
