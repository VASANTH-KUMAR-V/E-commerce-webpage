import React, { useState, useEffect } from "react";
import "./testimonial.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      name: "Brindha",
      review:
        "Thanks for the products🥳 i love all of ur products specially moisturizer makes my skin really soft happy while using it and while getting a trusted home made product🩷🩷",
    },
    {
      name: "Bhuvana",
      review:
        "The refreshing fragrance blends with the skin..it took multiple roles as cleanser... scrubber... freshner..a great feast for the skin especially on this summer...my showers are extra cool with the powder...a must have product in every ones toiletry list.. thank you Ollir Organics for sending this topnotch bathpowder...",
    },
    {
      name: "Divya",
      review:
        "I used the ollir Kajal which is in nice texture and black colour and is perfect choice for anyone looking for a reliable, high quality natural Kajal that delivers excellent results every time",
    },
    {
      name: "Dharani",
      review:
        "Kajal is awesome mam. Usually any kajal I use it makes itching in eyes and reddish too. But only Ollir kajal makes my eye comfort look.. I'm 💯 💯 💯  satisfied with the product. Going to continue too mam. Thank u for the worthy product mam",
    },
    {
      name: "Seetha",
      review:
        "Hai ur bath powder is awesome my skin is very sensitive it suits for me very much.Especially no sweating smell no need to use perfume everyone must try ollir bath powder",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [reviews.length]);



  return (
    <div className="testimonial-carousel">
      <div className="testimonial-header text-center">
        <h1 className="text2">What Customers Say About Us</h1>
      </div>
      <div className="testimonial-item active">
        <p className="mb-0">{reviews[currentIndex].review}</p>
        <hr />
        <h4 className="text-dark">{reviews[currentIndex].name}</h4>
      </div>
      
    </div>
  );
};

export default Testimonial;
