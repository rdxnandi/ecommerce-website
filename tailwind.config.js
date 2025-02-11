/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xm: "18px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
      },
      gridTemplateColumns: {
        "custom-layout": "0.5fr 2fr 1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
