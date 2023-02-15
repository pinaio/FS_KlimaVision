/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],

  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
