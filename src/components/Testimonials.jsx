import React from 'react'
import person1 from "../assets/home_seven_img1.png"
import person2 from "../assets/home_seven_img2.png"
import person3 from "../assets/home_seven_img3.png"
import person4 from "../assets/8.jpg"
import person5 from "../assets/4.jpg"
import person6 from "../assets/13.jpg"

const Testimonials = () => {
  return <>
    <div className="py-16">
      <div className="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Dicono di noi
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Scopri cosa dicono i nostri clienti sulla nostra soluzione.<br />
            La loro soddisfazione racconta la storia del nostro successo.
          </p>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={person1} alt="" width="" height="" loading="lazy" />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Alessandro Ferrari</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ingegnere</p>
              </div>
            </div>
            <p className="mt-8">Ha veramente rivoluzionato il modo in cui gestisco i progetti e le risorse nella mia impresa. Mi ha permesso di tenere tutto sotto controllo, dal budget alle scadenze.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={person2} alt="" width="" height="" loading="lazy" />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Luca Martini</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Impresa edile Martini</p>
              </div>
            </div>
            <p className="mt-8">Uno dei migliori software gestionali in circolazione, nulla da dire. La facilità d'uso è un grandissimo vantaggio rispetto ad altri software. Complimenti davvero al team che lo ha sviluppato, è chiaro che di edilizia ne capiscono.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={person3} alt="" width="" height="" loading="lazy" />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Marco Sampieri</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sampieri & Co.</p>
              </div>
            </div>
            <p className="mt-8">Nel corso degli anno abbiamo provato vai software, questo si distingue veramente. Forse l'unico che vale davvero la pena acquistare, ci sono ancora alcune funzionalità da migliorare e da aggiungere ma la base di partenza è buona.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={person1} alt="" width="" height="" loading="lazy" />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Alessandro Ferrari</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ingegnere</p>
              </div>
            </div>
            <p className="mt-8">Ha veramente rivoluzionato il modo in cui gestisco i progetti e le risorse nella mia impresa. Mi ha permesso di tenere tutto sotto controllo, dal budget alle scadenze.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={person4} alt="" width="" height="" loading="lazy" />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Luca Martini</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Impresa edile Martini</p>
              </div>
            </div>
            <p className="mt-8">Uno dei migliori software gestionali in circolazione, nulla da dire. La facilità d'uso è un grandissimo vantaggio rispetto ad altri software. Complimenti davvero al team che lo ha sviluppato, è chiaro che di edilizia ne capiscono.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={person5} alt="" width="" height="" loading="lazy" />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Marco Sampieri</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sampieri & Co.</p>
              </div>
            </div>
            <p className="mt-8">Nel corso degli anno abbiamo provato vai software, questo si distingue veramente. Forse l'unico che vale davvero la pena acquistare, ci sono ancora alcune funzionalità da migliorare e da aggiungere ma la base di partenza è buona.</p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Testimonials