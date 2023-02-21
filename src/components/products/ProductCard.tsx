import Image from 'next/image'

import { Product } from '../../data/product'

type Props = {
  product: Product
}
export const ProductCard = ({ product }: Props) => {
  return (
    <a
      className="mx-2 mt-8 cursor-pointer rounded-lg border border-border transition hover:bg-background-dark sm:w-72"
      href={product.url}
      target="blank"
      rel="noopener noreferer"
    >
      <Image
        src={product.image}
        width={1280}
        height={640}
        className="rounded-t-lg"
        alt={product.title}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <div className="flex flex-col p-4 pt-2">
        <p className="text-sm text-blue">
          {product.hashtags.map((hashtag) => `#${hashtag}`).join(' ')}
        </p>
        <h2 className="mt-2 font-semibold">{product.title}</h2>
        <p className="mt-2 text-gray">{product.description}</p>
      </div>
    </a>
  )
}
