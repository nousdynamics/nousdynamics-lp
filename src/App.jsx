import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import WhoIsItFor from './components/WhoIsItFor';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen selection:bg-premium-gold/30 selection:text-premium-gold font-sans overflow-x-hidden w-full">
      <Background />
      <Navbar />

      <main className="overflow-x-hidden w-full">
        <Hero />
        <Method />
        <WhoIsItFor />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
