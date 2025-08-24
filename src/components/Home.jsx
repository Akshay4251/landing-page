
import HeroSection from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="portfolio"><Portfolio/></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="whychooseus"><WhyChooseUs /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
