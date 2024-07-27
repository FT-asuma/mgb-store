import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightGrey": "#F2F2F2",
        "darkGrey": "#999999",
        "lightGreen": "#39B969",
        "orange": "#EF9545",
        "hoveredGReen": "#60c787"
      }
    },
  },
  plugins: [],
};
export default config;
