/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      primary: {
        50: "#EBF5FF",
        100: "#ADD6FF",
        200: "#70B8FF",
        300: "#3399FF",
        400: "#1F8FFF",
        500: "#0074e5",
        600: "#005CB8",
        700: "#003D7A",
        800: "#001F3D",
        900: "#001429",
        
        default: "#0074e5",
      },
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      warning: {
        100: "#FFF1E4",
        500: "#FF9F43",
        600:"#ed8936",
        700: "#fffaf0",
        800: "#c25621",
      },
      success: {
        50: "#EEFCF4",
        100: "#DDF8E9",
        500: "#28C76F",
      },
      danger: {
        500: "#D52B1E",
      },
    },
  },
  plugins: [],
};
