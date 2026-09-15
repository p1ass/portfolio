import { Career } from './career'

type Props = {
  career: Career
}
export const CareerListRow = ({ career }: Props) => {
  return (
    <div className="border-t border-border py-6 first:border-0 first:pt-0 last:pb-0 sm:flex sm:gap-8">
      <div className="sm:w-80 sm:shrink-0">
        <p className="text-body-sm tracking-date text-text-muted">{career.term}</p>
        <h3 className="mt-1 text-h3 font-bold">{career.companyName}</h3>
      </div>
      <p className="mt-2 sm:mt-0">{career.description}</p>
    </div>
  )
}
