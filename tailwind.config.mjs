/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        relic: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36adf7',
          500: '#0c93e8',
          600: '#0074c6',
          700: '#015da1',
          800: '#065085',
          900: '#0b436e',
          950: '#072b49',
        },
        // High-saturation accent colors that pair with the relic blue.
        // Used for allow/deny/flag verdicts across the site.
        allow: {
          DEFAULT: '#00e887',
          400: '#10ff97',
          500: '#00e887',
          600: '#00c878',
        },
        deny: {
          DEFAULT: '#ff3366',
          400: '#ff5183',
          500: '#ff3366',
          600: '#e61a4f',
        },
        flag: {
          DEFAULT: '#ffe600',
          400: '#fff14d',
          500: '#ffe600',
          600: '#e6ce00',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          'system-ui',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '600' }],
        'heading': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.028em', fontWeight: '600' }],
        'subheading': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.018em', fontWeight: '500' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
