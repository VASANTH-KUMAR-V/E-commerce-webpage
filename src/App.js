import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import CartItems from "./components/cart/cart.jsx";
import Header from "./components/Navbar/Navbar";
import ShopContextProvider from "./Context/ShopContext";  // Ensure ShopContextProvider is imported
import Productcard from "./components/productdetails/Productcard.jsx";
import Productpage from "./components/productdetails/Productpage.jsx";
import Footer from "./components/footer/Footer.jsx"

const App = () => {
  return (
    <ShopContextProvider> {/* Wrap your components with ShopContextProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartItems />} /> {/* No need to wrap with ShopContextProvider again */}
          <Route path="/" element={<Productcard />} />
          <Route path="/product/:productId" element={<Productpage />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
};

export default App;
