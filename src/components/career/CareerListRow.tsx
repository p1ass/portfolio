import { Career } from '../../data/career'

type Props = {
  career: Career
}
export const CareerListRow = ({ career }: Props) => {
  return (
    <div className="border-border flex py-8 first:border-0 border-t">
      <div className="w-96">
        <p className="text-gray-light text-sm">{career.term}</p>
        <h3 className="mt-2 text-gray text-2xl font-bold">{career.companyName}</h3>
      </div>
      <div className="flex flex-1 items-center">
        <p className="text-gray">{career.description}</p>
      </div>
    </div>
  )
}
