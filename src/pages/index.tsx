import { AboutSection } from '../components/about/AboutSection'
import { CallForJobOffersSection } from '../components/job_offers/CallForJobOffersSection'
import { CareerSection } from '../components/career/CareerSection'
import { PresentationsSection } from '../components/presentations/PresentationsSection'
import { ProductsSection } from '../components/products/ProductsSection'

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
