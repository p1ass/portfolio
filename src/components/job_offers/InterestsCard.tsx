import { interests } from '../../data/interests'
import { WhiteBlock } from '../shared/WhiteBlock'

export const InterestsCard = () => {
  return (
    <WhiteBlock>
      <h3 className="text-center text-blue text-2xl font-bold">興味・関心</h3>
      <div className="mx-4">
        {interests.map((interest) => {
          return (
            <div key={interest.field} className="border-border first:border-0 border-t">
              <h4 className="mb-2 mt-4 text-gray text-lg font-bold">{interest.field}</h4>
              <ul className="mb-4 pl-5 list-disc">
                {interest.contents.map((content) => {
                  return (
                    <li key={content} className="mt-1 text-gray">
                      {content}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </WhiteBlock>
  )
}
