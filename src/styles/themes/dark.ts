import { Root } from '../root';

export const DarkTheme = {
  ...Root,
  name: 'DarkTheme',
  color: {
    'base-900': '#111827',
    'base-800': '#1F2937',
    'base-700': '#374151',
    'base-600': '#4B5563',
    'base-500': '#6B7280',
    'base-400': '#94A3B8',
    'base-300': '#CBD5E1',
    'base-200': '#E5E7EB',
    'base-100': '#F3F4F6',
    'base-50': '#F8FAFC',

    'brand-900': '#312E81',
    'brand-800': '#3730A3',
    'brand-700': '#4338CA',
    'brand-600': '#4F46E5',
    'brand-500': '#6366F1',
    'brand-400': '#818CF8',
    'brand-300': '#A5B4FC',
    'brand-200': '#C7D2FE',
    'brand-100': '#E0E7FF',
    'brand-50': '#EEF2FF',

    'base-dark': '#000000',
    'base-light': '#FFFFFF',

    'success-dark': '#0D9488',
    'success-base': '#2DD4BF',
    'success-light': '#F0FDFA',

    'warning-dark': '#D97706',
    'warning-base': '#F59E0B',
    'warning-light': '#FEF3C7',

    'danger-dark': '#E11D48',
    'danger-base': '#FB7185',
    'danger-light': '#FFF1F2',
  },
} as const;
