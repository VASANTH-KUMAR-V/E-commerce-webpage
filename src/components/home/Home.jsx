import React from 'react';
import './home.css'; // For styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Ollir Organics</h1>
        <p>Explore our wide range of natural and organic products</p>
      </header>
      
      <section className="product-categories">
        <h2>Product Categories</h2>
        <div className="categories">
          <div className="category">
            <h3>Creams</h3>
            <p>Explore our range of organic creams</p>
          </div>
          <div className="category">
            <h3>Oils</h3>
            <p>Pure and natural oils for all your needs</p>
          </div>
          <div className="category">
            <h3>Soaks</h3>
            <p>Relax and rejuvenate with our natural soaks</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;