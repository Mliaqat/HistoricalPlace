/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/*.{js,ts,jsx,tsx,mdx}",
    "./section/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px",
        xxl: "1700px", // You can set the value you want for xs screen size
        xxxl: "2000px", // You can set the value you want for xs screen size
      },
      colors: {
        primary: "#E44B24",
        secondary: "#ffd8ce",
        blue: "#3B8FF1",
        blueBorder: "#2D54B8",
        red: "#CC4747",
        redBorder: "#B11B1B",
        yellow: "#F1BE3B",
        yellowBorder: "#B8892D",
      },
      boxShadow: {
        custom: "0px 0px 4px 0px #00000040",
        line: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        slideOut: "slideOut 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
