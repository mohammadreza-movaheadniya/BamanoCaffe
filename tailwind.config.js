/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          100: "#967259",
          100: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px 0px #0000000D",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily:{
        "Dana" :"Dana",
        "DanaMedium" :"Dana Medium",
        "DanaDemiBold" :"Dana DemiBold",
        "MorabbaLight":"Morabba Light",
        "MorabbaBold":"Morabba Bold",
        "MorabbaMedium":"Morabba Medium",
      },
      letterSpacing:{
        "tightest":"-0.065rem"
      },
      spacing:{
        "25":"6.25rem",
        "30":"7.5rem",
        "50":"12.5rem"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          lg:"0.625rem",
        }
      },
      backgroundImage:{
        "home-mobile":"url(../images/headerBgMobile.webp)",
        "home-desktop":"url(../images/headerBgDesktop.webp)",
      },
    },
    screens:{
      'xs': '480px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [
    function ({ addVariant }){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');
    }
  ],
};