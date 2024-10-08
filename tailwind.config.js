/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ethiopia-hero': "url('/assets/p-1.jpg')",
         'about-hero': "url('/images/about-hero.jpg')",
      },
      animation: {
        slideInFromBottom: 'slideInFromBottom 1s ease-out',
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


