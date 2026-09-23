import Image from 'next/image'

import { Hashtags } from '../shared/Hashtags'

import { Presentation } from './presentation'

type Props = {
  presentation: Presentation
}
export const PresentationCard = ({ presentation }: Props) => {
  return (
    <a
      className="card-link flex flex-col overflow-hidden rounded-md border border-border"
      href={presentation.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={presentation.image.url}
        width={presentation.image.width}
        height={presentation.image.height}
        className="aspect-video w-full border-b border-border object-cover"
        alt=""
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-body font-bold">{presentation.title}</h3>
        <Hashtags hashtags={presentation.hashtags} />
        <time className="mt-auto text-body-sm tracking-date text-text-muted">
          {presentation.date.format('YYYY/MM/DD')}
        </time>
      </div>
    </a>
  )
}
