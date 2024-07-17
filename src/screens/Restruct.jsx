import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroImage1 from '../assets/about-img.jpeg'
import heroImage2 from '../assets/action-3.jpeg'
import heroImage3 from '../assets/action2.jpeg'
import FAQs from '@/components/Faq'
import NewsLetter from '@/components/NewsLetter'
import ServicesSection from '@/components/Services'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"

const PricingTier = ({ title, price, isPopular, onTryFree }) => (
  <div className={`p-6 bg-white rounded-lg shadow ${isPopular ? 'border-2 border-blue-500' : ''}`}>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-4 text-3xl font-bold">€{price}<span className="text-sm font-normal text-gray-500">/mese</span></p>
    <Button
      className={`mt-4 w-full ${isPopular ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
    >
      Acquista ora
    </Button>
    <button onClick={onTryFree} className="mt-2 w-full text-blue-500 underline">
      Inizia prova gratuita
    </button>
  </div>
)

const FeatureRow = ({ feature, tiers }) => (
  <tr className="border-b">
    <td className="py-2">{feature}</td>
    {tiers.map((hasTier, index) => (
      <td key={index} className="text-center py-2">
        {hasTier ? <Check className="inline h-5 w-5 text-blue-500" /> : "-"}
      </td>
    ))}
  </tr>
)

const Restruct = () => {
  const [billingCycle, setBillingCycle] = useState('mensile');

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const carouselImages = [heroImage1, heroImage2, heroImage3]

  const pricingTiers = [
    { title: "Piano Base", price: { mensile: 30, trimestrale: 85, annuale: 324 }, isPopular: false },
    { title: "Piano Standard", price: { mensile: 60, trimestrale: 170, annuale: 648 }, isPopular: false },
    { title: "Piano Professionale", price: { mensile: 120, trimestrale: 340, annuale: 1296 }, isPopular: true },
    { title: "Piano Enterprise", price: { mensile: 250, trimestrale: 710, annuale: 2700 }, isPopular: false }
  ]

  const features = [
    { name: "Voce Dinamica", tiers: [20, 600, "Illimitato", "Illimitato"] },
    { name: "Voce Dinamica", tiers: [5, 50, "Illimitato", "Illimitato"] },
    { name: "Voce Dinamica", tiers: [true, true, true, true] },
    { name: "Voce Dinamica", tiers: [true, true, true, true] },
    { name: "Voce Dinamica", tiers: [false, true, true, true] },
    { name: "Voce Dinamica", tiers: [false, true, true, true] },
    { name: "Voce Dinamica", tiers: [false, false, true, true] },
    { name: "Voce Dinamica", tiers: [false, false, true, true] },
    { name: "Voce Dinamica", tiers: [false, false, true, true] },
    { name: "Voce Dinamica", tiers: [false, true, true, true] },
    { name: "Voce Dinamica", tiers: [true, true, true, true] },
  ]

  return <>
    <section className="bg-slate-900 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-4xl text-white font-extrabold sm:text-5xl md:text-6xl mb-6">
              Piani di Prezzo per Ogni Esigenza
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-80 max-w-2xl mx-auto">
              Scegli il piano perfetto per potenziare i tuoi progetti con Restruct.
              Opzioni flessibili adatte ad aziende di tutte le dimensioni.
            </p>
            <div className="mt-10">
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                Inizia Ora
              </Button>
              <Button variant="outline" className="ml-4 ">
                Contatta Vendite
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt={`Hero ${index + 1}`} className="rounded-lg shadow-xl w-full h-full object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    <ServicesSection />
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Qualunque sia il tuo obiettivo, abbiamo il piano giusto per te.
        </h2>

        <div className="flex justify-center mb-8">
          {['mensile', 'trimestrale', 'annuale'].map((cycle) => (
            <button
              key={cycle}
              className={`px-4 py-2 ${billingCycle === cycle ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setBillingCycle(cycle)}
            >
              {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              {...tier}
              price={tier.price[billingCycle]}
              onTryFree={() => console.log(`Prova gratuita per ${tier.title}`)}
            />
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2 px-4">Confronta i piani</th>
                <th className="py-2 px-4">Base</th>
                <th className="py-2 px-4">Standard</th>
                <th className="py-2 px-4">Professionale</th>
                <th className="py-2 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <FeatureRow key={index} feature={feature.name} tiers={feature.tiers} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <FAQs />
    <NewsLetter />
  </>
}

export default Restruct