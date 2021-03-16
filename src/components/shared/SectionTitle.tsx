import React from 'react'

type Props = {
  title: string
  subtitle: string
}

export const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="text-center text-blue text-3xl font-bold">{title}</h1>
      <span className="block mt-1 text-center text-gray-light">{subtitle}</span>
    </div>
  )
}
