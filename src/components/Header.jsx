import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoTransparent from "../assets/logo-transparent.png"
import logo from "../assets/logo.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSupportoOpen, setIsSupportoOpen] = useState(false)
  const [isAziendaOpen, setIsAziendaOpen] = useState(false)
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
    { to: "/sostenibilita", label: "Sostenibilità" },
    { to: "/eticaeconformita", label: "Etica e conformità" },
    { to: "/blog", label: "Blog" },
  ]

  const logoSrc = (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? logoTransparent : logo

  const isActiveLink = (path) => location.pathname === path

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
          <nav className="hidden md:flex space-x-8">
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
            <div 
              className="relative"
              onMouseEnter={() => setIsAziendaOpen(true)}
              onMouseLeave={() => setIsAziendaOpen(false)}
            >
              <button 
                className={`text-lg font-medium transition-colors hover:text-blue-600 flex items-center ${
                  (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                Azienda
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAziendaOpen && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    <div>
                      <h3 className="font-bold mb-2">Chi Siamo</h3>
                      {/* Add links or content for Chi Siamo */}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Carriere</h3>
                      {/* Add links or content for Carriere */}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Contatti</h3>
                      {/* Add links or content for Contatti */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsSupportoOpen(true)}
              onMouseLeave={() => setIsSupportoOpen(false)}
            >
              <button 
                className={`text-lg font-medium transition-colors hover:text-blue-600 flex items-center ${
                  (isHomepage || isRestructPage || isSostenibilita || isEticaeconformita) && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                Supporto
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSupportoOpen && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    <div>
                      <h3 className="font-bold mb-2">Start Here</h3>
                      {/* Add links or content for Start Here */}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Skills and Certifications</h3>
                      {/* Add links or content for Skills and Certifications */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
          <div className=""></div>
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
                      className={`text-lg font-medium text-gray-700 hover:text-blue-600 ${
                        isActiveLink(link.to) ? 'text-blue-600 font-bold' : ''
                      }`}
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