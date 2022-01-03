import { Career } from '../../data/career'

type Props = {
  career: Career
}
export const CareerListRow = ({ career }: Props) => {
  return (
    <div className="py-8 first:border-0 border-t border-border md:flex">
      <div className="md:w-96">
        <p className="text-sm text-gray-light">{career.term}</p>
        <h2 className="mt-1 text-xl font-bold text-gray md:mt-2 md:text-2xl">
          {career.companyName}
        </h2>
      </div>
      <div className="flex flex-1 items-center mt-2 md:mt-0">
        <p className="text-gray">{career.description}</p>
      </div>
    </div>
  )
}
