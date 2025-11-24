import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        main: '#f0f0f0',
        text: '#231f20',
        'text-additional': '#b4b2b2',
        title: '#f7e2e1',
        secondary: '#f0f0f0',
        primary: '#242630',
        button: '#dcc5db',
      },
      fontSize: {
        'small-ultra': '14px',
        small: '16px',
        'medium-ultra': '20px',
        medium: '24px',
        big: '32px',
        title: '48px',
      },
      boxShadow: {
        dark: '0px 0px 10px 8px rgba(103, 99, 100, 0.2)',
        card: '0px 10px 10px -3px rgba(92, 85, 82, 0.5)',
        white: '4px 4px 5px -2px #f7f0f5',
      },
      keyframes: {
        scaleButton: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.97)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(250px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-250px)', opacity: '0' },
        },
      },
      animation: {
        'scale-button': 'scaleButton 2s ease-in-out infinite',
        'slide-in-right': 'slideInFromRight 0.5s ease both',
        'slide-out-right': 'slideOutToRight 0.5s ease both',
      },
    },
  },
  plugins: [],
} satisfies Config
