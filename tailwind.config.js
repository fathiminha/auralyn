export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: '#E6D9F2',
        plum: '#6B3FA0',
        rose: '#C9808A',
        cream: '#FDF6F0',
        deepplum: '#3B1F5E',
        lilac: '#B39CC8',
        blush: '#F2E6EA',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}