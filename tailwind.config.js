module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{vue,ts,js,scss}",
    "./components/**/*.{vue,ts,js,scss}",
    "./plugins/**/*.{ts,js}",
    "./stores/**/*.{,ts,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
