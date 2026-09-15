import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { ProductList } from './ProductList'

export const ProductsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Hobby Products" />
      <ProductList />
    </SectionWrapper>
  )
}
