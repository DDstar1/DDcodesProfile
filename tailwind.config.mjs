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
      '2xl': { max: '1535px' }, // Styles apply below 1535px
      'xl': { max: '1279px' }, // Styles apply below 1279px
      'lg': { max: '1023px' }, // Styles apply below 1023px
      'md': { max: '767px' },  // Styles apply below 767px
      'sm': { max: '639px' },  // Styles apply below 639px
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
