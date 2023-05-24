/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "#00878A",
        primaryDark:"#004446",
        secondaryLight:"#B3DBDC",
        secondaryWhite:"#E6F3F3",
        PrimaryBlack:"#004446",   
      }
    },
  },
  plugins: [],
}
