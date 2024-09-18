import React from 'react'
import blog1 from '../assets/1.png';
import blog2 from '../assets/2.png';
import blog3 from '../assets/3.png';


const Blogs = () => {
  return <>

    <div class="py-12">
      <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center">
          <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Ultime notizie dal nostro blog</h2>
          <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Scopri le ultime novità, approfondimenti e consigli del settore attraverso il nostro blog: un'importante risorsa per rimanere al passo con le tendenze e le best practices.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50  shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <img src={blog1}
                alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
              <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Career
              </p>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                How to win any job you want. Get started with 5 steps.
              </h3>
            </div>

          </div>
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50  shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <img src={blog2}
                alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
              <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Lifestyle
              </p>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                10 ways to reduce your office work depression.
              </h3>

            </div>

          </div>
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50  shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <img src={blog3}
                alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
              <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Career
              </p>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                Why should you work as a team even on small projects.
              </h3>
            </div>

          </div>
        </div>
      </div>
    </div>

  </>
}

export default Blogs