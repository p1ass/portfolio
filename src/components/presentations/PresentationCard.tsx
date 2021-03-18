import Image from 'next/image'

import { Presentation } from '../../data/presentation'

type Props = {
  presentation: Presentation
}
export const PresentationCard = ({ presentation }: Props) => {
  return (
    <a
      className="mt-8 mx-2 hover:bg-background-dark border border-border rounded-lg cursor-pointer transition sm:w-72"
      href={presentation.url}
      target="blank"
      rel="noopener noreferer"
    >
      <Image
        src={presentation.image}
        width={1024}
        height={576}
        className="rounded-t-lg"
        alt={presentation.title}
        objectFit="cover"
      ></Image>
      <div className="flex flex-col p-4 pt-2">
        <p className="text-blue text-sm">
          {presentation.hashtags.map((hashtag) => `#${hashtag}`).join(' ')}
        </p>
        <h2 className="mt-2 font-semibold sm:h-16">{presentation.title}</h2>
        <time className="mt-2 text-gray-light text-sm">
          {presentation.date.format('YYYY/MM/DD')}
        </time>
      </div>
    </a>
  )
}
