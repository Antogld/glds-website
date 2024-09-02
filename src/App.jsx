import { Link } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { AspectRatio } from './components/ui/aspect-ratio'
import HeroSection from './components/hero'
import LogoSection from './components/logo-section'
import AboutPage from './components/about'
import CallAction from './components/call-action'
import FromItaly from './components/from-italy'
import HomePricing from './components/Home-pricing'
import Products from './components/Products'
import FAQs from './components/Faq'
import Testimonials from './components/Testimonials'
import NewsLetter from './components/NewsLetter'
import Services from './components/Services'
import Blog from './components/Blog'

function App() {
  return <>
    <HeroSection />
    <LogoSection />
    {/* <Services /> */}
    <AboutPage />
    <CallAction />
    {/* <Products /> */}
    <FromItaly />
    {/* <HomePricing /> */}
    <Testimonials />
    <FAQs />
    <NewsLetter />
    <Blog />
  </>
}

export default App