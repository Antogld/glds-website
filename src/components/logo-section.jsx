import React from 'react'

const LogoSection = () => {
  return <>

    <div class="relative flex flex-col items-center overflow-hidden py-12  bg-gray-100 dark:bg-gray-800">
      <div class="container relative z-[1] m-auto px-6 md:px-12">
        <div class="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Conquistata <span class="text-blue-600">la fiducia</span> degli imprenditori
          </h2>
        </div>
        <div class="m-auto mt-16 ">
          <div class="flex flex-wrap justify-center gap-6">
            <div
              class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
            >
              <img
                src="images/clients/airbnb.svg"
                class="contrast-0 transition group-hover:contrast-100"
                loading="lazy"
                alt="logo airbnb"
              />
            </div>
            <div
              class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
            >
              <img
                src="images/clients/microsoft.svg"
                class="contrast-0 transition group-hover:contrast-100"
                loading="lazy"
                alt="logo microsoft"
              />
            </div>
            <div
              class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
            >
              <img
                src="images/clients/ge.svg"
                class="contrast-0 transition group-hover:contrast-100"
                loading="lazy"
                alt="logo ge"
              />
            </div>
            <div
              class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
            >
              <img
                src="images/clients/bissell.svg"
                class="contrast-0 transition group-hover:contrast-100"
                loading="lazy"
                alt="logo bissell"
              />
            </div>
            <div
              class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
            >
              <img
                src="images/clients/bissell.svg"
                class="contrast-0 transition group-hover:contrast-100"
                loading="lazy"
                alt="logo bissell"
              />
            </div>
            <div
              class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
            >
              <img
                src="images/clients/automatic.svg"
                class="contrast-0 transition group-hover:contrast-100"
                loading="lazy"
                alt="logo automatic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default LogoSection