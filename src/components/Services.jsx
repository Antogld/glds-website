import React from 'react';
import { Calculator, ClipboardList, Command, File, HardHat, User2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

const services = [
  {
    icon: <ClipboardList className="w-12 h-12" />,
    title: "Tieni traccia di qualsiasi movimento",
    text: "Monitora i movimenti del conto, i materiali, l'attrezzatura e i documenti di trasporto con la nostra soluzione avanzata, massima precisione e efficienza."
  },
  {
    icon: <File className="w-12 h-12" />,
    title: "Gestisci tutti i tuoi preventivi",
    text: "Controllo completo su tutti i tuoi preventivi, semplifica il processo di creazione, aumenta la precisione e pianifica con fiducia."
  },
  {
    icon: <User2 className="w-12 h-12" />,
    title: "Controlla clienti e fornitori",
    text: "Ottimizza la gestione di clienti e fornitori, semplifica le relazioni, migliora la comunicazione e potenzia la tua crescita."
  },
  {
    icon: <HardHat className="w-12 h-12" />,
    title: "Gestisci ogni cantiere in tempo reale",
    text: "Massima visibilità su qualsiasi aspetto del cantiere. Aumenta dell'efficienza operativa e controllo totale per garantire il successo dei tuoi progetti edili."
  },
  {
    icon: <Calculator className="w-12 h-12" />,
    title: "Computi metrici estimativi rapidi",
    text: "Acceleriamo il processo di creazione dei computi metrici per garantirti una valutazione affidabile e dettagliata, ma soprattutto tempi di progettazione ottimizzati."
  },
  {
    icon: <Command className="w-12 h-12" />,
    title: "Chat e calendario integrati",
    text: "Coordinamento perfetto e senza sforzi con tutti i collaboratori per una gestione aziendale più efficace, fluida e collaborativa."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Semplice da utilizzare, ma con <span className="text-blue-600">potenti funzionalità</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 text-blue-600" })}
                </div>
                <CardTitle className="text-xl font-semibold text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">{service.text}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;