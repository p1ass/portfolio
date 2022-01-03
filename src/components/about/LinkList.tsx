import { AboutLinks } from '../../data/link'

export const AboutLinkList = () => {
  return (
    <div className="flex flex-col justify-center mx-auto mt-4 mb-8 max-w-min md:mx-0 md:ml-32">
      {AboutLinks.map((aboutLink) => (
        <dl key={aboutLink.key} className="flex mt-2 text-gray md:mx-0 md:mt-4">
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
