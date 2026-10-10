/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saudi: "#006C35",
        deep: "#004D26",
        mint: "#EAF7F0",
        gold: "#C9A227",
        ink: "#0B1F16",
      },
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans Arabic", "system-ui", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0, 77, 38, 0.25)",
        glow: "0 0 0 1px rgba(0,108,53,0.08), 0 24px 60px -20px rgba(0,77,38,0.35)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        beat: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        scan: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(110%)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wave: "wave 2.4s ease-out infinite",
        beat: "beat 1.1s ease-in-out infinite",
        scan: "scan 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
