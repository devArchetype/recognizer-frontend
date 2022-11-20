export const Root = {
  spacing: {
    xxs: '0.25rem',
    xs: ' 0.5rem',
    sm: ' 0.875rem',
    md: ' 1rem',
    lg: ' 2rem',
    xl: ' 3rem',
    xxl: ' 4rem',
  },
  font: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  text: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.875rem',
  },
  rounded: {
    base: '6px',
    full: '9999px',
  },
  shadow: {
    // base: ' 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    base: ' 0px 2px 4px -1px rgba(0, 0, 0, 0.1)',
    lg: ' 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  screen: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    xxl: '(min-width: 1536px)',
  },
} as const;
