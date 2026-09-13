import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4A373', // Muted Peach / Rose Gold
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FAEDCD', // Warm Beige
        },
        accent: {
          DEFAULT: '#4A3B32', // Deep Brown for text
        },
      }
    },
  },
  plugins: [],
};
export default config;