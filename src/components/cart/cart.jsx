import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { jsPDF } from "jspdf";
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
      alert("Your cart is empty. Please add products to proceed.");
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
    let errorMessage = "";

    if (!name.trim()) {
      errorMessage += "Name is required.\n";
    }
    if (!contact.trim()) {
      errorMessage += "Contact number is required.\n";
    } else if (!/^[6-9]\d{9}$/.test(contact)) { // Indian 10-digit phone number validation
      errorMessage += "Invalid contact number. Please enter a 10-digit number.\n";
    }
    if (!address.trim()) {
      errorMessage += "Address is required.\n";
    }

    if (errorMessage) {
      setError(errorMessage);
      return false;
    }
    return true;
  };

  const handleAlertResponse = (response) => {
    if (response === "yes") {
      if (validateFields()) {
        shareOnWhatsApp();
        generatePDF();
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

    // Return without subtotal for the dialog box
    return `${cartSummary}\n\nTotal: ₹${total.toFixed(2)} + Shipping fee`;
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("times");

    let currentY = 20;
    doc.text("Order Invoice", 14, currentY);
    currentY += 10;
    doc.text(`Order ID: ${orderId}`, 14, currentY);

    const cartSummary = generateCartSummary().split("\n");
    currentY += 20;
    cartSummary.forEach((line, index) => {
      doc.text(line, 14, currentY + (index * 10));
    });

    // Add space before personal details
    currentY += cartSummary.length * 10 + 10;
    doc.text("Personal Details:", 14, currentY);
    currentY += 10; // Add space after "Personal Details"

    const { name, contact, address } = personalDetails;
    doc.text(`Name: ${name}`, 14, currentY);
    currentY += 10;
    doc.text(`Contact: ${contact}`, 14, currentY);
    currentY += 10;
    doc.text(`Address: ${address}`, 14, currentY);

    // Add space and Thank You note
    currentY += 20;
    doc.text("Thank you for shopping with us!", 14, currentY);

    // Save the PDF
    doc.save(`${orderId}.pdf`);
  };

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top after component renders
  }, []); // Runs only once when the component mounts

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
            disabled={Object.keys(cartItems).filter((itemId) => cartItems[itemId] > 0).length === 0 || getTotalCartAmount() === 0}
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
            <pre>{generateCartSummary()}</pre> {/* Display cart summary as text */}
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
            <button onClick={() => handleAlertResponse("yes")} className="suce-button">Yes</button>
            <button onClick={() => handleAlertResponse("no")} className="danger-button">No</button> {/* Added class for styling */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
