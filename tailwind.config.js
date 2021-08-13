module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          "mainBg": "hsl(222, 26%, 31%)",
          "toggle": "hsl(223, 31%, 20%)",
          "key": "hsl(223, 31%, 20%)",
        },
        light: {
          "mainBg": "hsl(0, 0%, 90%)",
          "toggle": "hsl(0, 5%, 81%)",
          "key": "hsl(0, 5%, 81%)",
        },
        violet: {
          "mainBg": "hsl(268, 75%, 9%)",
          "toggle": "hsl(268, 71%, 12%)",
          "key": "hsl(268, 71%, 12%)",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
