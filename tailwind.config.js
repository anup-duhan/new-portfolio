/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: "#051E55",
        bgwhite: "#FFFFFF",
        textmaincolor: "#0E3C8A",
        buttoncolor: "#2E7CDF",
      },
      fontSize: { 
        fourty: "40px", 
      },
      backgroundImage: { // Correct property for background images
        gradientBackground: "linear-gradient(143deg, rgba(237,235,233,1) 61%, rgba(46,124,223,1) 61%)",
      },
    },
  },
  plugins: [],
};
