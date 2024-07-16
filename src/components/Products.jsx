import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import product from "../assets/gradient-1.png"

const Products = () => {
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal', // Changed from 'vertical' to 'horizontal'
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
  return <>

    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container m-auto text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
        <div class="mb-12 space-y-4 px-6 md:px-0">
          <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            The Product
          </h2>
          <p class="text-center">
            We don't like to brag, but we don't mind letting our customers do it for us. <br />
            Here are a few nice things folks have said about our themes over the years.
          </p>
        </div>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper pb-8">
            <div class="swiper-slide !bg-transparent px-6 md:px-0">
              <div class="p-2 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12">
                <div class="grid md:grid-cols-5">
                  <img
                    src={product}
                    class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                    alt="image"
                    loading="lazy"
                  />
                  <div class="md:col-span-3 mx-auto space-y-6 p-6 text-center sm:p-8">
                    <div class="mx-auto w-24">
                      <img
                        src={product}
                        alt="company logo"
                        height="400"
                        width="142"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
                      aliquam consequatur repellat provident, omnis ut, sapiente voluptates
                      veritatis cum deleniti repudiandae ad doloribus.
                      <span class="font-serif">"</span>
                    </p>
                    <h6 class="text-lg font-semibold leading-none">John Doe</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide !bg-transparent px-6 md:px-0">
              <div class="p-2 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12">
                <div class="grid md:grid-cols-5">
                  <img
                    src="images/card3.webp"
                    class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                    alt="image"
                    width="640"
                    height="422"
                    loading="lazy"
                  />
                  <div class="md:col-span-3 mx-auto space-y-6 p-6 text-center sm:p-8">
                    <div class="mx-auto w-24">
                      <img
                        src="images/clients/client-3.png"
                        alt="company logo"
                        height="400"
                        width="142"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
                      aliquam consequatur repellat provident, omnis ut, sapiente voluptates
                      veritatis cum deleniti repudiandae ad doloribus.
                      <span class="font-serif">"</span>
                    </p>
                    <h6 class="text-lg font-semibold leading-none">John Doe</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide !bg-transparent px-6 md:px-0">
              <div class="p-2 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12">
                <div class="grid md:grid-cols-5">
                  <img
                    src="images/card2.webp"
                    class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                    alt="image"
                    width="640"
                    height="422"
                    loading="lazy"
                  />
                  <div class="md:col-span-3 mx-auto space-y-6 p-6 text-center sm:p-8">
                    <div class="mx-auto w-24">
                      <img
                        src="images/clients/client-8.png"
                        alt="company logo"
                        height="400"
                        width="142"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
                      aliquam consequatur repellat provident, omnis ut, sapiente voluptates
                      veritatis cum deleniti repudiandae ad doloribus.
                      <span class="font-serif">"</span>
                    </p>
                    <h6 class="text-lg font-semibold leading-none">John Doe</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>

  </>
}

export default Products