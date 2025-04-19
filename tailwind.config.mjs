/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./my_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "900px",
      sm: "600px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        // black: "#1e1917",
        // white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
      },
    },
  },
  plugins: [],
};
