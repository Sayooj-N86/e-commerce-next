import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize:{
        textsize: "1.1rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
