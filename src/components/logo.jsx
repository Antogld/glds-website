import React from 'react'
import brandLogo2 from "../assets/company_icon2.png"
import brandLogo3 from "../assets/company_icon3.png"
import brandLogo4 from "../assets/company_icon4.png"
import brandLogo5 from "../assets/company_icon5.png"
import brandLogo6 from "../assets/company_icon6.png"
import brandLogo7 from "../assets/company_icon7.png"
import brandLogo8 from "../assets/company_icon8.png"

const LogoSectionGreen = () => {
  const logos = [
    { src: brandLogo2, alt: "Brand Logo 2" },
    { src: brandLogo3, alt: "Brand Logo 3" },
    { src: brandLogo4, alt: "Brand Logo 4" },
    { src: brandLogo5, alt: "Brand Logo 5" },
    { src: brandLogo6, alt: "Brand Logo 6" },
    { src: brandLogo7, alt: "Brand Logo 7" },
    { src: brandLogo8, alt: "Brand Logo 8" },
  ]

  return (
    <section className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="m-auto text-center mb-8 sm:mb-12 md:mb-16 md:w-8/12 lg:w-6/12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Conquistata <span className="text-green-500">la fiducia</span> degli imprenditori
          </h2>
        </div>
        <div className="max-w-7xl mx-auto relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800 z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-800 z-10"></div>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              {logos.concat(logos).map((logo, index) => (
                <div
                  key={index}
                  className="inline-block group rounded-xl border border-gray-200 dark:border-gray-600 py-1 sm:py-2 px-1 sm:px-2 mx-2 sm:mx-4 cursor-pointer"
                >
                  <img
                    src={logo.src}
                    className="h-16 lg:h-20 w-auto transition duration-300 ease-in-out"
                    loading="lazy"
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoSectionGreen