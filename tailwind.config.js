/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(124, 58, 237)',
        secondary: 'rgb(249, 115, 22)',
        success: 'rgb(16, 185, 129)',
        pink: 'rgb(244, 114, 182)',
        foreground: 'rgb(30, 27, 75)',
        'body-text': 'rgb(100, 116, 139)',
        background: '#fff',
        'card-sub': '#F5F0FF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

