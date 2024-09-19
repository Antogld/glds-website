import React from 'react';
import heroVideo from '../assets/restruct-video.mp4';
import LogoSection from '@/components/logo-section';
import NewsLetter from '@/components/NewsLetter';
import Blogs from '@/components/BlogSection';

const Eticaeconformita = () => {
  const sections = [
    { id: "principi", title: "I Principi Fondamentali di Galdiero Systems" },
    { id: "politiche", title: "Politiche aziendali" },
    { id: "codice", title: "Codice di condotta" },
    { id: "concorrenza", title: "Concorrenza" },
    { id: "anticorruzione", title: "Lotta alla corruzione" },
  ];

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
              Etica e conformità
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-80 max-w-2xl">
              Scopri come in Galdiero Systems promuoviamo la trasparenza, l'integrità e l'aderenza ai più alti standard etici e normativi, garantendo un ambiente di lavoro etico e rispettoso.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="principi" className="py-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">I Principi Fondamentali di Galdiero Systems</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                In Galdiero Systems, ci impegniamo a mantenere standard elevati di etica e conformità in tutte le nostre attività aziendali. Forniamo un ambiente di lavoro basato sulla trasparenza, l'integrità e il rispetto reciproco, promuovendo una cultura aziendale costruita su valori solidi.
              </p>
              <p>
                La nostra politica etica guida le nostre decisioni e azioni quotidiane, assicurando che operiamo nel rispetto delle leggi, delle normative e delle migliori pratiche del settore. Siamo impegnati a garantire che ogni membro del nostro team comprenda e aderisca ai nostri standard etici e normativi, contribuendo così a mantenere la fiducia dei nostri clienti, partner e stakeholder.
              </p>
              <p>
                La nostra dedizione all'etica e alla conformità si estende oltre i confini dell'azienda stessa. Promuoviamo la trasparenza e la responsabilità attraverso la comunicazione aperta e l'accessibilità delle informazioni pertinenti.
              </p>
              <p>
                Monitoriamo costantemente le nostre pratiche aziendali per identificare eventuali aree di miglioramento e ci impegniamo a correggere prontamente qualsiasi violazione dei nostri principi etici e normativi. In Galdiero Systems, crediamo che l'etica e la conformità siano fondamentali per il nostro successo a lungo termine e per la costruzione di relazioni durature con i nostri stakeholder.
              </p>
            </div>
          </section>

          <section id="politiche" className="py-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Politiche aziendali</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Nel perseguire la nostra missione di fornire soluzioni tecnologiche innovative, Galdiero Systems pone un'enfasi particolare sul rispetto dei principi etici e delle normative vigenti. Le nostre politiche aziendali riflettono il nostro impegno a condurre le nostre attività in modo responsabile, rispettando i più elevati standard di integrità, trasparenza e conformità. Queste politiche, ampiamente diffuse all'interno dell'organizzazione, fungono da guida per tutti i nostri dipendenti e collaboratori esterni, stabilendo chiaramente le aspettative per il loro comportamento etico e professionale.
              </p>
              <p>
                Tra le politiche fondamentali di Galdiero Systems vi sono stringenti linee guida anti-corruzione, che vietano severamente ogni forma di corruzione, estorsione o coercizione in qualsiasi contesto commerciale. Inoltre, le nostre norme sulla privacy dei dati sono progettate per garantire la massima protezione dei dati personali dei nostri clienti e degli utenti finali, conformemente alle leggi e ai regolamenti applicabili. Ci impegniamo a trattare con riservatezza e rispetto le informazioni sensibili e a utilizzare solo le informazioni necessarie per il compimento delle nostre attività commerciali.
              </p>
              <p>
                La nostra politica aziendale include anche procedure per la gestione dei conflitti di interesse, al fine di prevenire situazioni in cui gli interessi personali dei nostri dipendenti possano influenzare negativamente le decisioni aziendali o compromettere l'integrità delle nostre operazioni. I nostri dipendenti sono tenuti a rivelare tempestivamente qualsiasi potenziale conflitto di interesse e ad agire in modo trasparente e responsabile nell'affrontare tali situazioni.
              </p>
              <p>
                Inoltre, promuoviamo una cultura aziendale basata sulla comunicazione aperta e la collaborazione, incoraggiando i dipendenti a porre domande e a segnalare eventuali preoccupazioni in materia di etica e conformità. Offriamo regolarmente formazione e sensibilizzazione sull'etica aziendale per assicurarci che tutti i membri del nostro team comprendano appieno i nostri principi e siano in grado di applicarli nella pratica quotidiana.
              </p>
              <p>
                In conclusione, le politiche aziendali di Galdiero Systems rappresentano il nostro impegno a operare in modo responsabile e etico, assicurando che la nostra crescita aziendale avvenga nel rispetto dei valori fondamentali dell'integrità, della trasparenza e del rispetto. Siamo determinati a mantenere la fiducia dei nostri clienti, partner commerciali e altre parti interessate, e a svolgere un ruolo positivo nella società e nell'ambiente in cui operiamo.
              </p>
            </div>
          </section>

          <section id="codice" className="py-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Codice di condotta</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Il codice di condotta di Galdiero Systems rappresenta il nucleo dei nostri valori aziendali e stabilisce le linee guida etiche e comportamentali che tutti i membri del nostro team sono tenuti a seguire rigorosamente. Questo documento dettagliato, suddiviso in sezioni chiare e comprensibili, offre orientamenti approfonditi su come comportarsi in situazioni di lavoro quotidiane, nonché su come interagire con i clienti, i partner commerciali e altre parti interessate.
              </p>
              <p>
                Uno dei principi fondamentali del nostro codice di condotta è l'integrità, che sottolinea l'importanza di agire con onestà, equità e rispetto in tutte le nostre interazioni professionali. Ci impegniamo a comunicare in modo trasparente e aperto, ad evitare conflitti di interesse e a rispettare la proprietà intellettuale e la riservatezza delle informazioni.
              </p>
              <p>
                La sezione relativa alla conformità normativa fornisce una guida dettagliata sul rispetto delle leggi e dei regolamenti applicabili nei settori in cui operiamo. I nostri dipendenti sono tenuti a familiarizzare con le normative pertinenti e a rispettarle scrupolosamente, assicurando che le nostre attività siano conformi ai più elevati standard legali ed etici.
              </p>
              <p>
                Il codice di condotta affronta anche tematiche come la diversità e l'inclusione, sottolineando l'importanza di creare un ambiente di lavoro in cui ogni individuo sia trattato con rispetto e dignità, indipendentemente da razza, etnia, genere, orientamento sessuale, età o capacità fisica.
              </p>
              <p>
                Inoltre, il nostro codice di condotta affronta la questione della responsabilità sociale d'impresa (CSR), esortando i dipendenti a considerare l'impatto sociale e ambientale delle loro azioni e a contribuire positivamente alle comunità in cui operiamo.
              </p>
              <p>
                Infine, il codice di condotta include procedure per la gestione delle violazioni, stabilendo chiaramente le modalità di segnalazione e gestione delle potenziali violazioni del codice. Forniamo canali di comunicazione sicuri e riservati per segnalare eventuali preoccupazioni in materia di etica e conformità, assicurando che ogni segnalazione venga trattata con la massima serietà e riservatezza.
              </p>
              <p>
                In conclusione, il nostro codice di condotta riflette il nostro impegno a condurre le nostre attività in modo etico, responsabile e conforme alla legge. È uno strumento essenziale per guidare il comportamento dei nostri dipendenti e assicurare che operiamo nel rispetto dei nostri valori fondamentali e degli standard più elevati di etica e conformità.
              </p>
            </div>
          </section>

          <section id="concorrenza" className="py-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Concorrenza</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Il rispetto del diritto della concorrenza è un aspetto cruciale delle politiche aziendali di Galdiero Systems in materia di etica e conformità. Siamo impegnati a competere in modo leale e trasparente sul mercato, rispettando tutte le leggi e le normative che regolano la concorrenza economica. Questo significa evitare pratiche anti-concorrenziali, come accordi illegali con i concorrenti per fissare prezzi o dividere il mercato, discriminazioni ingiustificate nei confronti di altri concorrenti o abusi di posizione dominante sul mercato.
              </p>
              <p>
                Inoltre, promuoviamo una cultura aziendale basata sulla lealtà e l'onestà nel trattare con i concorrenti, incoraggiando i nostri dipendenti a rispettare la proprietà intellettuale e a evitare il plagio o la violazione dei diritti di proprietà intellettuale dei nostri concorrenti. Ci impegniamo a condurre le nostre attività commerciali in modo tale da garantire la concorrenza libera e leale sul mercato, consentendo così una scelta più ampia e migliore per i consumatori.
              </p>
              <p>
                Nel rispetto del diritto della concorrenza, Galdiero Systems fornisce ai suoi dipendenti formazione e orientamento continui su come identificare e prevenire pratiche anti-concorrenziali. Forniamo inoltre canali di segnalazione sicuri e riservati per segnalare eventuali violazioni del diritto della concorrenza, assicurando che tutte le segnalazioni vengano trattate in modo tempestivo e adeguato.
              </p>
              <p>
                In conclusione, il rispetto del diritto della concorrenza è un pilastro fondamentale della nostra strategia aziendale, e ci impegniamo a rispettare tutte le leggi e le normative in materia di concorrenza economica. Mantenendo la nostra condotta commerciale etica e leale, contribuiamo a promuovere un ambiente competitivo sano e dinamico, che beneficia sia i consumatori che l'economia nel suo complesso.
              </p>
            </div>
          </section>

          <section id="anticorruzione" className="py-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lotta alla corruzione</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                La lotta alla corruzione è una priorità assoluta per Galdiero Systems e rappresenta uno dei pilastri fondamentali delle nostre politiche aziendali in materia di etica e conformità. Riconosciamo che la corruzione mina la fiducia nelle istituzioni, danneggia la concorrenza leale e compromette l'integrità delle nostre operazioni commerciali. Pertanto, ci impegniamo a prevenire, rilevare e affrontare la corruzione in tutte le sue forme, sia all'interno che all'esterno dell'azienda.
              </p>
              <p>
                Per combattere la corruzione, Galdiero Systems ha implementato una serie di misure preventive, tra cui politiche rigorose contro la corruzione e procedure per la gestione dei conflitti di interesse. Queste politiche sono diffuse ampiamente all'interno dell'organizzazione e stabiliscono chiaramente le aspettative per il comportamento etico e professionale dei nostri dipendenti e collaboratori esterni. Inoltre, offriamo formazione e sensibilizzazione regolari sulle questioni legate alla corruzione, al fine di garantire che tutti i membri del nostro team comprendano appieno i rischi associati e siano in grado di identificare e segnalare comportamenti sospetti.
              </p>
              <p>
                Un elemento chiave della nostra strategia anti-corruzione è la promozione di una cultura aziendale basata sull'integrità e sulla trasparenza. Incoraggiamo i nostri dipendenti a comportarsi in modo etico in ogni situazione, a comunicare apertamente e a segnalare tempestivamente qualsiasi forma di corruzione o comportamento non etico. Inoltre, forniamo canali di segnalazione sicuri e riservati per segnalare violazioni del nostro codice di condotta o comportamenti sospetti, garantendo che ogni segnalazione venga trattata con la massima serietà e riservatezza.
              </p>
              <p>
                In aggiunta alle misure preventive, Galdiero Systems adotta anche controlli interni e procedure di monitoraggio per rilevare e indagare su eventuali casi di corruzione. Collaboriamo attivamente con le autorità competenti e con altre parti interessate per affrontare la corruzione e contribuire a promuovere un ambiente di business etico e trasparente.
              </p>
              <p>
                In conclusione, la lotta alla corruzione è un impegno costante e prioritario per Galdiero Systems. Attraverso politiche rigorose, formazione continua e una cultura aziendale basata sull'integrità, ci impegniamo a proteggere la nostra azienda, i nostri dipendenti e le nostre operazioni commerciali dall'insidiosa minaccia della corruzione. Siamo determinati a mantenere gli standard più elevati di etica e conformità e a contribuire a promuovere un ambiente commerciale equo, trasparente e libero dalla corruzione.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Additional Components */}
      <Blogs />
      <NewsLetter />
    </>
  );
};

export default Eticaeconformita;