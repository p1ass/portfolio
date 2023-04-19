import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { ProductList } from './ProductList'

export const ProductsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Hobby Products" subtitle="趣味の制作物" />
      <ProductList />
    </SectionWrapper>
  )
}
