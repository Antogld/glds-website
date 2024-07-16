import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4';

function HeroSection() {
  return (
    <section className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh]">
      {/* Video Background */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container z-10 h-full flex items-center text-white">
        <div className="px-4 sm:px-6 lg:px-8 text-left">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-400 mb-2 sm:mb-4">
            Esplora nuovi orizzonti tecnologici
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-6 leading-tight">
            Dove l'innovazione incontra l'eccellenza
          </h1>
          <p className="text-base sm:text-lg max-w-xl md:text-xl mb-4 sm:mb-8">
            Siamo la forza motrice che plasma il futuro con software avanzati.
            Benvenuti in Galdiero Systems, il punto d'incontro tra tecnologia e ingegnosità.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Scopri l'azienda
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white hover:text-blue-500 text-white font-semibold py-2 px-6 border border-white rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Contattaci
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
