import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productcard.css';
import Handmade from '../handmade/Handmade';
import Testimonial from '../testimonial/Testimonial';
import Nattusakkarai from '../nattusakkarai/Nattusakkarai';
import Features from '../features/Feature';

// Import images
import HairOilImage from '../assets/img/Hair-oil-2.jpg';
import BodyLotionImage from '../assets/img/body-lotion.jpg';
import FootSoakImage from '../assets/img/Foot-soak.jpg';
import BathPowderImage from '../assets/img/Bath-powder.jpg';
import BodyButterImage from '../assets/img/Body-butter.jpg';
import LipButterImage from '../assets/img/lip-butter.jpg';
import FaceCreamImage from '../assets/img/Face-cream.jpg';
import FootButterImage from '../assets/img/Foot-cream.jpg';
import KajalImage from '../assets/img/Kajal.jpg';
import LipBalmImage from '../assets/img/lip-balm.jpg';

const products = [
    { 
      id: 1, 
      name: 'Herbal Hair Oil', 
      cost: '<span style="color: black;">₹ 260</span> <span style="font-size: 0.8em;">(230 ml)</span>', 
      image: HairOilImage, 
      type: 'haircare', 
      define: 'Hair oil made with 100% fresh herbs. It controls dandruff and hair fall... <span class="read-more">Read more</span>' 
    },
    { 
      id: 2, 
      name: 'Body Lotion', 
      cost: '<span style="color: black;">₹ 325</span> <span style="font-size: 0.8em;">(100 ml)</span>', 
      image: BodyLotionImage, 
      type: 'skincare', 
      define: 'Hydrates skin. For best results use regularly For all skin types... <span class="read-more">Read more</span>' 
    },
    { 
      id: 3, 
      name: 'Foot Soak', 
      cost: '<span style="color: black;">₹ 150</span> <span style="font-size: 0.8em;">(150 g)</span>', 
      image: FootSoakImage, 
      type: 'skincare', 
      define: 'Soothes and relaxes the muscles. Cleans feet. Prevents bacterial growth. Reduces pain and swelling of foot... <span class="read-more">Read more</span>' 
    },
    { 
      id: 4, 
      name: 'Herbal Bath Powder', 
      cost: '<span style="color: black;">₹ 300</span> <span style="font-size: 0.8em;">(200 g)</span>', 
      image: BathPowderImage, 
      type: 'skincare', 
      define: 'Made with all herbal ingredients. Makes your skin feel petal soft and keeps you fresh all day. <span class="read-more">Read more</span>' 
    },
    { 
      id: 5, 
      name: 'Body Butter Cream', 
      cost: '<span style="color: black;">₹ 350</span> <span style="font-size: 0.8em;">(100 g)</span>', 
      image: BodyButterImage, 
      type: 'skincare', 
      define: 'Blend of shea butter and almond oil deeply moisturizes the skin. For best results use regularly. For dry skin... <span class="read-more">Read more</span>' 
    },
    { 
      id: 6, 
      name: 'Lip Butter Cream', 
      cost: '<span style="color: black;">₹ 110</span>', 
      image: LipButterImage, 
      type: 'skincare', 
      define: 'Provides intense moisturisation to lips. For dry and extreme dry and chapped lips... <span class="read-more">Read more</span>' 
    },
    { 
      id: 7, 
      name: 'Face Cream', 
      cost: '<span style="color: black;">₹ 325</span> <span style="font-size: 0.8em;">(50 g)</span>', 
      image: FaceCreamImage, 
      type: 'skincare', 
      define: 'Nourishes skin, Reduces inflammation. Makes skin supple and glowing. Regular use will reduce skin aging... <span class="read-more">Read more</span>' 
    },
    { 
      id: 8, 
      name: 'Foot Butter Cream', 
      cost: '<span style="color: black;">₹ 200</span> <span style="font-size: 0.8em;">(50 g)</span>', 
      image: FootButterImage, 
      type: 'skincare', 
      define: 'Hydrates the skin, Remove roughness. Heals cracks. Can be used for all skin types... <span class="read-more">Read more</span>' 
    },
    { 
      id: 9, 
      name: 'Kajal', 
      cost: '<span style="color: black;">₹ 200</span>', 
      image: KajalImage, 
      type: 'eyecare', 
      define: 'Made from 100% natural ingredients. Smudge proof. Do not irritate eyes... <span class="read-more">Read more</span>' 
    },
    { 
      id: 10, 
      name: 'Lip Balm', 
      cost: '<span style="color: black;">₹ 99</span> <span style="font-size: 0.8em;">(5 g)</span>', 
      image: LipBalmImage, 
      type: 'skincare', 
      define: 'Provides intense moisturisation to lips. For dry and extreme dry and chapped lips... <span class="read-more">Read more</span>' 
    },
];

const ProductCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.type === selectedCategory);

  return (
    <div className="product-container" id='Productcard'>
      <Handmade />
      <h2 className='h2'>Our Products</h2>
      <div className="product-filters" id="product-filters">
        <button className="filter-btn all-products" onClick={() => filterProducts('all')}>All Products</button>
        <button className="filter-btn skincare" onClick={() => filterProducts('skincare')}>Skin Care</button>
        <button className="filter-btn haircare" onClick={() => filterProducts('haircare')}>Hair Care</button>
        <button className="filter-btn eyecare" onClick={() => filterProducts('eyecare')}>Eye Care</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.id)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-cost" dangerouslySetInnerHTML={{ __html: product.cost }}></p>
            <p className="product-detail" dangerouslySetInnerHTML={{ __html: product.define }}></p>
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
