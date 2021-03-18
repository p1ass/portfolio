import { Career } from '../../data/career'

type Props = {
  career: Career
}
export const CareerListRow = ({ career }: Props) => {
  return (
    <div className="border-border py-8 first:border-0 border-t md:flex">
      <div className="md:w-96">
        <p className="text-gray-light text-sm">{career.term}</p>
        <h3 className="mt-1 text-gray text-2xl font-bold md:mt-2">{career.companyName}</h3>
      </div>
      <div className="flex flex-1 items-center mt-2 md:mt-0">
        <p className="text-gray">{career.description}</p>
      </div>
    </div>
  )
}
