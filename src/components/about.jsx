import React from 'react'
import aboutImg from '../assets/about-img.jpeg'
import { Button } from './ui/button'


const AboutPage = () => {
  return <>
    <div className="my-32 w-full grid-cols-1 justify-center max-w-7xl mx-auto md:flex md:gap-5 lg:grid lg:grid-cols-2">
      <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
        <div className="mb-4 flex items-center justify-center lg:justify-start">
          {/* <img className="h-5" src="/path/to/logo-1.png" alt="logo" /> */}
          <h4 className=" text-2xl font-bold tracking-widest text-primary">
            La nostra visione:
            Connettere il Futuro Attraverso
            l'Innovazione Tecnologica
          </h4>
        </div>
        <p className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4">
          La nostra missione è trasformare complessità in semplicità attraverso il potere della tecnologia.
          Con competenza e dedizione, progettiamo software che ottimizzano processi e permettono
          alle imprese di prosperare nell'era digitale. Siamo il tuo partner per l'evoluzione aziendale e
          l'innovazione senza limiti.
        </p>
        <div className="flex flex-col items-center lg:flex-row">
          <Button>
            Scopri di più
          </Button>
        </div>
      </div>
      <div className="col-span-1 max-sm:mt-6 items-center justify-end lg:flex translate-x-6 p-6 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-500">
        <img
          className="w-4/5 rounded-2xl origin-center"
          src={aboutImg}
          alt="header image"
          
        />
      </div>
    </div>
  </>
}

export default AboutPage