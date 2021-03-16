type Props = {
  title: string
  subtitle: string
}

export const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="text-3xl text-blue text-center font-bold">{title}</h1>
      <span className="text-center block text-gray-light">{subtitle}</span>
    </div>
  )
}
