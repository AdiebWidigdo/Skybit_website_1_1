/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        steelblue: {
          "100": "#4392c5",
          "200": "#2d609e",
        },
        cornflowerblue: {
          "100": "#81b4ff",
          "200": "#6095e3",
        },
        whitesmoke: {
          "100": "#f5f3f3",
          "200": "#f0efef",
        },
        darkslategray: {
          "100": "#333",
          "200": "#00363f",
        },
        darkslateblue: "#373c82",
        black: "#000",
        silver: "#c1c1c1",
        dimgray: "#593f3f",
        gainsboro: "#d8e3ea",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "sm-1": "13.1px",
      xs: "12px",
      "sm-4": "13.4px",
      "sm-6": "13.6px",
      "sm-5": "13.5px",
      sm: "14px",
      "smi-8": "12.8px",
      "smi-9": "12.9px",
      "smi-5": "12.5px",
      "mid-4": "17.4px",
      "3xs": "10px",
      "2xs-2": "10.2px",
      "sm-9": "13.9px",
      base: "16px",
      "13xl": "32px",
      "9xl": "28px",
      "mini-6": "14.6px",
      xl: "20px",
      "base-8": "15.8px",
      "base-5": "16.5px",
      "base-9": "15.9px",
      "base-2": "16.2px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
