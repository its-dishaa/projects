/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // ✅ needed
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
