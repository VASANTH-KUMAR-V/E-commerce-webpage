import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './scroll.css'; // Import the CSS file

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <a
            href="https://api.whatsapp.com/send?phone=919363620057&text=For%20Orders" /* Replace with your WhatsApp number */
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="whatsapp-text">WhatsApp</span>
          </a>
          <div
            onClick={scrollToTop}
            className="scroll-button"
          >
            <i className="fas fa-arrow-up"></i>
          </div>
        </>
      )}
    </>
  );
};

export default ScrollToTop;
