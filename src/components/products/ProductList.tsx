import { CardGrid } from '../shared/CardGrid'

import { products } from './product'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <CardGrid>
      {products.map((product) => {
        return <ProductCard key={product.title} product={product} />
      })}
    </CardGrid>
  )
}
