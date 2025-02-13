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
        foreground: "var(--foreground)",
        primary: "#000",
        secondary: "#fff",
        terciary: "#333333",
        gray_light: "#666666",
        background: "#F5F5F5",
        warning: "#FF4444",
        bg_button_buy: "#28a745",
        bg_button_back: "#007bff",
      },
    },
    screens: {
      'md': {max: '950px'},
      'sm': {max: '700px'},
      'xm': {max: '350px'}
    }
  },
  plugins: [],
} satisfies Config;
