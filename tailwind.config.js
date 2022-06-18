module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#FFE01B",
      secondary: "#017A6F",
      third: "#884485",
      lgreen: "#009688",
      lgray: "#D6D6D6",
      gray: "#F9F9F9",
      lightGray: "#8E8E8E",
      bluefooter: "#067B87",
    },
    fontFamily: {
      body: ["Roboto"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
};
