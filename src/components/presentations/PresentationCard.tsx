import Image from 'next/image'

import { Presentation } from '../../data/presentation'

type Props = {
  presentation: Presentation
}
export const PresentationCard = ({ presentation }: Props) => {
  return (
    <a
      className="group border-border mt-8 mx-2 w-72 border rounded-lg cursor-pointer"
      href={presentation.url}
      target="blank"
      rel="noopener noreferer"
    >
      <Image
        src="https://files.speakerdeck.com/presentations/6abe88154f9b4de19f327545fdeaf27b/slide_0.jpg"
        width={1024}
        height={576}
        className="rounded-t-lg"
      ></Image>
      <div className="group-hover:bg-background-dark flex flex-col p-4 pt-2 transition">
        <p className="text-blue text-xs">
          {presentation.hashtags.map((hashtag) => `#${hashtag}`).join(' ')}
        </p>
        <h4 className="font-semibold">{presentation.title}</h4>
        <p className="mt-2 text-gray-light text-sm">{presentation.date.toISOString()}</p>
      </div>
    </a>
  )
}
