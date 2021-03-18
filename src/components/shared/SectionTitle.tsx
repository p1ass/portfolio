import React from 'react'

type Props = {
  title: string
  subtitle: string
  backgroundStyle?: 'white' | 'blue'
}

export const SectionTitle = ({ title, subtitle, backgroundStyle }: Props) => {
  let h1Color = 'text-blue'
  if (backgroundStyle && backgroundStyle == 'blue') {
    h1Color = 'text-white'
  }
  let spanColor = 'text-gray-light'
  if (backgroundStyle && backgroundStyle == 'blue') {
    spanColor = 'text-white'
  }

  return (
    <div>
      <h1 className={`${h1Color} text-center text-3xl font-bold`}>{title}</h1>
      <span className={`block mt-1 text-center ${spanColor}`}>{subtitle}</span>
    </div>
  )
}
