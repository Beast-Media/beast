const rem = val => `${val * 2.1}rem`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: "#1DB954"
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
