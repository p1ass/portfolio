import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { AboutLinkList } from './LinkList'
import { IconAndName } from './IconAndName'

export const AboutSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="About Me" subtitle="私について"></SectionTitle>
      <div className="mt-8 md:mx-auto md:flex md:justify-center">
        <IconAndName></IconAndName>
        <AboutLinkList></AboutLinkList>
      </div>
    </SectionWrapper>
  )
}
