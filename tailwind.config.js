module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      inset: {
        "2/5": "40%",
      },
      width: {
        "1/5": "20%",
        "7/30": "23.34%",
        "7/20": "35%",
        "9/10": "90%",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "200%": "200%",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus", "group-focus-within"],
      transitionProperty: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
