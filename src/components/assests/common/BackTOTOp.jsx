import React, { useState, useEffect } from "react";
import { Backtotop } from "./icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page and play the GIF
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-5 z-[100] right-4 md:right-5">
          <button
            onClick={scrollToTop}
            className="bg-purple-900 hover:bg-rose-800 w-12 h-12 rounded-full hover:scale-110 transition-all duration-700 flex items-center justify-center border-2 border-transparent hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 animate-bounce-up-and-down"
            aria-label="Scroll to top"
            style={{ aspectRatio: 1 }}
          >
            <Backtotop />
          </button>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
