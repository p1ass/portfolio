import { products } from './product'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <div className="mx-2 flex flex-wrap justify-around md:mx-8">
      {products.map((product) => {
        return <ProductCard key={product.title} product={product} />
      })}
    </div>
  )
}
