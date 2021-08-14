module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          "toggle-btn": 'hsl(176, 100%, 44%)',
        },
        red: {
          "toggle-btn": '#D03F2F',
        },
        dark: {
          "mainBg": "hsl(222, 26%, 31%)",
          "switchBg": "#242D44",
          "toggle": "hsl(223, 31%, 20%)",
          "key": "hsl(223, 31%, 20%)",
          "text": "#FFFFFF",
          "resultBg": "#181F33",
          "keypadBg": "#242D44",
        },
        light: {
          "mainBg": "hsl(0, 0%, 90%)",
          "switchBg": "#D2CDCD",
          "toggle": "hsl(0, 5%, 81%)",
          "key": "hsl(0, 5%, 81%)",
          "text": "#36362C",
          "resultBg": "#EEEEEE",
          "keypadBg": "#D2CDCD",
        },
        violet: {
          "mainBg": "hsl(268, 75%, 9%)",
          "switchBg": "#1E0936",
          "toggle": "hsl(268, 71%, 12%)",
          "key": "hsl(268, 71%, 12%)",
          "text": "hsl(52, 100%, 62%)",
          "resultBg": "#1E0936",
          "keypadBg": "#1E0936",
        }
      }, 
      fontFamily: {
        "spartan": ['Spartan', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
