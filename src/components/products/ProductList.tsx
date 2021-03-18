import { products } from '../../data/product'

import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-around mx-4 md:mx-8">
      {products.map((product) => {
        return <ProductCard key={product.title} product={product}></ProductCard>
      })}
    </div>
  )
}
