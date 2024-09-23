/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add the custom text gradient class here
      typography: {
        ktext: {
          fontWeight: "bold",
          backgroundImage:
            "linear-gradient(to bottom, #f5f5f5, #d4d4d4, #525252)",
          backgroundClip: "text",
          color: "transparent",
        },
      },
    },
  },
  plugins: [
    // Add the plugin for custom typography
    function ({ addUtilities }) {
      const newUtilities = {
        ".ktext": {
          "font-weight": "bold",
          "background-image":
            "linear-gradient(to bottom, #f5f5f5, #d4d4d4, #525252)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
