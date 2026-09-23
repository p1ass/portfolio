type Props = {
  title: string
  inverted?: boolean
}

export const SectionTitle = ({ title, inverted = false }: Props) => {
  return (
    <h2
      className={`mb-10 text-center text-h2 font-bold [text-box:trim-both_cap_alphabetic] sm:mb-12 sm:text-h1 ${inverted ? 'text-text-on-brand' : 'text-accent'}`}
    >
      {title}
    </h2>
  )
}
