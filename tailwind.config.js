/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        df678c: "#df678c",
        "0C0313": "#0C0313",
        "3D155F": "#3D155F",
      },
    },
  },
  corePlugins: {
    animation: false,
  },
  plugins: [require("daisyui"), ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};