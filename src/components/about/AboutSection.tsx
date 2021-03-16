import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { AboutLinkList } from './LinkList'
import { IconAndName } from './IconAndName'

export const AboutSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="About Me" subtitle="私について"></SectionTitle>
      <div className="flex justify-center mt-8">
        <IconAndName></IconAndName>
        <AboutLinkList></AboutLinkList>
      </div>
    </SectionWrapper>
  )
}
