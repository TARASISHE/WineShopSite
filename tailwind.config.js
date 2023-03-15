module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,vue}'
  ],
  theme: {
    colors: {
      'main-bg': '#E9D4AC',
      'darkred': '#C23417',
      'dark': '#030809',
      'text-color': '#DDDBD2',
      'btn-color': '#1F5838',
      'darkmode-light': '#AA5551',
      'darkmode-medium': '#723D46',
      'darkmode-dark': '#472D30'
    },
    screens: {
      'xs': { 'min': '325px', 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'max': '1280px' }
    }
  }, 
  plugins: []
};
