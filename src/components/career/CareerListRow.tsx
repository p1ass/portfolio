import { Career } from './career'

type Props = {
  career: Career
}
export const CareerListRow = ({ career }: Props) => {
  return (
    <div className="border-t border-border py-8 first:border-0 md:flex">
      <div className="md:w-96">
        <p className="text-sm text-gray-light">{career.term}</p>
        <h2 className="mt-1 text-xl font-bold text-gray md:mt-2 md:text-2xl">
          {career.companyName}
        </h2>
      </div>
      <div className="mt-2 flex flex-1 items-center md:mt-0">
        <p className="text-gray">{career.description}</p>
      </div>
    </div>
  )
}
