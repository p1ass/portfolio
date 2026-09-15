import { AboutLinks } from './link'

export const AboutLinkList = () => {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3">
      {AboutLinks.map((aboutLink) => (
        <div key={aboutLink.key} className="contents">
          <dt className="font-bold">{aboutLink.key}</dt>
          <dd>
            {aboutLink.url ? (
              <a href={aboutLink.url} className="link-body">
                {aboutLink.value}
              </a>
            ) : (
              aboutLink.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
