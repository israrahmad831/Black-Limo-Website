import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = ({ targetId }) => {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === `#${targetId}`) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, targetId]);

  return null;
};

export default ScrollToSection;
