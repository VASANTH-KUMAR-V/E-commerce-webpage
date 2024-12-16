import React, { useContext } from 'react';
import './nattusakkarai.css';
import { ShopContext } from '../../Context/ShopContext';
import { products } from '../../data/productdata'; // Correct import

function Banner() {
  const { addToCart } = useContext(ShopContext); // Access the addToCart function from the context
  const productId = "11"; // ID for Nattu Sakkarai (from products)

  const handleAddToCart = () => {
    addToCart(productId); // Add the product to the cart
    alert(`${products[productId].title} has been added to the cart!`); // Display alert with product name
  };

  const product = products[productId]; // Get the product details using product ID

  return (
    <div className="container-fluid banner my-5" id="nattu-sakkarai">
      <div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3">{product.title}</h1>
              <p className="fw-normal display-3 text-white mb-4">in Our Store</p>
              <p className="mb-4">
                {product.description}
              </p>
              <p className="mb-4">Price: ₹{product.price} {product.priceSize}</p>
              <button className="banner-btn" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={product.image}
                className="img-fluid"
                alt={product.title}
                style={{ width: 322 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
