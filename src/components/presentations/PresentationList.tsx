import { presentations } from '../../data/presentation'

import { PresentationCard } from './PresentationCard'

export const PresentationList = () => {
  return (
    <div className="flex flex-wrap justify-around mx-4 md:mx-8">
      {presentations.map((presentation) => {
        return (
          <PresentationCard key={presentation.title} presentation={presentation}></PresentationCard>
        )
      })}
    </div>
  )
}
