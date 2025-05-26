import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GlassConfigurator from '../components/GlassConfigurator';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-8 px-4 md:px-10">
        <Hero />
        <GlassConfigurator />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;