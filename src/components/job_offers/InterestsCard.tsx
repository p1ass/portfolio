import { interests } from '../../data/interests'

export const InterestsCard = () => {
  return (
    <div className="bg-white flex flex-col m-4 p-4 w-full rounded-lg">
      <h3 className="text-center text-blue text-2xl font-bold">興味・関心</h3>
      <div className="mx-4">
        {interests.map((interest) => {
          return (
            <>
              <h4 key={interest.field} className="my-2 text-gray text-lg font-bold">
                {interest.field}
              </h4>
              <ul className="pl-5 list-disc">
                {interest.contents.map((content) => {
                  return (
                    <li key={content} className="mt-1 text-gray">
                      {content}
                    </li>
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>
    </div>
  )
}
