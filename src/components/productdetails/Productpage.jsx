import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { products } from '../../data/productdata';
import './productpage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top after component renders
  }, []); // Runs only once when the component mounts

  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }



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
            ₹{price} <span className="product-price-size">{priceSize}</span>
          </p>
          <button className="btn-add-to-cart" onClick={() => addToCart(productId)}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
          <p className="product-description" dangerouslySetInnerHTML={{ __html: description1 }}></p>
          <p className="product-description" dangerouslySetInnerHTML={{ __html: description2 }}></p>
          <p className="product-description" dangerouslySetInnerHTML={{ __html: longDescription }}></p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
