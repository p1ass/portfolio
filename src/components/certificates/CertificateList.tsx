import { CardGrid } from '../shared/CardGrid'

import { certificates } from './cetificate'
import { CertificateCard } from './CertificateCard'

export const CertificateList = () => {
  return (
    <CardGrid>
      {certificates.map((certificate) => {
        return <CertificateCard key={certificate.title} certificate={certificate} />
      })}
    </CardGrid>
  )
}
