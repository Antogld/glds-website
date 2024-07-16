import React from 'react'
import brandLogo1 from "../assets/brand-logo-1.png"
import brandLogo2 from "../assets/company_icon2.png"
import brandLogo3 from "../assets/company_icon3.png"
import brandLogo4 from "../assets/company_icon4.png"
import brandLogo5 from "../assets/company_icon5.png"
import brandLogo6 from "../assets/company_icon6.png"

const LogoSection = () => {
  const logos = [
    { src: brandLogo1, alt: "Brand Logo 1" },
    { src: brandLogo2, alt: "Brand Logo 2" },
    { src: brandLogo3, alt: "Brand Logo 3" },
    { src: brandLogo4, alt: "Brand Logo 4" },
    { src: brandLogo5, alt: "Brand Logo 5" },
    { src: brandLogo6, alt: "Brand Logo 6" },
  ]

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="m-auto text-center md:mb-16 md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Conquistata <span className="text-blue-600">la fiducia</span> degli imprenditori
          </h2>
        </div>
        <div className="max-w-7xl mx-auto relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800 z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-800 z-10"></div>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              {logos.concat(logos).map((logo, index) => (
                <div
                  key={index}
                  className="inline-block group rounded-xl border border-gray-200 dark:border-gray-600 bg-slate-900 py-2 px-2 mx-4"
                >
                  <img
                    src={logo.src}
                    className="h-20 w-auto contrast-0 transition group-hover:contrast-100"
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

export default LogoSection