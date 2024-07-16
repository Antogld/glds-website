import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import logoTransparent from "../assets/logo-transparent.png"
import logo from "../assets/logo.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    if (isHomepage) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      setIsScrolled(true)
    }
  }, [isHomepage])

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/restruct", label: "Restruct" },
    { to: "/support", label: "Supporto" },
  ]

  const logoSrc = isHomepage && !isScrolled ? logoTransparent : logo

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomepage
        ? isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isHomepage && !isScrolled ? 'text-white' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button className={`${
              isHomepage && !isScrolled
                ? 'bg-white text-primary hover:bg-gray-100'
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}>
              Get started
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isHomepage && !isScrolled ? 'text-white' : 'text-gray-700'}
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
                      className="text-lg font-medium text-gray-700 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full">
                    Get started
                  </Button>
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