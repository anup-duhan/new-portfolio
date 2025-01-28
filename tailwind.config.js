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
        gradientBackground: "linear-gradient(143deg, rgba(237,235,233,1) 61%, rgb(209, 213, 219) 61%)",
        backgroundborder: "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #be123c 50.78%, hsla(0, 0%, 100%, 0))",
        gradientBg: "linear-gradient(143deg, rgb(209, 213, 219) 61%, rgba(237,235,233,1) 61%)",
      },
      animation: {
        progress: 'progress 3s ease-in-out forwards',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },    
    },
  },
  plugins: [],
};
