import Image from 'next/image'

import { Certificate } from './cetificate'

type Props = {
  certificate: Certificate
}
export const CertificateCard = ({ certificate }: Props) => {
  return (
    <a
      className="mx-2 mt-8 cursor-pointer rounded-lg border border-border transition hover:bg-background-dark sm:w-72"
      href={certificate.url}
      target="blank"
      rel="noopener noreferer"
    >
      <Image
        src={certificate.image.url}
        width={certificate.image.width}
        height={certificate.image.height}
        className="rounded-t-lg"
        alt={certificate.title}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain',
          aspectRatio: '16 / 9'
        }}
      />
      <div className="flex flex-col p-4 pt-2">
        <h2 className="mt-2 font-semibold sm:h-16">{certificate.title}</h2>
        <time className="mt-2 text-sm text-gray-light">
          {certificate.date.format('YYYY/MM/DD')}
        </time>
      </div>
    </a>
  )
}
