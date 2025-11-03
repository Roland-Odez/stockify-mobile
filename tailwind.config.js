/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        nemo: {
          pink: "#eb4fc2",
          green: "#75faa7",
          bluePurple: "#4021f5",
          darkPurple: "#290e58",
          lightGreen: "#b9fad4",
          yellow: "#fffd55",
          cyan: "#8efcfb",
          orange: "#f08f35",
          yellowLight: "#fcf9ce",
          lightPurple: '#221f2a',
          lighterPurple: '#332f3e'
        },
        mediumGrey: "#999",
      },
    },
  },
  plugins: [],
};
