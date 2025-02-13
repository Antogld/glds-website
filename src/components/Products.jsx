import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import product1 from "../assets/product-img.png"
import product2 from "../assets/product-img.png"
import product3 from "../assets/product-img.png"

const Products = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.update();
    }
  }, [swiper]);

  const products = [
    { img: product1, alt: "Product 1" },
    { img: product2, alt: "Product 2" },
    { img: product3, alt: "Product 3" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-24 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="rounded-xl"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <img className="object-cover object-center w-full h-80 xl:h-[28rem]" src={product.img} alt={product.alt} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div>
              <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>
              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                What do you want to know about UI
              </h1>
              <div className="flex items-center mt-6">
                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Design instrument</h3>
              <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                How to raise $100k+ by using blox ui kit on your design
              </a>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">UI Resource</h3>
              <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                Should you create UI Product by using Blox?
              </a>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">Premium Collection</h3>
              <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                Top 10 Blocks you can get on Blox's collection.
              </a>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">Premium kits</h3>
              <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                Top 10 UI kit you can get on Blox's collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;