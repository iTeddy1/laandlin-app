import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.DARK_MODE ? process.env.DARK_MODE : "media",
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/hooks/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  presets: [require("nativewind/preset")],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // cua tao
        // Primary colors
        black: "#454343",

        base: {
          50: "#FEF9EE", // Màu vàng rất nhạt
          100: "#FCF2DD", // Nhạt hơn #f7e1ae
          200: "#F9E8C3", // Nhạt hơn một chút
          300: "#D8C994", // Màu bạn cung cấp #f7e1ae
          400: "#A79063", 
          DEFAULT: "#F7C332", 
          600: "#E5B221", // Giữa #f7c332 và #d0a019 A79063
          700: "#D0A019", // Màu bạn cung cấp #d0a019
          800: "#B28915", // border
          900: "#8A6A10", // Màu vàng rất đậm
        },
        // Gray scale
        gray: {
          100: "#F8F8F8",
          200: "#E4E4E4",
          300: "#CDCDCD",
          400: "#BABABA",
          DEFAULT: "#8C8C8C",
          600: "#767676",
          700: "#575758",
          800: "#29292A",
        },
        // Success colors (green)
        success: {
          100: "#CFF2D8",
          200: "#9DE5B0",
          300: "#8ED989",
          400: "#35C75A",
          DEFAULT: "#2AA147",
          600: "#23862B",
          700: "#19812B",
          800: "#114D1D",
        },

        // Warning colors (orange)
        warning: {
          100: "#FFE1C8",
          200: "#FFBF8C",
          300: "#FF9E4F",
          400: "#FF821D",
          DEFAULT: "#FC5100",
          600: "#D94601",
          700: "#A33301",
          800: "#822001",
        },

        // Error colors (red)
        error: {
          100: "#FBDAD0",
          200: "#E3871A",
          300: "#E37A88",
          400: "#DC6E57",
          DEFAULT: "#C4442A",
          600: "#93331F",
          700: "#842415",
          800: "#44180E",
        },

        // Overlay colors
        overlay: {
          200: "rgba(0, 0, 0, 0.2)", // A200
          500: "rgba(0, 0, 0, 0.5)", // A500
          800: "rgba(0, 0, 0, 0.8)", // A800
        },

        // The following colors are used in the GlueStack UI Kit
        primary: {
          0: "rgb(var(--color-primary-0)/<alpha-value>)",
          50: "rgb(var(--color-primary-50)/<alpha-value>)",
          100: "rgb(var(--color-primary-100)/<alpha-value>)",
          200: "rgb(var(--color-primary-200)/<alpha-value>)",
          300: "rgb(var(--color-primary-300)/<alpha-value>)",
          400: "rgb(var(--color-primary-400)/<alpha-value>)",
          500: "rgb(var(--color-primary-500)/<alpha-value>)",
          600: "rgb(var(--color-primary-600)/<alpha-value>)",
          700: "rgb(var(--color-primary-700)/<alpha-value>)",
          800: "rgb(var(--color-primary-800)/<alpha-value>)",
          900: "rgb(var(--color-primary-900)/<alpha-value>)",
          950: "rgb(var(--color-primary-950)/<alpha-value>)",
        },
        secondary: {
          0: "rgb(var(--color-secondary-0)/<alpha-value>)",
          50: "rgb(var(--color-secondary-50)/<alpha-value>)",
          100: "rgb(var(--color-secondary-100)/<alpha-value>)",
          200: "rgb(var(--color-secondary-200)/<alpha-value>)",
          300: "rgb(var(--color-secondary-300)/<alpha-value>)",
          400: "rgb(var(--color-secondary-400)/<alpha-value>)",
          500: "rgb(var(--color-secondary-500)/<alpha-value>)",
          600: "rgb(var(--color-secondary-600)/<alpha-value>)",
          700: "rgb(var(--color-secondary-700)/<alpha-value>)",
          800: "rgb(var(--color-secondary-800)/<alpha-value>)",
          900: "rgb(var(--color-secondary-900)/<alpha-value>)",
          950: "rgb(var(--color-secondary-950)/<alpha-value>)",
        },
        tertiary: {
          50: "rgb(var(--color-tertiary-50)/<alpha-value>)",
          100: "rgb(var(--color-tertiary-100)/<alpha-value>)",
          200: "rgb(var(--color-tertiary-200)/<alpha-value>)",
          300: "rgb(var(--color-tertiary-300)/<alpha-value>)",
          400: "rgb(var(--color-tertiary-400)/<alpha-value>)",
          500: "rgb(var(--color-tertiary-500)/<alpha-value>)",
          600: "rgb(var(--color-tertiary-600)/<alpha-value>)",
          700: "rgb(var(--color-tertiary-700)/<alpha-value>)",
          800: "rgb(var(--color-tertiary-800)/<alpha-value>)",
          900: "rgb(var(--color-tertiary-900)/<alpha-value>)",
          950: "rgb(var(--color-tertiary-950)/<alpha-value>)",
        },
        error: {
          0: "rgb(var(--color-error-0)/<alpha-value>)",
          50: "rgb(var(--color-error-50)/<alpha-value>)",
          100: "rgb(var(--color-error-100)/<alpha-value>)",
          200: "rgb(var(--color-error-200)/<alpha-value>)",
          300: "rgb(var(--color-error-300)/<alpha-value>)",
          400: "rgb(var(--color-error-400)/<alpha-value>)",
          500: "rgb(var(--color-error-500)/<alpha-value>)",
          600: "rgb(var(--color-error-600)/<alpha-value>)",
          700: "rgb(var(--color-error-700)/<alpha-value>)",
          800: "rgb(var(--color-error-800)/<alpha-value>)",
          900: "rgb(var(--color-error-900)/<alpha-value>)",
          950: "rgb(var(--color-error-950)/<alpha-value>)",
        },
        success: {
          0: "rgb(var(--color-success-0)/<alpha-value>)",
          50: "rgb(var(--color-success-50)/<alpha-value>)",
          100: "rgb(var(--color-success-100)/<alpha-value>)",
          200: "rgb(var(--color-success-200)/<alpha-value>)",
          300: "rgb(var(--color-success-300)/<alpha-value>)",
          400: "rgb(var(--color-success-400)/<alpha-value>)",
          500: "rgb(var(--color-success-500)/<alpha-value>)",
          600: "rgb(var(--color-success-600)/<alpha-value>)",
          700: "rgb(var(--color-success-700)/<alpha-value>)",
          800: "rgb(var(--color-success-800)/<alpha-value>)",
          900: "rgb(var(--color-success-900)/<alpha-value>)",
          950: "rgb(var(--color-success-950)/<alpha-value>)",
        },
        warning: {
          0: "rgb(var(--color-warning-0)/<alpha-value>)",
          50: "rgb(var(--color-warning-50)/<alpha-value>)",
          100: "rgb(var(--color-warning-100)/<alpha-value>)",
          200: "rgb(var(--color-warning-200)/<alpha-value>)",
          300: "rgb(var(--color-warning-300)/<alpha-value>)",
          400: "rgb(var(--color-warning-400)/<alpha-value>)",
          500: "rgb(var(--color-warning-500)/<alpha-value>)",
          600: "rgb(var(--color-warning-600)/<alpha-value>)",
          700: "rgb(var(--color-warning-700)/<alpha-value>)",
          800: "rgb(var(--color-warning-800)/<alpha-value>)",
          900: "rgb(var(--color-warning-900)/<alpha-value>)",
          950: "rgb(var(--color-warning-950)/<alpha-value>)",
        },
        info: {
          0: "rgb(var(--color-info-0)/<alpha-value>)",
          50: "rgb(var(--color-info-50)/<alpha-value>)",
          100: "rgb(var(--color-info-100)/<alpha-value>)",
          200: "rgb(var(--color-info-200)/<alpha-value>)",
          300: "rgb(var(--color-info-300)/<alpha-value>)",
          400: "rgb(var(--color-info-400)/<alpha-value>)",
          500: "rgb(var(--color-info-500)/<alpha-value>)",
          600: "rgb(var(--color-info-600)/<alpha-value>)",
          700: "rgb(var(--color-info-700)/<alpha-value>)",
          800: "rgb(var(--color-info-800)/<alpha-value>)",
          900: "rgb(var(--color-info-900)/<alpha-value>)",
          950: "rgb(var(--color-info-950)/<alpha-value>)",
        },
        typography: {
          0: "rgb(var(--color-typography-0)/<alpha-value>)",
          50: "rgb(var(--color-typography-50)/<alpha-value>)",
          100: "rgb(var(--color-typography-100)/<alpha-value>)",
          200: "rgb(var(--color-typography-200)/<alpha-value>)",
          300: "rgb(var(--color-typography-300)/<alpha-value>)",
          400: "rgb(var(--color-typography-400)/<alpha-value>)",
          500: "rgb(var(--color-typography-500)/<alpha-value>)",
          600: "rgb(var(--color-typography-600)/<alpha-value>)",
          700: "rgb(var(--color-typography-700)/<alpha-value>)",
          800: "rgb(var(--color-typography-800)/<alpha-value>)",
          900: "rgb(var(--color-typography-900)/<alpha-value>)",
          950: "rgb(var(--color-typography-950)/<alpha-value>)",
          white: "#FFFFFF",
          gray: "#D4D4D4",
          black: "#181718",
        },
        outline: {
          0: "rgb(var(--color-outline-0)/<alpha-value>)",
          50: "rgb(var(--color-outline-50)/<alpha-value>)",
          100: "rgb(var(--color-outline-100)/<alpha-value>)",
          200: "rgb(var(--color-outline-200)/<alpha-value>)",
          300: "rgb(var(--color-outline-300)/<alpha-value>)",
          400: "rgb(var(--color-outline-400)/<alpha-value>)",
          500: "rgb(var(--color-outline-500)/<alpha-value>)",
          600: "rgb(var(--color-outline-600)/<alpha-value>)",
          700: "rgb(var(--color-outline-700)/<alpha-value>)",
          800: "rgb(var(--color-outline-800)/<alpha-value>)",
          900: "rgb(var(--color-outline-900)/<alpha-value>)",
          950: "rgb(var(--color-outline-950)/<alpha-value>)",
        },
        background: {
          0: "rgb(var(--color-background-0)/<alpha-value>)",
          50: "rgb(var(--color-background-50)/<alpha-value>)",
          100: "rgb(var(--color-background-100)/<alpha-value>)",
          200: "rgb(var(--color-background-200)/<alpha-value>)",
          300: "rgb(var(--color-background-300)/<alpha-value>)",
          400: "rgb(var(--color-background-400)/<alpha-value>)",
          500: "rgb(var(--color-background-500)/<alpha-value>)",
          600: "rgb(var(--color-background-600)/<alpha-value>)",
          700: "rgb(var(--color-background-700)/<alpha-value>)",
          800: "rgb(var(--color-background-800)/<alpha-value>)",
          900: "rgb(var(--color-background-900)/<alpha-value>)",
          950: "rgb(var(--color-background-950)/<alpha-value>)",
          error: "rgb(var(--color-background-error)/<alpha-value>)",
          warning: "rgb(var(--color-background-warning)/<alpha-value>)",
          muted: "rgb(var(--color-background-muted)/<alpha-value>)",
          success: "rgb(var(--color-background-success)/<alpha-value>)",
          info: "rgb(var(--color-background-info)/<alpha-value>)",
          light: "#FBFBFB",
          dark: "#181719",
        },
        indicator: {
          primary: "rgb(var(--color-indicator-primary)/<alpha-value>)",
          info: "rgb(var(--color-indicator-info)/<alpha-value>)",
          error: "rgb(var(--color-indicator-error)/<alpha-value>)",
        },
      },
      fontFamily: {
        heading: undefined,
        body: undefined,
        mono: undefined,
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        extrablack: "950",
      },
      fontSize: {
        "2xs": "10px",
      },

      boxShadow: {
        //cua tao
        xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 35px 60px -15px rgba(0, 0, 0, 0.3)",
        // default
        "hard-1": "-2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-2": "0px 3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-3": "2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-4": "0px -3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-5": "0px 2px 10px 0px rgba(38, 38, 38, 0.10)",
        "soft-1": "0px 0px 10px rgba(38, 38, 38, 0.1)",
        "soft-2": "0px 0px 20px rgba(38, 38, 38, 0.2)",
        "soft-3": "0px 0px 30px rgba(38, 38, 38, 0.1)",
        "soft-4": "0px 0px 40px rgba(38, 38, 38, 0.1)",
      },
    },
  },
  plugins: [gluestackPlugin],
};
