import { CardGrid } from '../shared/CardGrid'

import { presentations } from './presentation'
import { PresentationCard } from './PresentationCard'

export const PresentationList = () => {
  return (
    <CardGrid>
      {presentations.map((presentation) => {
        return <PresentationCard key={presentation.title} presentation={presentation} />
      })}
    </CardGrid>
  )
}
