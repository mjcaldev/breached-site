import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Custom Ministry Color Palette
        'black-olive': {
          DEFAULT: '#37392e',
          50: '#f7f7f6',
          100: '#e5e6e1',
          200: '#d9dbd2',
          300: '#b3b6a4',
          400: '#8d9277',
          500: '#626652',
          600: '#37392e',
          700: '#2c2d24',
          800: '#21221b',
          900: '#161712',
          950: '#0b0b09',
        },
        'paynes-gray': {
          DEFAULT: '#19647e',
          50: '#f0f9fc',
          100: '#c3e7f3',
          200: '#88d0e7',
          300: '#4cb8dc',
          400: '#2596bb',
          500: '#19647e',
          600: '#145266',
          700: '#0f3d4d',
          800: '#0a2933',
          900: '#05141a',
          950: '#030a0d',
        },
        'verdigris': {
          DEFAULT: '#28afb0',
          50: '#f0fdfd',
          100: '#cff4f4',
          200: '#9fe9e9',
          300: '#6edede',
          400: '#3ed3d3',
          500: '#28afb0',
          600: '#208c8c',
          700: '#186969',
          800: '#104646',
          900: '#082323',
          950: '#041111',
        },
        'timberwolf': {
          DEFAULT: '#ddcecd',
          50: '#fcfafa',
          100: '#f8f5f5',
          200: '#f2ecec',
          300: '#ebe2e2',
          400: '#e5d9d8',
          500: '#ddcecd',
          600: '#bb9e9b',
          700: '#996c68',
          800: '#664845',
          900: '#332423',
          950: '#1a1211',
        },
        'isabelline': {
          DEFAULT: '#eee5e5',
          50: '#fcfafa',
          100: '#f8f5f5',
          200: '#f2ecec',
          300: '#ebe2e2',
          400: '#e5d9d8',
          500: '#eee5e5',
          600: '#caaeae',
          700: '#a57575',
          800: '#724a4a',
          900: '#392525',
          950: '#1c1212',
        },
        // Keep existing shadcn colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.6s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;