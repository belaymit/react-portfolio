import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contacts/Contacts';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Experience from './sections/experience/Experience';

const App = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </BrowserRouter>
  </main>
);
export default App;
