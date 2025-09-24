// tailwind.config.mjs
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      colors: {
        lighthover: "#fcf4ff",
        darkhover: "#2a004a",
        darktheme: "#11001F",
      },
      boxShadow: {
        blackShadow: "4px 4px 0 rgb(80, 80, 80)",
        whiteShadow: "4px 4px 0 #fff",
      },
    },
  },
  darkMode: "class"
};

export default config;
