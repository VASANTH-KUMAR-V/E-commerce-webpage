import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartItems from "./components/cart/cart.jsx";
import Header from "./components/Navbar/Navbar";
import ShopContextProvider from "./Context/ShopContext"; // Ensure ShopContextProvider is imported
import ProductCard from "./components/productdetails/Productcard.jsx";
import ProductPage from "./components/productdetails/Productpage.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollToHash from "./components/scrooltohash/ScrollToHash.jsx"; // Import ScrollToHash component

const App = () => {
  return (
    <ShopContextProvider> {/* Wrap your components with ShopContextProvider */}
      <Router>
        <ScrollToHash /> {/* Handles scrolling to top or hash */}
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/cart" element={<CartItems />} />
            <Route path="/" element={<ProductCard />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
};

export default App;
