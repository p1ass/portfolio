import Image from 'next/image'

import { Presentation } from '../../data/presentation'

type Props = {
  presentation: Presentation
}
export const PresentationCard = ({ presentation }: Props) => {
  return (
    <a
      className="border-border hover:bg-background-dark mt-8 mx-2 border rounded-lg cursor-pointer transition sm:w-72"
      href={presentation.url}
      target="blank"
      rel="noopener noreferer"
    >
      <Image
        src="https://files.speakerdeck.com/presentations/6abe88154f9b4de19f327545fdeaf27b/slide_0.jpg"
        width={1024}
        height={576}
        className="rounded-t-lg"
        alt={presentation.title}
      ></Image>
      <div className="flex flex-col p-4 pt-2">
        <p className="text-blue text-xs">
          {presentation.hashtags.map((hashtag) => `#${hashtag}`).join(' ')}
        </p>
        <h2 className="mt-2 font-semibold">{presentation.title}</h2>
        <p className="mt-2 text-gray-light text-sm">{presentation.date.toISOString()}</p>
      </div>
    </a>
  )
}
