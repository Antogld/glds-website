export default function FromItaly() {
  return (
    <div className="bg-white">
      <div className="mx-auto  py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-900 max-w-screen-2xl mx-auto px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#blue-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="blue-gradient">
                <stop stopColor="#3B82F6" /> {/* Blue-500 */}
                <stop offset={1} stopColor="#1E40AF" /> {/* Blue-800 */}
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ridefinire il mondo
              <br />
              con il nostro software all'avanguardia.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Scateniamo la potenza della nostra tecnologia, superando ogni confine e ridefinendo il mondo con i nostri software all'avanguardia.
              Innovazione senza limiti, per un futuro guidato dalla professionalità.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              {/* <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Iniziare
              </a> */}
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Saperne di più <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
