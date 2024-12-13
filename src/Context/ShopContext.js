import React, { createContext, useState } from "react";
import { products } from "../data/productdata"; // Import updated product data

// Create context
export const ShopContext = createContext(null);

// Function to initialize cart with default values (all items set to 0)
const getDefaultCart = () => {
  let cart = {};
  for (let id in products) {
    cart[id] = 0; // Initialize all products with quantity 0
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // Prevent negative quantities
    }));
  };

  // Function to calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products[itemId];
        totalAmount += parseFloat(product.price) * cartItems[itemId];
      }
    }
    return totalAmount.toFixed(2); // Return formatted total
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      totalItems += cartItems[itemId];
    }
    return totalItems;
  };

  // Check if a product is already in the cart
  const isInCart = (itemId) => cartItems[itemId] > 0;

  // Clear the cart
  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    getTotalCartItems,
    isInCart,
    clearCart,
    products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
