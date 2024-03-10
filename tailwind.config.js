/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#0D1321',
      blue: '#1D2D44',
      green: '#13432B',
      orange: '#F8B051',
      gray: '#6E7678',
      eggshell: '#F0EBD8',
      white: '#FFFFFF',
      'blue-light': '#748CAB'
    },
    fontFamily: {
      sans: ['VG5000', 'sans-serif'],
      monospace: ['Sligoil', 'monospace']
    },
    extend: {}
  },
  plugins: []
}
