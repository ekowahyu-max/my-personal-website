/** @type {import('tailwindcss').Config} */
export default {
    // IMPORTANT: This 'content' array tells Tailwind which files to scan for CSS class names.
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}