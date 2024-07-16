import bgaction from "../assets/action.jpeg"
import action2 from "../assets/action2.jpeg"
import action3 from "../assets/action-3.jpeg"


export default function CallAction() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl max-w-screen-lg mx-auto">Qualunque sia il tuo punto di partenza, qualunque sia il tuo obiettivo,
            Galdiero Systems è con te.</h2>

          <p className="mx-auto mt-4  text-gray-500">
            Lavoriamo per sviluppare prodotti intelligenti in grado di migliorare la qualità del lavoro e siamo in grado di offrire soluzioni altamente performanti.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="#" className="group relative block">
              <img
                src={bgaction}
                alt="Inizia il tuo viaggio"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Inizia il tuo viaggio</h3>

                <p
                  className="mt-1.5 inline-block bg-gray-200 rounded px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary"
                >
                  Intraprendi un viaggio verso il successo aziendale con Galdiero Systems al tuo fianco.
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group relative block">
              <img
                src={action2}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Raggiungi i tuoi traguardi</h3>

                <p
                  className="mt-1.5 inline-block bg-gray-200 rounded px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary"
                >
                  Raggiungi i tuoi obiettivi finanziari con le soluzioni professionali sviluppate dalla Galdiero Systems.
                </p>
              </div>
            </a>
          </li>

          <li className="lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block">
              <img
                src={action3}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Partner di successo</h3>

                <p
                  className="mt-1.5 inline-block bg-gray-200 rounded px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary"
                >
                  Sperimenta supporto e crescita durante il tuo percorso con Galdiero Systems.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
