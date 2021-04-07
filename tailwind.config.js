module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      colors: {
        primary: {
          50: "#fdefee",
          100: "#fbe0df",
          200: "#ffc8c5",
          300: "#ff9f9a",
          400: "#fc6961",
          500: "#ec362c",
          600: "#d72319",
          700: "#bb2119",
          800: "#9c1d16",
          900: "#7e1c18",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
