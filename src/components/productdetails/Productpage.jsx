import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'; // Import your context
import { products } from '../../data/productdata';
import './productpage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext); // Get addToCart from context
  
  // Directly accessing the product by its ID
  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating 
        ? <i key={i} className="fas fa-star" style={{ color: '#ffc107' }}></i> 
        : <i key={i} className="far fa-star" style={{ color: '#ffc107' }}></i>);
    }
    return stars;
  };

  const { price, priceSize, image, title, category, rating, description1, description2, longDescription } = product;

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
            ₹{price} 
            <span className="product-price-size">
              {priceSize}
            </span>
          </p>
          
          <div className="product-rating">
            {renderStars(rating)}
          </div>
          <p className="product-description" dangerouslySetInnerHTML={{ __html: description1 }}></p>
          <p className="product-description" dangerouslySetInnerHTML={{ __html: description2 }}></p>
          <p className="product-description" dangerouslySetInnerHTML={{ __html: longDescription }}></p>
          
          <button
            className="btn-add-to-cart"
            onClick={() => addToCart(productId)} // Add product to cart
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
