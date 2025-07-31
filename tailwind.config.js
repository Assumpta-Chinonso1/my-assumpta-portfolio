export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        background: '#0a192f',
        dark: '#112240',
        light: '#ccd6f6',
        muted: '#8892b0',
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
