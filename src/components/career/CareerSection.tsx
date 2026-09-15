import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { CareerList } from './CareerList'

export const CareerSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Career" />
      <CareerList />
    </SectionWrapper>
  )
}
