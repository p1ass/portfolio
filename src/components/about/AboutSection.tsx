import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { AboutLinkList } from './AboutLinkList'

export const AboutSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="About Me" subtitle="私について"></SectionTitle>
      <AboutLinkList></AboutLinkList>
    </SectionWrapper>
  )
}
