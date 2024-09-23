import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
  const faqData = [
    {
      question: "Che tipo di azienda è la Galdiero Systems? Cosa fate?",
      answer: "La Galdiero Systems è un'azienda specializzata nello sviluppo di soluzioni software innovative. Il nostro focus principale è la progettazione e l'implementazione di software avanzati, con particolare attenzione alle esigenze delle imprese. La nostra missione è fornire strumenti potenti e su misura per ottimizzare le operazioni aziendali e promuovere la crescita sostenibile."
    },
    {
      question: "Quali sono i vantaggi dei vostri software?",
      answer: "I nostri software offrono una serie di vantaggi distintivi, tra cui l'efficienza operativa, che ottimizza i processi aziendali riducendo i tempi e migliorando la produttività. La precisione e l'affidabilità sono al centro delle nostre soluzioni, garantendo dati accurati per decisioni informate. Innoviamo costantemente, integrando le ultime tecnologie per mantenere i nostri prodotti all'avanguardia e competitivi nel panorama tecnologico in evoluzione. Il nostro impegno per il supporto clienti è ineguagliato, offrendo assistenza dedicata e tempestiva per garantire una user experience positiva. La sicurezza dei dati è una nostra priorità, e implementiamo misure robuste per proteggere le informazioni aziendali. Siamo impegnati a fornire soluzioni software che superano le aspettative, migliorando la performance complessiva delle imprese."
    },
    {
      question: "Quanti software sono disponibili adesso?",
      answer: "Al momento, l'unico software disponibile è Restruct. Tuttavia, stiamo attivamente lavorando su nuovi software in fase di sviluppo per ampliare ulteriormente la nostra offerta e fornire soluzioni ancora più avanzate per le esigenze aziendali. Resta connesso per le prossime innovazioni!"
    },
    {
      question: "I vostri software sono sicuri?",
      answer: "La sicurezza dei nostri software è una nostra priorità assoluta. Implementiamo rigorose misure di sicurezza per proteggere i dati aziendali, garantendo la riservatezza, l'integrità e la disponibilità delle informazioni. La nostra dedizione alla sicurezza è progettata per offrire tranquillità ai nostri utenti e instaurare una fiducia solida nei confronti dei nostri prodotti."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">FAQ</h2>
          <p className='text-center mx-auto w-full mt-4 text-gray-600 dark:text-gray-300'>
            Qui trovi le risposte alle domande più frequenti.
            Se non trovi quello che cerchi puoi sempre contattarci e otterrai una risposta il prima possibile.
          </p>
        </div>
        <div className="container mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;