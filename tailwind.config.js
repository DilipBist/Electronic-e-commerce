/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandBG: 'var(--brand-bg)',
        bgLight: 'var(--bg-light)',
        bgGrey: 'var(--bg-grey)',
        bgOrange: 'var(--bg-orange)',
        bgLightGrey: 'var(--bg-light-grey)',
        whiteFont: 'var(--white-font)',
        blackFont: 'var(--black-font)',
        footer: 'var(--footer)',
        buttonColor: 'var(--button)',
      }
    },
  },
  plugins: [],
}

