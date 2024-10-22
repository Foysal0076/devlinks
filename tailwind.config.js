/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '330px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
        },
      },
      fontFamily: {
        Inter: ['var(--font-inter)'],
        Rubik: ['var(--font-rubik)'],
      },
      blur: {
        sm: 'var(--backgroundblur-sm-backdrop-filter)',
        md: 'var(--backgroundblur-md-backdrop-filter)',
        lg: 'var(--backgroundblur-lg-backdrop-filter)',
        xl: 'var(--backgroundblur-xl-backdrop-filter)',
      },
      backgroundImage: {
        'chevron-down': 'url(/assets/images/icons/chevron-down.svg)',
      },
      backgroundPosition: {
        'left-2': 'left .5rem center',
        'left-4': 'left 1rem center',
        'left-6': 'left 1.5rem center',
        'left-8': 'left 2rem center',
        'right-2': 'right .5rem center',
        'right-4': 'right 1rem center',
        'right-6': 'right 1.5rem center',
        'right-8': 'right 2rem center',
      },
      fontSize: {
        xxs: [
          '0.625rem',
          {
            lineHeight: '1.125rem',
          },
        ],
      },
      colors: {
        primary: {
          50: 'rgb(var(--colors-primary-50) / <alpha-value>)',
          100: 'rgb(var(--colors-primary-100) / <alpha-value>)',
          200: 'rgb(var(--colors-primary-200) / <alpha-value>)',
          300: 'rgb(var(--colors-primary-300) / <alpha-value>)',
          400: 'rgb(var(--colors-primary-400) / <alpha-value>)',
          500: 'rgb(var(--colors-primary-500) / <alpha-value>)',
          600: 'rgb(var(--colors-primary-600) / <alpha-value>)',
          700: 'rgb(var(--colors-primary-700) / <alpha-value>)',
          800: 'rgb(var(--colors-primary-800) / <alpha-value>)',
          900: 'rgb(var(--colors-primary-900) / <alpha-value>)',
        },
        neutral: {
          0: 'rgb(var(--colors-neutral-0) / <alpha-value>)',
          10: 'rgb(var(--colors-neutral-10) / <alpha-value>)',
          20: 'rgb(var(--colors-neutral-20) / <alpha-value>)',
          30: 'rgb(var(--colors-neutral-30) / <alpha-value>)',
          40: 'rgb(var(--colors-neutral-40) / <alpha-value>)',
          50: 'rgb(var(--colors-neutral-50) / <alpha-value>)',
          60: 'rgb(var(--colors-neutral-60) / <alpha-value>)',
          70: 'rgb(var(--colors-neutral-70) / <alpha-value>)',
          80: 'rgb(var(--colors-neutral-80) / <alpha-value>)',
          90: 'rgb(var(--colors-neutral-90) / <alpha-value>)',
          100: 'rgb(var(--colors-neutral-100) / <alpha-value>)',
          200: 'rgb(var(--colors-neutral-200) / <alpha-value>)',
          300: 'rgb(var(--colors-neutral-300) / <alpha-value>)',
          400: 'rgb(var(--colors-neutral-400) / <alpha-value>)',
          500: 'rgb(var(--colors-neutral-500) / <alpha-value>)',
          600: 'rgb(var(--colors-neutral-600) / <alpha-value>)',
          700: 'rgb(var(--colors-neutral-700) / <alpha-value>)',
          800: 'rgb(var(--colors-neutral-800) / <alpha-value>)',
          900: 'rgb(var(--colors-neutral-900) / <alpha-value>)',
        },
        surface: {
          0: 'rgb(var(--colors-surface-0) / <alpha-value>)',
          50: 'rgb(var(--colors-surface-50) / <alpha-value>)',
          100: 'rgb(var(--colors-surface-100) / <alpha-value>)',
          200: 'rgb(var(--colors-surface-200) / <alpha-value>)',
          300: 'rgb(var(--colors-surface-300) / <alpha-value>)',
          400: 'rgb(var(--colors-surface-400) / <alpha-value>)',
          500: 'rgb(var(--colors-surface-500) / <alpha-value>)',
          600: 'rgb(var(--colors-surface-600) / <alpha-value>)',
          700: 'rgb(var(--colors-surface-700) / <alpha-value>)',
          800: 'rgb(var(--colors-surface-800) / <alpha-value>)',
          900: 'rgb(var(--colors-surface-900) / <alpha-value>)',
          950: 'rgb(var(--colors-surface-950) / <alpha-value>)',
        },
      },
      borderColor: {
        DEFAULT: '#e5e7eb',
      },
      boxShadow: {
        xs: 'var(--box-shadow-xs)',
        sm: 'var(--box-shadow-sm)',
        md: 'var(--box-shadow-md)',
        lg: 'var(--box-shadow-lg)',
        xl: 'var(--box-shadow-xl)',
        '2xl': 'var(--box-shadow-2-xl)',
        '3xl': 'var(--box-shadow-3-xl)',
        'top': 'var(--box-shadow-top)',
      },
      blur: {
        sm: 'var(--backgroundblur-sm-backdrop-filter)',
        md: 'var(--backgroundblur-md-backdrop-filter)',
        lg: 'var(--backgroundblur-lg-backdrop-filter)',
        xl: 'var(--backgroundblur-xl-backdrop-filter)',
      },
      backgroundImage: {
        'chevron-down': 'url(/assets/images/icons/chevron-down.svg)',
      },
      backgroundPosition: {
        'left-2': 'left .5rem center',
        'left-4': 'left 1rem center',
        'left-6': 'left 1.5rem center',
        'left-8': 'left 2rem center',
        'right-2': 'right .5rem center',
        'right-4': 'right 1rem center',
        'right-6': 'right 1.5rem center',
        'right-8': 'right 2rem center',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        alpha: 'lower-alpha',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}
