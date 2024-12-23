import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart-Items.css";

const CartItems = () => {
  const { getTotalCartAmount, products, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);

  const [showDialog, setShowDialog] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  // Generate Order ID in format 000001-YYYYMMDD
  const generateOrderId = () => {
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
    const sequencePart = String(Math.floor(Math.random() * 999999) + 1).padStart(6, "0"); // 6-digit sequence
    return `${sequencePart}-${datePart}`;
  };

  const handleProceedToCheckout = () => {
    // Check if cart is empty
    if (Object.keys(cartItems).filter(itemId => cartItems[itemId] > 0).length === 0) {
      setError("Your cart is empty. Please add products to proceed.");
      return;
    }

    // Check if subtotal is ₹0.00
    if (getTotalCartAmount() === 0) {
      setError("Subtotal is ₹0.00. Please add products to your cart.");
      return;
    }

    // Reset error and proceed to checkout
    setError("");
    setOrderId(generateOrderId());
    setShowDialog(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const validateFields = () => {
    const { name, contact, address } = personalDetails;
    if (!name.trim() || !contact.trim() || !address.trim()) {
      setError("All fields are required.");
      return false;
    }
    return true;
  };

  const handleAlertResponse = (response) => {
    if (response === "yes") {
      if (validateFields()) {
        shareOnWhatsApp();
      }
    } else {
      setShowDialog(false);
    }
  };

  const shareOnWhatsApp = () => {
    const cartSummary = generateCartSummary();
    const phoneNumber = "+918072964926";
    const { name, contact, address } = personalDetails;
    const message = `Order ID: ${orderId}\n\nOrder Summary:\n${cartSummary}\n\nPersonal Details:\nName: ${name}\nContact: ${contact}\nAddress: ${address}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setShowDialog(false);
  };

  const generateCartSummary = () => {
    const cartSummary = Object.keys(cartItems)
      .map((itemId) => {
        const quantity = cartItems[itemId];
        const product = products[itemId];
        if (quantity > 0) {
          return `${product.title} (x${quantity}) - ₹${(
            quantity * parseFloat(product.price)
          ).toFixed(2)}`;
        }
        return null;
      })
      .filter((item) => item !== null)
      .join("\n");

    const subtotal = getTotalCartAmount();
    const total = (parseFloat(subtotal) || 0);

    return `${cartSummary}\n\nSubtotal: ₹${(parseFloat(subtotal) || 0).toFixed(
      2
    )}\nTotal: ₹${total.toFixed(2)} + Shipping fee`;
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
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
                  src={product.image}
                  alt={product.title}
                  className="carticon-product-icon"
                />
                <p>{product.title}</p>
                <p>₹{product.price}</p>
                <div className="cartitems-quantity">
                  {quantity === 1 ? (
                    <>
                      <DeleteIcon
                        onClick={() => removeFromCart(itemId)}
                        style={{ cursor: "pointer", marginRight: "10px" }}
                      />
                      <span>{quantity}</span>
                      <AddIcon
                        onClick={() => addToCart(itemId)}
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                      />
                    </>
                  ) : (
                    <>
                      <RemoveIcon
                        onClick={() => removeFromCart(itemId)}
                        style={{ cursor: "pointer", marginRight: "10px" }}
                      />
                      <span>{quantity}</span>
                      <AddIcon
                        onClick={() => addToCart(itemId)}
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                      />
                    </>
                  )}
                </div>
                <p className="hide">₹{formatAmount(quantity * parseFloat(product.price))}</p>
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
              <p>Total</p>
              <p>₹{formatAmount(getTotalCartAmount())}</p>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            onClick={handleProceedToCheckout}
            disabled={
              Object.keys(cartItems).filter((itemId) => cartItems[itemId] > 0)
                .length === 0 || getTotalCartAmount() === 0
            }
          >
            Proceed to checkout
          </button>
        </div>
      </div>

      {/* Dialog Box for Personal Details */}
      {showDialog && (
        <div className="checkout-dialog">
          <div className="checkout-dialog-box">
            <h2>Billing Details</h2>
            <p>Order ID: {orderId}</p>
            <textarea
              readOnly
              value={generateCartSummary()}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={personalDetails.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={personalDetails.contact}
              onChange={handleInputChange}
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={personalDetails.address}
              onChange={handleInputChange}
            />
            {error && <p className="error-message">{error}</p>}
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
