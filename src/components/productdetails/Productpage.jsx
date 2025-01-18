import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { products } from '../../data/productdata';
import './productpage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext);
  const [cartVisible, setCartVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top after component renders
  }, []);

  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    price,
    priceSize,
    image,
    title,
    category,
    rating,
    description1,
    description2,
    longDescription,
  } = product;

  const handleAddToCart = () => {
    addToCart(productId);
    alert("Your items are added to the cart."); // Display alert message
    setCartVisible(true);
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to cart page
  };

  return (
    <div className="container-fluid">
      <div className="product-layout">
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{title}</h1>
          <p className="product-category">{category}</p>
          <p className="product-price">
            ₹{price} <span className="product-price-size">{priceSize}</span>
          </p>
          <div className="product-buttons">
            <button
              className="btn-add-to-cart"
              onClick={handleAddToCart}
            >
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            {cartVisible && (
              <button
                className="btn-go-to-cart"
                onClick={handleGoToCart}
              >
                <i className="fas fa-shopping-bag"></i> Go to Cart
              </button>
            )}
          </div>
          <p
            className="product-description"
            dangerouslySetInnerHTML={{ __html: description1 }}
          ></p>
          <p
            className="product-description"
            dangerouslySetInnerHTML={{ __html: description2 }}
          ></p>
          <p
            className="product-description"
            dangerouslySetInnerHTML={{ __html: longDescription }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
