import { AboutSection } from '../components/index/AboutSection'
import { CallForJobOffersSection } from '../components/index/CallForJobOffersSection'
import { CareerSection } from '../components/index/CareerSection'
import { PresentationsSection } from '../components/index/PresentationsSection'
import { ProductsSection } from '../components/index/ProductsSection'

export default function Index() {
  return (
    <main className="container">
      <AboutSection></AboutSection>
      <CareerSection></CareerSection>
      <PresentationsSection></PresentationsSection>
      <ProductsSection></ProductsSection>
      <CallForJobOffersSection></CallForJobOffersSection>
    </main>
  )
}
