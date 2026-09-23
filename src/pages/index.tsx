import Head from 'next/head'

import { AboutSection } from '../components/about/AboutSection'
import { CallForJobOffersSection } from '../components/job_offers/CallForJobOffersSection'
import { CareerSection } from '../components/career/CareerSection'
import { PresentationsSection } from '../components/presentations/PresentationsSection'
import { ProductsSection } from '../components/products/ProductsSection'
import { AsideWrapper } from '../components/shared/AsideWrapper'
import { CertificatesSection } from '../components/certificates/CertificatesSection'

export default function Index() {
  return (
    <>
      <Head>
        <title>p1ass&apos;s portfolio</title>
      </Head>
      <main className="mx-auto max-w-5xl px-6">
        <AboutSection />
        <CareerSection />
        <CertificatesSection />
        <PresentationsSection />
        <ProductsSection />
      </main>
      <AsideWrapper>
        <CallForJobOffersSection />
      </AsideWrapper>
    </>
  )
}
