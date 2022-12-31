import { presentations } from '../../data/presentation'

import { PresentationCard } from './PresentationCard'

export const PresentationList = () => {
  return (
    <div className="mx-2 flex flex-wrap justify-around md:mx-8">
      {presentations.map((presentation) => {
        return (
          <PresentationCard key={presentation.title} presentation={presentation}></PresentationCard>
        )
      })}
    </div>
  )
}
