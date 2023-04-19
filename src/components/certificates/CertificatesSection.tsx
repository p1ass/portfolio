import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { CertificateList } from './CertificateList'

export const CertificatesSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Certificates" subtitle="認定資格" />
      <CertificateList />
    </SectionWrapper>
  )
}
