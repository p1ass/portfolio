import { SectionWrapper } from '../shared/SectionWrapper'

import { AboutLinkList } from './LinkList'
import { IconAndName } from './IconAndName'

export const AboutSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
        <IconAndName />
        <AboutLinkList />
      </div>
    </SectionWrapper>
  )
}
