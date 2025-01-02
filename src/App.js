import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartItems from "./components/cart/cart.jsx";
import Header from "./components/Navbar/Navbar";
import ShopContextProvider from "./Context/ShopContext";  // Ensure ShopContextProvider is imported
import Productcard from "./components/productdetails/Productcard.jsx";
import Productpage from "./components/productdetails/Productpage.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollToHash from "./components/scrooltohash/ScrollToHash.jsx";  // Import ScrollToHash component

const App = () => {
  return (
    <ShopContextProvider> {/* Wrap your components with ShopContextProvider */}
      <Router>
        <ScrollToHash /> {/* Add ScrollToHash here */}
        <Header />
        <Routes>
          <Route path="/cart" element={<CartItems />} /> 
          <Route path="/" element={<Productcard />} />
          <Route path="/product/:productId" element={<Productpage />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
};

export default App;
