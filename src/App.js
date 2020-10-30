import React, {Fragment} from 'react';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Facts from './Components/Facts';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment>
      <NavBar />
      <HeroSection />
      <div id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
