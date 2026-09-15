import Image from 'next/image'

import { Certificate } from './cetificate'

type Props = {
  certificate: Certificate
}
export const CertificateCard = ({ certificate }: Props) => {
  return (
    <a
      className="card-link flex items-center gap-4 rounded-md border border-border p-4"
      href={certificate.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={certificate.image.url}
        width={certificate.image.width}
        height={certificate.image.height}
        className="size-20 shrink-0 object-contain"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-body font-bold">{certificate.title}</h3>
        <time className="text-body-sm tracking-date text-text-muted">
          {certificate.date.format('YYYY/MM/DD')}
        </time>
      </div>
    </a>
  )
}
