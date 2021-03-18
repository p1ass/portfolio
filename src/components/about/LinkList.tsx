import { AboutLinks } from '../../data/link'

export const AboutLinkList = () => {
  return (
    <div className="flex flex-col justify-center mb-8 mt-4 mx-auto max-w-min md:ml-32 md:mx-0">
      {AboutLinks.map((aboutLink) => (
        <dl key={aboutLink.key} className="flex mt-2 text-gray md:mt-4 md:mx-0">
          <dt className="w-28 text-lg font-bold">{aboutLink.key}</dt>
          <dd>
            {aboutLink.url ? (
              <a href={aboutLink.url} className="underline cursor-pointer">
                {aboutLink.value}
              </a>
            ) : (
              aboutLink.value
            )}
          </dd>
        </dl>
      ))}
    </div>
  )
}
