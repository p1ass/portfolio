import { Career } from './career'

type Props = {
  career: Career
}
export const CareerListRow = ({ career }: Props) => {
  return (
    <div className="border-t border-border py-8 first:border-0 first:pt-0 last:pb-0 sm:flex sm:gap-8 sm:py-6">
      <div className="sm:w-80 sm:shrink-0">
        <p className="text-body-sm tracking-date text-text-muted">{career.term}</p>
        <h3 className="mt-1 text-h4 font-bold sm:text-h3">{career.companyName}</h3>
      </div>
      <p className="mt-3 text-justify sm:mt-0 sm:text-left">{career.description}</p>
    </div>
  )
}
