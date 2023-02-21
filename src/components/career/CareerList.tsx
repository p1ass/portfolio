import { careers } from './career'
import { CareerListRow } from './CareerListRow'

export const CareerList = () => {
  return (
    <div className="mx-4 mt-4">
      {careers.map((career) => {
        return <CareerListRow key={career.companyName} career={career}></CareerListRow>
      })}
    </div>
  )
}
