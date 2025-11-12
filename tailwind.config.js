/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🌸 Brand Palette — Saptrangi Kurti & Sarees
        primary: "#DC4B82", // Soft Pink – accent / CTA
        secondary: "#E283A5", // Light Blush – highlights
        neutral: "#E9EBEA", // Gentle Grey – 🌿 Main Background
        dark: "#1F1F1F", // Deep dark – text / contrast
        white: "#FFFFFF", // Pure white – for cards / surfaces
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ['"Open Sans"', "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
