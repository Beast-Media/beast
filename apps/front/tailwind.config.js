const rem = val => `${val * 2.1}rem`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'beast-main': '#FF8A00',
        'beast-main-1': '#DB7600',
        'beast-main-2': '#BC6600',
        'beast-main-3': '#874900',
        'beast-main-4': '#552E00',
        'beast-bg': '#242424',
        'beast-bg-1': '#2D2D2D',
        'beast-bg-2': '#505050',
        'beast-bg-3': '#C0C0C0',
        'beast-bg-4': '#FFFFFF',
        'beast-accent-success': '#3E9D47',
        'beast-accent-error': '#D65656',
        'beast-accent-warning': '#D8CD37',
        'beast-font': '#FFFFFF',
        'beast-font-1': '#FF8A00',
        'beast-font-2': '#7B7B7B',
      },
      fontSize: {
        sm: rem(0.6),
        base: rem(1),
        md: rem(0.8),
        lg: rem(1 + 0.25 / 2),
        xl: rem(1.25),
        "2xl": rem(1.563),
        "3xl": rem(1.953),
        "4xl": rem(2.441),
        "5xl": rem(3.052)
      }
    }
  },
  plugins: []
};
