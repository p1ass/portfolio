import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { PresentationList } from './PresentationList'

export const PresentationsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Presentations" subtitle="直近の登壇資料"></SectionTitle>
      <PresentationList></PresentationList>
    </SectionWrapper>
  )
}
