/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        'base-900': 'var(--base-900)',
        'base-800': 'var(--base-800)',
        'base-700': 'var(--base-700)',
        'base-600': 'var(--base-600)',
        'base-500': 'var(--base-500)',
        'base-400': 'var(--base-400)',
        'base-300': 'var(--base-300)',
        'base-200': 'var(--base-200)',
        'base-100': 'var(--base-100)',
        'base-50': 'var(--base-50)',

        'brand-900': 'var(--brand-900)',
        'brand-800': 'var(--brand-800)',
        'brand-700': 'var(--brand-700)',
        'brand-600': 'var(--brand-600)',
        'brand-500': 'var(--brand-500)',
        'brand-400': 'var(--brand-400)',
        'brand-300': 'var(--brand-300)',
        'brand-200': 'var(--brand-200)',
        'brand-100': 'var(--brand-100)',
        'brand-50': 'var(--brand-50)',

        'base-dark': 'var(--base-dark)',
        'base-light': 'var(--base-light)',

        'success-dark': 'var(--success-dark)',
        'success-base': 'var(--success-base)',
        'success-light': 'var(--success-light)',

        'warning-dark': 'var(--warning-dark)',
        'warning-base': 'var(--warning-base)',
        'warning-light': 'var(--warning-light)',

        'danger-dark': 'var(--danger-dark)',
        'danger-base': 'var(--danger-base)',
        'danger-light': 'var(--danger-light)',
      },
    },
  },
  plugins: [],
}
