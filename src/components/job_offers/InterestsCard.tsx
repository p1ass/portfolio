import { WhiteBlock } from '../shared/WhiteBlock'

import { interests } from './interests'

export const InterestsCard = () => {
  return (
    <WhiteBlock>
      <h3 className="text-h4 font-bold">興味・関心</h3>
      <div className="mt-2">
        {interests.map((interest) => {
          return (
            <div key={interest.field} className="border-t border-border py-4 first:border-0">
              <h4 className="text-body font-bold">{interest.field}</h4>
              <ul className="mt-2 list-disc pl-6 text-body-sm">
                {interest.contents.map((content) => {
                  return <li key={content}>{content}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </WhiteBlock>
  )
}
