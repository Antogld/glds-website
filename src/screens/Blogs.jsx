import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Instagram } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { Dialog, DialogContent, DialogTitle } from '../components/ui/dialog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
      fetch(import.meta.env.VITE_API_URL + '/blog/blogs')
      .then(response => response.json()).then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);
    // const blogs = [
  //     {
  //      "image": "/assets/blogs/blog1.jpeg",
  //      "Title": "Galdiero Systems: Innovazione e Sviluppo Software d'Avanguardia",
  //      "Content": "Galdiero Systems è un'azienda leader nel campo dello sviluppo software, specializzata nella creazione di soluzioni innovative su misura per le esigenze uniche delle imprese. Con un forte focus sulla progettazione e implementazione di software avanzati, il nostro obiettivo è ottimizzare le operazioni aziendali e promuovere una crescita sostenibile. Il nostro team di esperti si dedica a comprendere le sfide specifiche che le aziende affrontano oggi, lavorando instancabilmente per sviluppare strumenti potenti e personalizzati che semplificano i processi, migliorano l'efficienza e favoriscono il successo a lungo termine."
  //  },
  //  {
  //      "image": "/assets/blogs/blog2.jpeg",
  //      "Title": "Scopri i Vantaggi delle Soluzioni Software di Galdiero Systems",
  //      "Content": "Le nostre soluzioni software offrono una serie di vantaggi distintivi che ci differenziano nel settore. Uno dei principali vantaggi è l'aumento dell'efficienza operativa: i nostri strumenti sono progettati per ottimizzare i processi aziendali, riducendo tempi e sforzi e migliorando significativamente la produttività. Inoltre, il nostro software è costruito con precisione e affidabilità al centro, garantendo agli utenti l'accesso a dati accurati, essenziali per prendere decisioni informate. Siamo impegnati in un'innovazione continua, integrando le ultime tecnologie per mantenere i nostri prodotti all'avanguardia nel settore. La nostra dedizione al supporto clienti è senza pari, offrendo assistenza tempestiva e completa per garantire un'esperienza utente positiva. Inoltre, diamo priorità alla sicurezza dei dati, implementando misure robuste per proteggere le informazioni aziendali sensibili. In Galdiero Systems, ci sforziamo di superare le aspettative fornendo soluzioni software che migliorano le prestazioni complessive dell'azienda."
  //  },
  //  {
  //      "image": "/assets/blogs/blog3.jpeg",
  //      "Title": "Espansione del Nostro Portafoglio Software: Cosa è Disponibile e Cosa Arriverà",
  //      "Content": "Al momento, la nostra offerta software principale è Restruct, uno strumento potente progettato per rispondere a diverse esigenze aziendali. Restruct è stato accolto positivamente per la sua capacità di semplificare le operazioni e migliorare la produttività in vari settori. Tuttavia, il nostro impegno per l'innovazione non si ferma qui. Stiamo attivamente sviluppando nuove soluzioni software che amplieranno ulteriormente il nostro portafoglio e offriranno funzionalità ancora più avanzate per soddisfare le esigenze in evoluzione delle imprese. Questi nuovi prodotti in arrivo sono creati con la stessa attenzione ai dettagli e la dedizione alla qualità per cui Galdiero Systems è nota. Resta sintonizzato mentre ci prepariamo a lanciare questi entusiasmanti nuovi strumenti, che offriranno un supporto ancora maggiore alle aziende che desiderano migliorare le loro operazioni e raggiungere una crescita sostenuta."
  //  },
  //  {
  //      "image": "/assets/blogs/blog4.jpeg",
  //      "Title": "Perché la Sicurezza è una Priorità Assoluta per il Software di Galdiero Systems",
  //      "Content": "In Galdiero Systems, comprendiamo che la sicurezza dei dati aziendali è di fondamentale importanza. Per questo motivo, abbiamo fatto della nostra missione l'incorporazione di rigorose misure di sicurezza in ogni aspetto del nostro processo di sviluppo software. Le nostre soluzioni sono progettate per salvaguardare la riservatezza, l'integrità e la disponibilità delle informazioni, offrendoti la tranquillità che i tuoi dati sono protetti in ogni momento. Implementiamo tecnologie di crittografia avanzate e seguiamo le migliori pratiche in materia di cybersecurity per garantire che il nostro software sia resistente alle minacce. Inoltre, aggiorniamo continuamente i nostri protocolli di sicurezza per rimanere all'avanguardia rispetto ai potenziali rischi e vulnerabilità. Il nostro impegno incrollabile per la sicurezza è una testimonianza della nostra dedizione a costruire fiducia con i nostri clienti e a fornire soluzioni software su cui possono contare. Scegliendo Galdiero Systems, non stai solo investendo in software all'avanguardia, ma anche nella sicurezza e protezione degli asset più preziosi della tua azienda."
  //  }

    // ];

  const handleReadMore = (blog) => {
      setCurrentBlog(blog);
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false); 
      setCurrentBlog(null);
  };

    return (
    <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 ">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white ">Blogs</h2>
            <p className=' text-center mx-auto w-full'>Qui trovi le risposte alle domande più frequenti.
              Se non trovi quello che cerchi puoi sempre contattarci e otterrai una risposta il prima possibile.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{blog.Title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {blog.Content.length > 100 ? `${blog.Content.substring(0, 100)}...` : blog.Content}
                    </p>
                    <Button className="mt-4" onClick={() => handleReadMore(blog)}>
                      Read More
                    </Button>
                </div>
              ))}
          </div>
        </div>
        {currentBlog && (
          <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{currentBlog.Title}</DialogTitle>
              <DialogContent>
                <p>{currentBlog.Content}</p>
                <Button className="mt-4" onClick={handleClose}>
                    Close
                </Button>
              </DialogContent>
          </Dialog>
      )}
    </div>
  );
};

export default Blogs;