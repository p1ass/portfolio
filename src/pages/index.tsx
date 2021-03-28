import Head from 'next/head'

import { AboutSection } from '../components/about/AboutSection'
import { CallForJobOffersSection } from '../components/job_offers/CallForJobOffersSection'
import { CareerSection } from '../components/career/CareerSection'
import { PresentationsSection } from '../components/presentations/PresentationsSection'
import { ProductsSection } from '../components/products/ProductsSection'
import { AsideWrapper } from '../components/shared/AsideWrapper'

export default function Index() {
  return (
    <>
      <Head>
        <title>plusoon&apos;s portfolio</title>
      </Head>
      <div>
        <main className="container mb-16 bg-background lg:max-w-5xl">
          <AboutSection></AboutSection>
          <CareerSection></CareerSection>
          <PresentationsSection></PresentationsSection>
          <ProductsSection></ProductsSection>
        </main>
        <AsideWrapper>
          <CallForJobOffersSection></CallForJobOffersSection>
        </AsideWrapper>
      </div>
    </>
  )
}
