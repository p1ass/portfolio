import { careers } from './career'
import { CareerListRow } from './CareerListRow'

export const CareerList = () => {
  return (
    <div>
      {careers.map((career) => {
        return <CareerListRow key={career.term} career={career} />
      })}
    </div>
  )
}
