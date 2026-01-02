/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      // Colors (Your current setup)
      colors:{
        Primary:"#3A0CA3",
        Color1:"#4361EE",
        Color2:"#4CC9F0",
        Color3:"#7209B7",
        Color4:"#F72585",
        white:"#FFFFFF",
        text_color5:"#D4D4D4",
        text_color4:"#AAAAAA",
        text_color3:"#808080",
        text_color2:"#2B2B2B",
        text_color1:"#0B090A",
      },

      // Fonts
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      // Font sizes like Figma
      fontSize: {
        h1: ["57.3px", { lineHeight: "1.2", fontWeight: "700",fontFamily:"poppins"}],
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600",fontFamily:"poppins"}],
        h3: ["28px", { lineHeight: "1.35", fontWeight: "600",fontFamily:"poppins"}],
        h4: ["19.4px", { lineHeight: "1.35", fontWeight: "600",fontFamily:"poppins"}],
        h5: ["17.4px", { lineHeight: "1.15", fontWeight: "500", fontFamily:"poppins" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400", fontFamily:"poppins"}],
        small: ["14px", { lineHeight: "1.6", fontWeight: "300" , fontFamily:"poppins"}],
      },

      // Font weights
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
       screens: {
        // xs: '320px',
        // xsm: '375px',
        xsl: '425px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
}

   
    },
  },
  plugins: [],
};
