import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext"; // Import ShopContext
import DeleteIcon from '@mui/icons-material/Delete'; // Import Material UI Delete Icon
import AddIcon from '@mui/icons-material/Add'; // Material UI Add Icon
import RemoveIcon from '@mui/icons-material/Remove'; // Material UI Remove Icon
import "./Cart-Items.css";

const CartItems = () => {
  const { getTotalCartAmount, products, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);

  const [showAlert, setShowAlert] = useState(false);

  const shippingFee = 49; // Shipping charge is fixed at ₹49 (you can modify this value)

  const handleProceedToCheckout = () => {
    setShowAlert(true);
  };

  const handleAlertResponse = (response) => {
    if (response === "yes") {
      // Proceed to WhatsApp share (Step 4)
      shareOnWhatsApp();
    } else {
      // Close the alert and stay on the cart
      setShowAlert(false);
    }
  };

  const shareOnWhatsApp = () => {
    const cartSummary = generateCartSummary();
    const phoneNumber = "+918072964926";
    const message = `Order Summary: \n${cartSummary}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const generateCartSummary = () => {
    const cartSummary = Object.keys(cartItems).map((itemId) => {
      const quantity = cartItems[itemId];
      const product = products[itemId];
      if (quantity > 0) {
        return `${product.title} (x${quantity}) - ₹${(quantity * parseFloat(product.price)).toFixed(2)}`;
      }
      return null;
    }).filter(item => item !== null).join("\n");

    const subtotal = getTotalCartAmount();
    // Calculate total by adding shipping fee
    const total = (parseFloat(subtotal) || 0) + shippingFee;

    return `${cartSummary}\n\nSubtotal: ₹${(parseFloat(subtotal) || 0).toFixed(2)}\nShipping Fee: ₹${shippingFee}\nTotal: ₹${total.toFixed(2)}`;
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.keys(cartItems).map((itemId) => {
        const quantity = cartItems[itemId];
        const product = products[itemId];

        if (quantity > 0) {
          return (
            <div key={itemId}>
              <div className="cartitems-format">
                <img
                  src={product.image} // Ensure the correct image path is used
                  alt={product.title}
                  className="carticon-product-icon"
                />
                <p>{product.title}</p>
                <p>₹{product.price}</p>
                {/* Quantity buttons with Add and Remove icons */}
                <div className="cartitems-quantity">
                  <RemoveIcon
                    onClick={() => removeFromCart(itemId)}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  />
                  <span>{quantity}</span>
                  <AddIcon
                    onClick={() => addToCart(itemId)}
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  />
                </div>
                <p>₹{formatAmount(quantity * parseFloat(product.price))}</p>
                {/* Delete button for removing the product */}
                <DeleteIcon
                  className="cartitems-remove-icon"
                  onClick={() => removeFromCart(itemId)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{formatAmount(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              {/* Dynamically display shipping fee */}
              <p>₹{shippingFee}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>₹{formatAmount(getTotalCartAmount() + shippingFee)}</p>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>Proceed to checkout</button>
        </div>
      </div>

      {/* Alert Modal for Checkout Confirmation */}
      {showAlert && (
        <div className="checkout-alert">
          <div className="checkout-alert-box">
            <p>Move to Whatsapp for Payment details?</p>
            <button onClick={() => handleAlertResponse("yes")}>Yes</button>
            <button onClick={() => handleAlertResponse("no")}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
