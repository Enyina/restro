import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default_background_color: "#EBEBEB",
        Secondry_color: "#99AF57",
        text_color: " #3c3c3c",
        Primary_color: " #f36829",
      },
      customForms: {
        slider: {
          thumb: {
            ".custom_thumb": {
              // Styles for the slider thumb
              appearance: "none",
              height: "18px",
              width: "18px",
              background: "#ddd",
              borderRadius: "50%",
              border: "3px solid orange",
              cursor: "pointer",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
