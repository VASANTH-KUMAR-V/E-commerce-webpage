import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/appbar/Appbar.js';
import Footer from './components/footer/Footer.jsx';
import ScrollToTop from './components/scroll/Scroll.jsx';
import Productcard from './components/productdetails/Productcard.jsx'
import Productpage from './components/productdetails/Productpage.jsx'
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
        <Header />
        
        <Routes>
          <Route path="/" element={<Productcard />} />
          <Route path="/product/:productId" element={<Productpage />} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
