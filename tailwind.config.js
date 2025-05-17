/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'menu-to-x': 'menuToX 0.3s ease-in-out',
        'x-to-menu': 'xToMenu 0.3s ease-in-out',
      },
      keyframes: {
        menuToX: {
          '0%': { 
            transform: 'rotate(0deg) scale(1)' 
          },
          '50%': { 
            transform: 'rotate(90deg) scale(1.2)' 
          },
          '100%': { 
            transform: 'rotate(180deg) scale(1)' 
          },
        },
        xToMenu: {
          '0%': { 
            transform: 'rotate(180deg) scale(1)' 
          },
          '50%': { 
            transform: 'rotate(90deg) scale(1.2)' 
          },
          '100%': { 
            transform: 'rotate(0deg) scale(1)' 
          },
        }
      }
    },
  },
  plugins: [],
}
