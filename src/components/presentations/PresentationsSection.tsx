import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { PresentationList } from './PresentationList'

export const PresentationsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Presentations" />
      <PresentationList />
    </SectionWrapper>
  )
}
