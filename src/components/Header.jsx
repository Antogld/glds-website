import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoTransparent from "../assets/logo-transparent.png"
import logo from "../assets/logo.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const menuTimeoutRef = useRef(null)
  const location = useLocation()
  const isHomepage = location.pathname === '/'
  const isRestructPage = location.pathname === '/restruct'
  const isSostenibilita = location.pathname === '/sostenibilita'
  const isEticaeconformita = location.pathname === '/eticaeconformita'
  const isBlog = location.pathname === '/blog'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/restruct", label: "Restruct" },
    { to: "/blog", label: "Blog" },
  ]

  const logoSrc = (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? logoTransparent : logo

  const isActiveLink = (path) => location.pathname === path

  const handleMenuEnter = (menu) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current)
    setActiveMenu(menu)
  }

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 300) // 300ms delay before closing the menu
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomepage || isRestructPage || isSostenibilita || isEticaeconformita
        ? isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-8 relative">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                  (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? 'text-white' : 'text-gray-700'
                } ${isActiveLink(link.to) ? 'border-b-2 border-blue-600' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Azienda dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMenuEnter('azienda')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`text-lg font-medium transition-colors hover:text-blue-600 flex items-center ${
                  (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                Azienda
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeMenu === 'azienda' && (
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-md overflow-hidden mt-2 w-[450px]">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2 border-b">Su di noi</h3>
                        {/* Add links or content for Chi Siamo */}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 border-b">Impegno aziendale</h3>
                        <ul>
                          <li className="mb-2">
                            <Link
                              to="/sostenibilita"
                              className="hover:text-blue-600 transition-colors duration-200"
                            >
                              Sostenibilità
                            </Link>
                          </li>
                          <li className="mb-2">
                            <Link
                              to="/eticaeconformita"
                              className="hover:text-blue-600 transition-colors duration-200"
                            >
                              Etica e conformità
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Supporto dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMenuEnter('supporto')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`text-lg font-medium transition-colors hover:text-blue-600 flex items-center ${
                  (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                Supporto
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeMenu === 'supporto' && (
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-md overflow-hidden mt-2 w-[450px]">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2 border-b">Parla con noi</h3>
                        <ul>
                          <li className="mb-2">
                            <Link
                              to="/support"
                              className="hover:text-blue-600 transition-colors duration-200"
                            >
                              Contattaci
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 border-b">Skills and Certifications</h3>
                        {/* Add links or content for Skills and Certifications */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className='pr-4'>
                <Button
                  variant="ghost"
                  size="icon"
                  className={(isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? 'text-white' : 'text-gray-700'}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`text-lg font-medium text-gray-700 hover:text-blue-600 ${isActiveLink(link.to) ? 'text-blue-600 font-medium' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/azienda"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Azienda
                  </Link>
                  <Link
                    to="/supporto"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Supporto
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header