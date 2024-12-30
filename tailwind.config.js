/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [scrollbarHide],
};
