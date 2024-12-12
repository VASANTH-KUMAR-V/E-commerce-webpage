import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Hero from './components/hero/Hero.jsx';
import Footer from './components/footer/Footer.jsx'

const App = () => {
  const [cart, setCart] = useState([]); 
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;