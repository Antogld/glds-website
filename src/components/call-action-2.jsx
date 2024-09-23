import React from 'react'
import blog1 from '../assets/blog5.png';
import blog2 from '../assets/blog6.png';
import blog3 from '../assets/blog7.png';


const CallAction2 = () => {
  return <>

    <div class="py-12">
      <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center">
          <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Approfondimenti: il nostro “perchè”</h2>
          <p class="lg:mx-auto lg:max-w-4xl text-gray-600 dark:text-gray-300 mt-4">
            Visualizza in modo chiaro il nostro mondo. Scopri il motivo che ci spinge ogni giorno a lavorare per te e per la tua azienda.
            La conoscenza è la chiave del successo, da sempre e per sempre.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="group p-2 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50  shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <img src={blog1}
                alt="art cover" loading="lazy" width="1000" height="667" class=" w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                Consolidamento aziendale:
                verso il futuro dell’economia
              </h3>
            </div>

          </div>
          <div class="group p-2 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50  shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <img src={blog2}
                alt="art cover" loading="lazy" width="1000" height="667" class=" w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
              Aziende sotto controllo:
              stop alle brutte sorprese
              </h3>

            </div>

          </div>
          <div class="group p-2 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50  shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <img src={blog3}
                alt="art cover" loading="lazy" width="1000" height="667" class=" w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
              Custodia della nostra terra:
              per le generazioni future
              </h3>
            </div>

          </div>
        </div>
      </div>
    </div>

  </>
}

export default CallAction2