import React, { useContext } from 'react';
import './nattusakkarai.css';
import { ShopContext } from '../../Context/ShopContext';
import { products } from '../../data/productdata'; // Correct import

function Banner() {
  const { addToCart } = useContext(ShopContext); // Access the addToCart function from the context
  const productId = "11"; // ID for Nattu Sakkarai (from products)

  // Handle Add to Cart without alert
  const handleAddToCart = () => {
    addToCart(productId); // Add the product to the cart
  };

  const product = products[productId]; // Get the product details using product ID

  return (
    <div className="container-fluid banner my-5" id="nattu-sakkarai">
      <div className="row g-4 align-items-center">
        {/* Text and Product Info */}
        <div className="col-lg-6">
          <div className="py-4 banner-text">
            <h1 className="display-3">{product.title}</h1>
            <p className="fw-normal display-3 mb-4">in Our Store</p>
            <p className="mb-4">{product.description}</p>
            <p className="mb-4">
              <span>Price: ₹{product.price} {product.priceSize}</span>
            </p>
            <button className="banner-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="col-lg-6">
          <div className="position-relative banner-img">
            <img
              src={product.image}
              className="img-fluid product-img"
              alt={product.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
