type Props = {
  hashtags: string[]
}

export const Hashtags = ({ hashtags }: Props) => {
  return (
    <ul className="-mx-1 flex flex-wrap text-body-sm text-text-muted">
      {hashtags.map((hashtag) => (
        <li key={hashtag} className="px-1">
          #{hashtag}
        </li>
      ))}
    </ul>
  )
}
