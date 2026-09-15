type Props = {
  title: string
  inverted?: boolean
}

export const SectionTitle = ({ title, inverted = false }: Props) => {
  return (
    <h2
      className={`mb-8 text-center text-h1 font-bold [text-box:trim-both_cap_alphabetic] sm:mb-12 ${inverted ? 'text-text-on-brand' : 'text-accent'}`}
    >
      {title}
    </h2>
  )
}
