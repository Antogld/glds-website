import React from 'react'
import brandLogo1 from "../assets/brand-logo-1.png"
// import brandLogo2 from "../assets/brand-logo-2.png"
// import brandLogo3 from "../assets/brand-logo-3.png"
// import brandLogo4 from "../assets/brand-logo-4.png"
// import brandLogo5 from "../assets/brand-logo-5.png"
// import brandLogo6 from "../assets/brand-logo-6.png"

const LogoSection = () => {
  const logos = [
    { src: brandLogo1, alt: "Brand Logo 1" },
    // { src: brandLogo2, alt: "Brand Logo 2" },
    // { src: brandLogo3, alt: "Brand Logo 3" },
    // { src: brandLogo4, alt: "Brand Logo 4" },
    // { src: brandLogo5, alt: "Brand Logo 5" },
    // { src: brandLogo6, alt: "Brand Logo 6" },
  ]

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div class="m-auto text-center md:mb-16 md:w-8/12 lg:w-6/12">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Conquistata <span class="text-blue-600">la fiducia</span> degli imprenditori
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10 transition duration-300"
            >
              <img
                src={logo.src}
                // className="h-12 w-auto contrast-0 transition group-hover:contrast-100"
                className="h-12 w-auto "
                loading="lazy"
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSection