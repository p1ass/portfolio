import { careers } from '../../data/career'

import { CareerListRow } from './CareerListRow'

export const CareerList = () => {
  return (
    <div className="mt-4 mx-8">
      {careers.map((career) => {
        return <CareerListRow key={career.companyName} career={career}></CareerListRow>
      })}
    </div>
  )
}
