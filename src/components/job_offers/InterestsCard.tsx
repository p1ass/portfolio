import { interests } from '../../data/interests'
import { WhiteBlock } from '../shared/WhiteBlock'

export const InterestsCard = () => {
  return (
    <WhiteBlock>
      <h2 className="text-center text-blue text-2xl font-bold">興味・関心</h2>
      <div>
        {interests.map((interest) => {
          return (
            <div key={interest.field} className="first:border-0 border-t border-border">
              <h3 className="mb-2 mt-4 text-gray text-lg font-bold">{interest.field}</h3>
              <ul className="mb-4 pl-5 list-disc">
                {interest.contents.map((content) => {
                  return (
                    <li key={content} className="text-gray sm:mt-1">
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
