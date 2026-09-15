import Image from 'next/image'

import { Hashtags } from '../shared/Hashtags'

import { Product } from './product'

type Props = {
  product: Product
}
export const ProductCard = ({ product }: Props) => {
  return (
    <a
      className="card-link flex flex-col overflow-hidden rounded-md border border-border"
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={product.image}
        width={1280}
        height={640}
        className="aspect-[2/1] w-full border-b border-border object-cover"
        alt=""
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-body font-bold">{product.title}</h3>
        <p className="text-body-sm">{product.description}</p>
        <div className="mt-auto">
          <Hashtags hashtags={product.hashtags} />
        </div>
      </div>
    </a>
  )
}
