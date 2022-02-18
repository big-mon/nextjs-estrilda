module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      width: { 88: "22rem" },
      maxHeight: { hero: "26rem" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
