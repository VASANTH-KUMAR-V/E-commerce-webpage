import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { jsPDF } from "jspdf";
import logo from "../Assets/img/ollir-organics-background.png";

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
    const sequencePart = String(
      Math.floor(Math.random() * 999999) + 1
    ).padStart(6, "0"); // 6-digit sequence
    return `${sequencePart}-${datePart}`;
  };

  const handleProceedToCheckout = () => {
    // Check if cart is empty
    if (
      Object.keys(cartItems).filter((itemId) => cartItems[itemId] > 0)
        .length === 0
    ) {
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
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow only alphabetic characters and spaces
    if (/^[A-Za-z\s]*$/.test(value)) {
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        name: value,
      }));
    }
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    // Allow only numbers (0-9)
    if (/^\d*$/.test(value)) {
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        contact: value,
      }));
    }
  };

  const validateFields = () => {
    const { name, contact, address } = personalDetails;
    let errorMessage = "";

    if (!name.trim()) {
      errorMessage += "Name is required.\n";
    }
    if (!contact.trim()) {
      errorMessage += "10 Digit mobile number.\n";
    } else if (!/^[6-9]\d{9}$/.test(contact)) {
      // Indian 10-digit phone number validation
      errorMessage += "Not a valid phone number.\n";
    }
    if (!address.trim()) {
      errorMessage += "Address is required.\n";
    }

    if (errorMessage) {
      setError(errorMessage);
      return false;
    }
    setError(""); // Clear error if fields are valid
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
    const phoneNumber = "+919363620057";
    const { name, contact, address } = personalDetails;
    const message = `Order ID: ${orderId}\n\nOrder Summary:\n${cartSummary}\n\nPersonal Details:\nName: ${name}\nContact: ${contact}\nAddress: ${address}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
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
    const total = parseFloat(subtotal) || 0;

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
    doc.setFont("Helvetica"); // Use Helvetica for modern text rendering

    let currentY = 20;

    // Add Logo (Make sure the image path is correct)
    doc.addImage(logo, "PNG", 150, 10, 50, 30); // Adjust position and size

    // Header Section: "Bill of Supply"
    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    doc.text("Request Quote", 14, currentY);
    currentY += 10; // Increase spacing after the header

    // Order ID and Date
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(`Order ID: ${orderId}`, 14, currentY);
    currentY += 5;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, currentY);
    currentY += 5;

    // Add a horizontal line to separate sections
    doc.setLineWidth(0.5);
    doc.line(14, currentY, 200, currentY); // Draw horizontal line
    currentY += 10;

    // "Sold by" and "Billing Details" on the same line
    const address = [
      "Ollir Organics",
      "C.K Colony, New Sidhapudur, Coimbatore,",
      "Pincode:641044",
      "Tamil Nadu.",
    ];

    const { name, contact, address: userAddress } = personalDetails;

    // "Sold by" (Right-aligned)
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text("Sold by:", 120, currentY);
    doc.setFont("Helvetica", "normal");
    address.forEach((line) => {
      currentY += 5;
      doc.text(line, 120, currentY);
    });

    // "Billing Details" (Left-aligned)
    currentY = 50; // Reset the Y to avoid overlap with Sold by
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text("Billing Details:", 14, currentY);
    currentY += 5;

    // Billing Details Information (name, contact, and address)
    doc.setFont("Helvetica", "normal");
    doc.text(`${name}`, 14, currentY);
    currentY += 5;
    doc.text(`${contact}`, 14, currentY);
    // Handle multi-line address input
    const userAddressLines = userAddress.split(","); // Assuming the address is comma-separated
    userAddressLines.forEach((line) => {
      currentY += 5;
      doc.text(line.trim(), 14, currentY);
    });

    // Add space before Order Summary
    currentY += 20;
    doc.setFontSize(14);
    doc.setFont("Helvetica", "bold");
    doc.text("Order Summary:", 14, currentY);
    currentY += 10;

    // Table Headers
    const headers = [
      "S.No",
      "Product",
      "Quantity",
      "Unit Price",
      "Total Price",
    ];
    const columnWidths = [20, 70, 30, 30, 40];
    doc.setFontSize(10);
    doc.setFont("Helvetica", "bold");

    let xPosition = 14;
    headers.forEach((header, index) => {
      const textWidth = doc.getTextWidth(header); // Get text width
      const centerX = xPosition + (columnWidths[index] - textWidth) / 2; // Center alignment
      doc.text(header, centerX, currentY);
      xPosition += columnWidths[index];
    });

    currentY += 10;

    // Table Content
    doc.setFont("Helvetica", "normal");
    let totalAmount = 0;
    let serialNo = 1;

    Object.keys(cartItems).forEach((itemId) => {
      const quantity = cartItems[itemId];
      const product = products[itemId];

      if (quantity > 0) {
        const unitPrice = parseFloat(product.price).toFixed(2);
        const totalPrice = (quantity * parseFloat(product.price)).toFixed(2);

        xPosition = 14;

        // Add row values
        // S.No - Center aligned
        let textWidth = doc.getTextWidth(serialNo.toString());
        doc.text(
          serialNo.toString(),
          xPosition + (columnWidths[0] - textWidth) / 2,
          currentY
        );
        xPosition += columnWidths[0];

        // Product - Left aligned
        doc.text(product.title, xPosition, currentY);
        xPosition += columnWidths[1];

        // Quantity - Center aligned
        textWidth = doc.getTextWidth(quantity.toString());
        doc.text(
          quantity.toString(),
          xPosition + (columnWidths[2] - textWidth) / 2,
          currentY
        );
        xPosition += columnWidths[2];

        // Unit Price - Center aligned
        textWidth = doc.getTextWidth(unitPrice);
        doc.text(
          `${unitPrice}`,
          xPosition + (columnWidths[3] - textWidth) / 2,
          currentY
        );
        xPosition += columnWidths[3];

        // Total Price - Center aligned
        textWidth = doc.getTextWidth(totalPrice);
        doc.text(
          `${totalPrice}`,
          xPosition + (columnWidths[4] - textWidth) / 2,
          currentY
        );
        currentY += 10;

        totalAmount += parseFloat(totalPrice);
        serialNo += 1;
      }
    });

    // Add a horizontal line before the total amount
    doc.setLineWidth(0.5);
    doc.line(14, currentY, 200, currentY);
    currentY += 10;

    // Display the total amount
    doc.setFont("Helvetica");
    doc.text("Total Amount:", 150, currentY);
    const totalAmountX = 175; // Adjust X value for right alignment
    doc.text(`Rs ${totalAmount.toFixed(2)}`, totalAmountX, currentY);
    currentY += 20;

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16); // Set the font size to 16 (adjust as needed)
    doc.text(
      `Grand Total: Rs. ${totalAmount.toFixed(2)} + Shipping Fee`,
      14,
      currentY
    );
    currentY += 20; // Adjust the vertical spacing as needed

    currentY += 20;

    // Footer Section
    const thankYouText = "Thank you for shopping with us!";
    const textWidth = doc.getTextWidth(thankYouText);
    const x = (doc.internal.pageSize.width - textWidth) / 2; // Center the "thank you" message
    doc.setFont("Helvetica", "italic");
    doc.setFontSize(16);
    doc.text(thankYouText, x, currentY);

    // Save the PDF
    doc.save(`${orderId}_invoice.pdf`);
  };

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top after component renders
  }, []); // Runs only once when the component mounts

  return (
    <div className="cartitems">
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
              <p>₹{formatAmount(getTotalCartAmount())} + Shipping Fee</p>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            className="handle-btn"
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
            {/* <pre>{generateCartSummary()}</pre> Display cart summary as text */}
            <div className="input-container">
              <label className={personalDetails.name ? "input-filled" : ""}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={personalDetails.name}
                onChange={(e) => handleNameChange(e)}
                required
              />
            </div>
            <div className="input-container">
              <label className={personalDetails.contact ? "input-filled" : ""}>
                Contact Number
              </label>
              <input
                type="text" // Changed to text to allow input validation
                name="contact"
                value={personalDetails.contact}
                onChange={(e) => handleContactChange(e)}
                required
              />
            </div>
            <div className="input-container">
              <label className={personalDetails.address ? "input-filled" : ""}>
                Shipping Address
              </label>
              <textarea
                name="address"
                value={personalDetails.address}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <p style={{ textAlign: "center" }}>Confirm Order</p>
            <button
              onClick={() => handleAlertResponse("yes")}
              className="sucess-button"
            >
              Yes
            </button>
            <button
              onClick={() => handleAlertResponse("no")}
              className="danger-button"
            >
              No
            </button>{" "}
            {/* Added class for styling */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
