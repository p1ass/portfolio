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
        <title>p1ass&apos;s portfolio</title>
      </Head>
      <div>
        <main className="container mb-16 bg-background lg:max-w-5xl">
          <AboutSection />
          <CareerSection />
          <PresentationsSection />
          <ProductsSection />
        </main>
        <AsideWrapper>
          <CallForJobOffersSection />
        </AsideWrapper>
      </div>
    </>
  )
}
