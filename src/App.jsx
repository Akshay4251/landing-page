import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HeroSection } from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import ThemeToggle from './components/ThemeToggle';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Portfolio/>
    <About/>
    <WhyChooseUs/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
