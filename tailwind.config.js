/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dynace: {
          deep: '#073F8A',
          blue: '#0866B2',
          cyan: '#11B5D8',
          bg: '#F7FAFD',
          body: '#344054',
          muted: '#667085',
          border: '#E5EAF1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
