import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xxs':'400px',
        'xs': '480px', 
        'sm': '640px', 
        'md': '900px', 
        'mmd': '1000px',
        'lg': '1200px', 
        'xl': '1440px',
      },
      backdropBlur:{
        'glass':'30px'
      },
      boxShadow:{
        'btn': '0px 0px 5px 1px white',
        'pic': '0px 0px 5px 1px #FDFEBA',
      },
    },
  },
  plugins: [],
};
export default config;
