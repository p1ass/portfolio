import { AboutLinks } from '../../data/link'

export const AboutLinkList = () => {
  return (
    <div className="mx-auto mt-4 mb-8 flex max-w-min flex-col justify-center md:mx-0 md:ml-32">
      {AboutLinks.map((aboutLink) => (
        <dl key={aboutLink.key} className="mt-2 flex text-gray md:mx-0 md:mt-4">
          <dt className="w-28 text-lg font-bold">{aboutLink.key}</dt>
          <dd>
            {aboutLink.url ? (
              <a href={aboutLink.url} className="cursor-pointer underline">
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
