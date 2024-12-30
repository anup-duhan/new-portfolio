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
        lightblack: "#23201E",
        background : "#EDEBE9",
      },
      boxShadow: {
        'custom-red': '0px 4px 6px -1px rgba(35, 32, 30, 0.7), 0px 2px 4px -1px rgba(35, 32, 30, 0.5)',
      },
      fontSize: { 
        fourty: "40px", 
      },
      backgroundImage: { 
        gradientBackground: "linear-gradient(143deg, rgba(237,235,233,1) 61%, rgba(46,124,223,1) 61%)",
        backgroundborder: "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #be123c 50.78%, hsla(0, 0%, 100%, 0))",
      },
      
    },
  },
  plugins: [],
};
