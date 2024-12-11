import React from 'react';
import './cart.css'; // Optional for styling

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <p>{item.title}</p>
              <p>₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
