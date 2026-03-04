/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        midnight: '#08111f',
        mist: '#ddebf6',
        glacier: '#96d6ff',
        pine: '#105c49',
        moss: '#2d8666'
      },
      boxShadow: {
        glass: '0 10px 30px rgba(8, 17, 31, 0.35)'
      },
      backgroundImage: {
        'nature-radial':
          'radial-gradient(circle at top right, rgba(150,214,255,0.35), transparent 40%), radial-gradient(circle at 20% 20%, rgba(45,134,102,0.35), transparent 45%), linear-gradient(145deg, #08111f 0%, #0f2f49 40%, #153329 100%)',
        'nature-day':
          'radial-gradient(circle at top right, rgba(80,160,220,0.2), transparent 38%), radial-gradient(circle at 18% 18%, rgba(50,180,120,0.25), transparent 42%), linear-gradient(145deg, #f6fbff 0%, #e9f6ff 45%, #edf8f1 100%)'
      }
    }
  },
  plugins: []
};
