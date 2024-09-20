import React from 'react';
import { ArrowRight } from 'lucide-react';
import LogoSection from '@/components/logo-section';
import NewsLetter from '@/components/NewsLetter';
import FAQs from '@/components/Faq';
import laptopImg from '../assets/laptop.png';
import Vector from '../assets/vector.png';
import testOne from '../assets/testimonial-1.png';
import testTwo from '../assets/testimonial-2.png';
import testThree from '../assets/testimonial-3.png';
import CallAction2 from '@/components/call-action-2';

const InnovationHeroSection = () => {
  return <>
    <div className="bg-gradient-to-b from-blue-50 to-teal-50 py-16 md:py-72 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-slate-900 ">
            Pionieri dell'Innovazione e Architetti del Futuro
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-6">
            Guidati dall'innovazione, costruiamo soluzioni aziendali all'avanguardia
            con l'obiettivo di plasmare un futuro di successi imprenditoriali.
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden md:block">
        <div className="relative w-full h-full">
          <img
            src={Vector}
            alt="Workspace with laptop and calculator"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-l-full rounded-r-xl "
          />
        </div>
      </div>
    </div>
    <LogoSection />
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center  gap-12">
          <div className="w-full md:w-1/2">
            <div className=" rounded-lg overflow-hidden">
              <img
                src={laptopImg}
                alt="Laptop on desk"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Mission, Vision & Filosofia</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-600">
                La nostra mission è guidare l'innovazione nel mondo aziendale, offrendo soluzioni avanzate che trasformano la gestione delle imprese. Siamo dedicati a plasmare un futuro in cui le aziende prosperano attraverso l'adozione intelligente della tecnologia, contribuendo al progresso economico e sociale.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-600">
                Ci proiettiamo verso un futuro in cui la nostra innovazione continua a definire nuovi standard, guidando il panorama aziendale globale e ispirando il cambiamento positivo in ogni settore.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Filosofia</h3>
              <p className="text-gray-600">
                La nostra filosofia aziendale è fondata sulla convinzione che l'innovazione, la dedizione al cliente e l'impegno etico siano fondamentali per il nostro successo. Ci impegniamo a superare le sfide con creatività, adattabilità e integrità, mantenendo sempre al centro il valore che portiamo ai nostri clienti e alla comunità. Con passione per l'eccellenza, ci sforziamo di creare soluzioni uniche e sostenibili che trasformano le prospettive aziendali e contribuiscono a un mondo imprenditoriale migliore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              Ogni innovazione è un passo verso un futuro più brillante.
            </p>
          </blockquote>
          <figcaption className="mt-10 text-center">
            <p>
              Ogni innovazione, in Galdiero Systems, è una proiezione verso un futuro radiante. Con il nostro impegno costante per la creatività e la tecnologia all'avanguardia, stiamo tracciando un percorso che non solo anticipa le esigenze aziendali, ma illumina il cammino per un panorama imprenditoriale sempre più luminoso e promettente.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
    {/* New Testimonial Section */}
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Dicono di noi</h2>
        <p className="text-center text-gray-600 mb-12">
          Scopri cosa dicono i nostri clienti sulla nostra soluzione.<br />
          La loro soddisfazione racconta la storia del nostro successo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-tl-3xl rounded-br-3xl border">
            <div className="flex items-center mb-4">
              <img src={testOne} alt="Alessandro Ferrari" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">Alessandro Ferrari</h3>
                <p className="text-gray-600">Ingegnere</p>
              </div>
            </div>
            <p className="text-gray-700">
              Ha veramente rivoluzionato il modo in cui gestisco i progetti e le risorse nella mia impresa. Mi ha permesso di tenere tutto sotto controllo, dal budget alle scadenze.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-900 text-white p-6 rounded-tl-3xl rounded-br-3xl border">
            <div className="flex items-center mb-4">
              <img src={testTwo} alt="Luca Martini" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">Luca Martini</h3>
                <p className="text-indigo-200">Impresa edile Martini</p>
              </div>
            </div>
            <p>
              Uno dei migliori software gestionali in circolazione, nulla da dire. La facilità d'uso è un grandissimo vantaggio rispetto ad altri software. Complimenti davvero al team che lo ha sviluppato, è chiaro che di edilizia ne capiscono.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-tl-3xl rounded-br-3xl border">
            <div className="flex items-center mb-4">
              <img src={testThree} alt="Marco Sampieri" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">Marco Sampieri</h3>
                <p className="text-gray-600">Sampieri & Co. Srl</p>
              </div>
            </div>
            <p className="text-gray-700">
              Nel corso degli anni abbiamo provato vari software, questo si distingue veramente. Forse l'unico che vale davvero la pena acquistare, ci sono ancora alcune funzionalità da migliorare e da aggiungere ma la base di partenza è buona.
            </p>
          </div>
        </div>
      </div>
    </section>
    <CallAction2 />
    <FAQs />
    <NewsLetter />
  </>
};

export default InnovationHeroSection;