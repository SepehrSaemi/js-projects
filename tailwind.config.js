/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./projects/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        digital: ["Audiowide", "sans-serif"],
      },
    },
  },
  plugins: [],
};
