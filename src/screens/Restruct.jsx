import React, { useState } from 'react'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroVideo from '../assets/restruct-video.mp4'
import FAQs from '@/components/Faq'
import NewsLetter from '@/components/NewsLetter'
import ServicesSection from '@/components/Services'
import LogoSection from '@/components/logo-section'

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
    {tiers.map((value, index) => (
      <td key={index} className="text-center py-2">
        {typeof value === 'boolean' ? (
          value ? <Check className="inline h-5 w-5 text-blue-500" /> : <X className="inline h-5 w-5 text-red-500" />
        ) : (
          value
        )}
      </td>
    ))}
  </tr>
)

const Restruct = () => {
  const [billingCycle, setBillingCycle] = useState('mensile');

  const pricingTiers = [
    { title: "Piano Base", price: { mensile: 30, trimestrale: 85, annuale: 324 }, isPopular: false },
    { title: "Piano Standard", price: { mensile: 60, trimestrale: 170, annuale: 648 }, isPopular: false },
    { title: "Piano Professionale", price: { mensile: 120, trimestrale: 340, annuale: 1296 }, isPopular: true },
    { title: "Piano Enterprise", price: { mensile: 250, trimestrale: 710, annuale: 2700 }, isPopular: false }
  ]

  const features = [
    { name: "Spazio di archiviazione in cloud", tiers: ["1 gb", "3 gb", "10 gb", "Unlimited"] },
    { name: "Utenti", tiers: [1, 5, 50, 100] },
    { name: "Chat", tiers: [false, true, true, true] },
    { name: "Calendario & Agenda", tiers: [true, true, true, true] },
    { name: "Movimenti", tiers: ["100/mese", "300/mese", "Unlimited", "Unlimited"] },
    { name: "Gestione clienti", tiers: [50, 200, 500, "Unlimited"] },
    { name: "Gestione fornitori", tiers: [25, 100, 300, "Unlimited"] },
    { name: "Gestione flotta", tiers: [false, "10 vehicles", "50 vehicles", "Unlimited"] },
    { name: "Magazzino", tiers: ["1 magazzino 100 prodotti", "3 magazzini 500 prodotti", "5 magazzini 1000 prodotti", "Unlimited"] },
    { name: "DDT", tiers: ["20/mese", "50/mese", "200/mese", "Unlimited"] },
    { name: "Computi metrici", tiers: [false, false, true, true] },
    { name: "Cantieri", tiers: [3, 10, 70, "Unlimited"] },
    { name: "Cantieri -> Contabilità", tiers: [true, true, true, true] },
    { name: "Cantieri -> Documenti", tiers: [false, true, true, true] },
    { name: "Cantieri -> Rapportini", tiers: [false, true, true, true] },
    { name: "Cantieri -> Giornale dei lavori", tiers: [false, false, true, true] },
    { name: "Cantieri -> Media", tiers: [false, "Foto", "Foto", "Foto & Video"] },
    { name: "Supporto", tiers: ["Standard", "Standard", "Dedicato", "Dedicato 24/7"] },
    { name: "Accesso esclusivo a nuove funzionalità", tiers: [false, false, false, true] },
  ]

  return (
    <>
      <section className="relative overflow-hidden h-[60vh] sm:h-[70vh] bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="lg:pr-10">
            <h1 className="text-4xl text-white font-extrabold sm:text-5xl md:text-6xl mb-6">
              Piani di Prezzo per Ogni Esigenza
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-80 max-w-2xl">
              Scegli il piano perfetto per potenziare i tuoi progetti con Restruct.
              Opzioni flessibili adatte ad aziende di tutte le dimensioni.
            </p>
            <div className="mt-10">
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                Inizia Ora
              </Button>
              <Button variant="outline" className="ml-4 text-black border-white hover:bg-white hover:text-blue-500">
                Contatta Vendite
              </Button>
            </div>
          </div>
        </div>
      </section>
      <LogoSection />
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
  )
}

export default Restruct