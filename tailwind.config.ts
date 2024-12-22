/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-gray": "var(--main-gray)",
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        border: "#a3a3a3",
      },
      screens: {
        xs: "512px",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
        inter: ["var(--font-inter)"],
      },
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-100% - 5rem))" },
        },
      },
      animation: {
        scroll:
          "scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
