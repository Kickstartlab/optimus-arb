/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#09EFD3",
        "100": "#FFA409",
      },
      blue: {
        "50": "#00C4F4",
        "100": "#040E18",
        "200": "#0B1D33"
      },
      black: {
        "50": "#A4B4C3",
        "100": "#06071B",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      pink: {
        "50": "rgba(233, 70, 218, 0.3)",
        "100": "#EF09DA",
      },
    },
    fontFamily: {
      'outfit': ["'Outfit', sans-serif"],
      'poppins': ["'Poppins', sans-serif"]
    }
  },
  plugins: [],
}
