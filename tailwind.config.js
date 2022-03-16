module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "amplify-dark-blue": "#0043C0",
        "term-primary-blue": "#D4E3FF",
        "term-secondary-blue": "#F5F8FF",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
