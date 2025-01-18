import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash); // Find the element matching the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to the top if no hash
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
