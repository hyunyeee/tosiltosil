/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        /* Sub Colors */
        "sub-red": "var(--color-sub-red)",
        "sub-orange": "var(--color-sub-orange)",
        "sub-yellow": "var(--color-sub-yellow)",
        "sub-green": "var(--color-sub-green)",
        "sub-mint": "var(--color-sub-mint)",
        "sub-skyblue": "var(--color-sub-skyblue)",
        "sub-blue": "var(--color-sub-blue)",
        "sub-purple": "var(--color-sub-purple)",
        "sub-pink": "var(--color-sub-pink)",
        "sub-coral": "var(--color-sub-coral)",
        "sub-indigo": "var(--color-sub-indigo)",

        /* Primary Colors */
        "primary-red": "var(--color-primary-red)",
        "primary-orange": "var(--color-primary-orange)",
        "primary-yellow": "var(--color-primary-yellow)",
        "primary-green": "var(--color-primary-green)",
        "primary-mint": "var(--color-primary-mint)",
        "primary-skyblue": "var(--color-primary-skyblue)",
        "primary-blue": "var(--color-primary-blue)",
        "primary-purple": "var(--color-primary-purple)",
        "primary-pink": "var(--color-primary-pink)",
        "primary-coral": "var(--color-primary-coral)",
        "primary-indigo": "var(--color-primary-indigo)",
      },
    },
  },
  plugins: [],
};
