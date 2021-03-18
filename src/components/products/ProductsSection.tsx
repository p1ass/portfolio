import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { ProductList } from './ProductList'

export const ProductsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Products" subtitle="制作物"></SectionTitle>
      <ProductList></ProductList>
    </SectionWrapper>
  )
}
