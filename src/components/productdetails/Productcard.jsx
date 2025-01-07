import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext.js'; // Import context
import "./productcard.css";
import Hero from "../hero/Hero.jsx";
import Features from "../features/Feature.jsx";
import Nattusakkarai from "../nattusakkarai/Nattusakkarai.jsx";
import Testimonial from "../testimonial/Testimonial.jsx";

const ProductCard = () => {
  const navigate = useNavigate();
  const { addToCart, products } = useContext(ShopContext); // Use context to get products and addToCart function
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on selected category
  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  // Convert products object to an array for easier handling
  const productArray = Object.keys(products).map(key => ({
    ...products[key],
    id: key
  }));

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? productArray.filter((product) => product.category !== 'Food')  // Exclude Food category (Nattusakkarai)
      : productArray.filter(
          (product) => product.category.toLowerCase() === selectedCategory && product.category !== 'Food'
        );

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-container" id="Product-card">
      <Hero />
      <h2 className="heading" id="products-heading">Our Products</h2>
      <div className="product-filters" id="product-filters">
        <button
          className="filter-btn all-products"
          onClick={() => filterProducts("all")}
        >
          All Products
        </button>
        <button
          className="filter-btn skincare"
          onClick={() => filterProducts("skincare")}
        >
          Skin Care
        </button>
        <button
          className="filter-btn haircare"
          onClick={() => filterProducts("haircare")}
        >
          Hair Care
        </button>
        <button
          className="filter-btn eyecare"
          onClick={() => filterProducts("eyecare")}
        >
          Eye Care
        </button>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-cost">{product.price} {product.priceSize}</p>
            <p
              className="product-description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
            <button
              className="btn-buy-now"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click from firing
                addToCart(product.id); // Add product to cart using context
                console.log(`${product.title} added to cart!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Nattusakkarai />
      <Features />
      <Testimonial />
    </div>
  );
};

export default ProductCard;
