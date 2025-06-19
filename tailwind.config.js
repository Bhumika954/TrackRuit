/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode using class strategy (you can toggle using a class)
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing here
      colors: {
        primary: '#2563EB', // Tailwind blue-600
        secondary: '#6B7280', // Tailwind gray-500
      },
    },
  },
  plugins: [
    // Add plugins here if needed, like:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
