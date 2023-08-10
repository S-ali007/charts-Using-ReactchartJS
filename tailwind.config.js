/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope'],
        roboto: ['Roboto'],
        Inter:['Inter'],
        PlusJakartaSans:['Plus Jakarta Sans'],
      }
    }
  },
  plugins: [],
};
