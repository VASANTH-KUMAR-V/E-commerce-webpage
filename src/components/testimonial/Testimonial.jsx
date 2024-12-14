import React, { useState } from 'react';
import './testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      name: 'Brindha',
      review: 'Thanks for the products🥳 i love all of ur products specially moisturizer makes my skin really soft happy while using it and while getting a trusted home made product🩷🩷',
      stars: 4,
    },
    {
      name: 'Bhuvana',
      review: 'The refreshing fragrance blends with the skin..it took multiple roles as cleanser... scrubber... freshner..a great feast for the skin especially on this summer...my showers are extra cool with the powder...a must have product in every ones toiletry list.. thank you Ollir Organics for sending this topnotch bathpowder...',
      stars: 5,
    },
    {
      name: 'Divya',
      review: 'I used the ollir Kajal which is in nice texture and black colour and is perfect choice for anyone looking for a reliable, high quality natural Kajal that delivers excellent results every time',
      stars: 4,
    },
    {
      name: 'Dharani',
      review: 'Kajal is awesome mam. Usually any kajal I use it makes itching in eyes and reddish too. But only Ollir kajal makes my eye comfort look.. I\'m 💯 💯 💯  satisfied with the product. Going to continue too mam. Thank u for the worthy product mam',
      stars: 5,
    },
    {
      name: 'Seetha',
      review: 'Hai ur bath powder is awesome my skin is very sensitive it suits for me very much.Especially no sweating smell no need to use perfume everyone must try ollir bath powder',
      stars: 5,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="testimonial-carousel ">
      <div className="testimonial-header text-center ">
        <h1 className="text2">What Customers Say About Us</h1>
      </div>
      <div className="testimonial-item active ">
        <p className="mb-0">{reviews[currentIndex].review}</p>
        <hr />
        <h4 className="text-dark">{reviews[currentIndex].name}</h4>
        <div className="d-flex align-items-center">
          {[...Array(reviews[currentIndex].stars)].map((_, i) => (
            <i key={i} className="fas fa-star" />
          ))}
           <button className="btn btn-prev" onClick={handlePrev}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className="btn btn-next" onClick={handleNext}>
        <i className="fas fa-chevron-right" />
      </button>
        </div>
      </div>
     
    </div>
  );
};

export default Testimonial;
