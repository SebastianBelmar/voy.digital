/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
      xxl: '1440px',
    },
    colors: {
      'principal': '#FFB000',
      'boton': '#3D858F',
      'oscuro': '#004650',
      'medio': '#3D858F',
      'medio-claro': '#88BAC1',
      'claro': '#CDE2E5',
      'fondo': '#E9F9FB',
      'blanco': '#FFFFFF',
      'success': '#B9E10F',
      'info': '#3BD9FC',
      'alert': '#FBC504',
      'danger': '#FC3B80',
      'sombra': 'hsla(200, 40%, 25%, 0.1)'
    },
    keyframes: {
      shimmer: {
        '100%' : {transform: 'translateX(100%)'}
      }
    },

    extend: {
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // unbounded: ['Unbounded', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}