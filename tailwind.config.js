/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '44': '39rem',  // 44 * 0.25rem = 11rem
        '64': '13rem',  // 44 * 0.25rem = 11rem
      },
      maxHeight: {
        '75': '19rem',  // 44 * 0.25rem = 11rem
      },
      width: {
        '142': '568px',  // 142 * 4px = 568px
        '272': '272px',
      },
      height: {
        '82': '318px',  // 80 * 4px = 320px
        '240': '240px',
      },
    },
  },
  plugins: [],
}

