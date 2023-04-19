import { certificates } from './cetificate'
import { CertificateCard } from './CertificateCard'

export const CertificateList = () => {
  return (
    <div className="mx-2 flex flex-wrap justify-around md:mx-8">
      {certificates.map((certificate) => {
        return <CertificateCard key={certificate.title} certificate={certificate} />
      })}
    </div>
  )
}
