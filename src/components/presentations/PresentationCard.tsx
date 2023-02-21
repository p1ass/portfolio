import Image from 'next/image'

import { Presentation } from '../../data/presentation'

type Props = {
  presentation: Presentation
}
export const PresentationCard = ({ presentation }: Props) => {
  return (
    <a
      className="mx-2 mt-8 cursor-pointer rounded-lg border border-border transition hover:bg-background-dark sm:w-72"
      href={presentation.url}
      target="blank"
      rel="noopener noreferer"
    >
      <Image
        src={presentation.image.url}
        width={presentation.image.width}
        height={presentation.image.height}
        className="rounded-t-lg"
        alt={presentation.title}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
          aspectRatio: '16 / 9'
        }}
      />
      <div className="flex flex-col p-4 pt-2">
        <p className="text-sm text-blue">
          {presentation.hashtags.map((hashtag) => `#${hashtag}`).join(' ')}
        </p>
        <h2 className="mt-2 font-semibold sm:h-16">{presentation.title}</h2>
        <time className="mt-2 text-sm text-gray-light">
          {presentation.date.format('YYYY/MM/DD')}
        </time>
      </div>
    </a>
  )
}
