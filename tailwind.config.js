module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{vue,ts,js,scss,html}",
    "./components/**/*.{vue,ts,js,scss,html}",
    "./plugins/**/*.{ts,js}",
    "./assets/**/*.scss",
    "./stores/**/*.{ts,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
