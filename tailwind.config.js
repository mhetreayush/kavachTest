/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#18357C",
        primaryOrange: "#EA7649",
        secondaryText: "#434343",
        darkerBlue: "#203F7C",
      },
    },
  },
  plugins: [],
};
