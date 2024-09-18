import React from 'react';
import heroVideo from '../assets/restruct-video.mp4';
import aboutImg from '../assets/leaf.png';
import footImg from '../assets/foot.png';
import ecoPlugImg from '../assets/eco-plug.png'; // Make sure to add this image to your assets
import { Button } from '@/components/ui/button';
import NewsLetter from '@/components/NewsLetter';
import Blogs from '@/components/BlogSection';
import LogoSectionGreen from '@/components/logo';

const Sostenibilita = () => {
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="lg:pr-10">
            <h1 className="text-4xl text-white font-extrabold sm:text-5xl md:text-6xl mb-6">
              Il nostro impegno verso la
              <span className='text-green-500' > sostenibilità ambientale</span>
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-80 max-w-2xl">
              Presso Galdiero Systems, crediamo fermamente nell'importanza di operare in modo responsabile verso l'ambiente e la comunità. Siamo impegnati a integrare pratiche sostenibili in ogni aspetto del nostro business, guidati dalla consapevolezza del nostro impatto sull'ambiente e dalla volontà di contribuire a un mondo più verde e equo.
            </p>
            {/* Uncomment if you want to add buttons
            <div className="mt-10 space-x-4">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                Inizia Ora
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-500 transition duration-300">
                Contatta Vendite
              </Button>
            </div>
            */}
          </div>
        </div>
      </section>

      <LogoSectionGreen />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 md:mb-0 md:w-1/4">
              Proteggendo l'ambiente...
            </h2>
            <div className="md:w-2/4 flex justify-center">
              <img
                src={ecoPlugImg}
                alt="Eco-friendly power plug"
                className="w-48 h-auto"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 md:mt-0 md:w-1/4 text-right">
              ...per le generazioni a venire
            </h2>
          </div>
        </div>
      </section>

      <div className="py-16 w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 dark:bg-gray-800 lg:p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img
                  src={aboutImg}
                  alt="Sustainable Development"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-md transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Sviluppo sostenibile: investimenti a favore dell'<span className="text-green-500">ambiente</span>
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Siamo impegnati nell'investire risorse significative nella ricerca e nello sviluppo al fine di creare soluzioni innovative che non solo affrontino le sfide ambientali attuali, ma che contribuiscano attivamente alla transizione verso un'economia circolare e a basse emissioni di carbonio.
                  </p>
                  <p>
                    Riconosciamo che l'innovazione è essenziale per affrontare le sfide ambientali e crediamo fermamente che sia possibile fare business in modo sostenibile e redditizio.
                  </p>
                  <p>
                    Attraverso il nostro impegno continuo nella ricerca e nello sviluppo di soluzioni sostenibili, vogliamo dimostrare che è possibile perseguire il successo aziendale mentre ci assumiamo la responsabilità nei confronti dell'ambiente e delle generazioni future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 dark:bg-gray-800 lg:p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Verso un futuro migliore,
                  ogni passo è <span className="text-green-500">Green</span>
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Innovare nel campo delle tecnologie è una spinta costante per il nostro futuro, ma crediamo fermamente che ogni progresso debba essere sostenibile e rispettoso dell’ambiente.
                  </p>
                  <p>
                    Ogni passo avanti nello sviluppo di nuove tecnologie deve essere coniugato con un impegno per la sostenibilità, poiché il benessere del nostro pianeta è intrinsecamente legato al nostro successo.
                  </p>
                  <p>
                    Qui, presso Galdiero Systems, ci impegniamo a integrare la sostenibilità in ogni aspetto della nostra attività, garantendo che ogni innovazione contribuisca a un futuro più verde e promuova un mondo in cui possiamo prosperare in armonia con l’ambiente che ci circonda.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={footImg}
                  alt="Sustainable Development"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl transform hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs />

      <NewsLetter />
    </>
  );
};

export default Sostenibilita;