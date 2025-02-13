import React from 'react'

const HomePricing = () => {
  return <>

    <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          A Tailus Blocks subscription gives you access to our components and more.
        </h2>
      </div>
      <div
        class="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div class="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div class="relative space-y-6 p-8 sm:p-12">
            <h3 class="text-center text-3xl font-semibold text-gray-700 dark:text-white">Organisation</h3>
            <div>
              <div class="relative flex justify-around">
                <div class="flex items-end">
                  <span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">35</span>
                  <div class="pb-2">
                    <span class="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
                    <span class="block text-xl font-bold text-primary">Off</span>
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>First premium advantage</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>Second advantage weekly</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>Third advantage donate to project</span>
              </li>
            </ul>
            <p
              class="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300"
            >
              <span>Call us at</span>
              <a href="tel:+24300" class="flex items-center space-x-2 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <span class="font-semibold">+1 000 000</span>
              </a>
              <span>or</span>
            </p>
            <a href="mailto:" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-white dark:text-dark">Send us an Email</span>
            </a>
          </div>
        </div>

        <div class="group relative md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div class="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
            <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-gray-300">
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>First premium advantage</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>Second advantage weekly</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>Third advantage donate to project</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-primary">&check;</span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>
            <p class="text-gray-700 dark:text-white">
              Team can be any size, and you can add or switch members as needed. Companies using
              our platform include:
            </p>
            <div class="mt-6 flex justify-between gap-6">
              <img
                class="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                class="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img class="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                class="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default HomePricing