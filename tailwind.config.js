/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        darkolivegreen: "#426b1f",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
          "300": "#e6e6e6",
        },
        whitesmoke: {
          "100": "#fafaf5",
          "200": "#eaeaea",
        },
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(0, 0, 0, 0.23)",
          "400": "rgba(255, 255, 255, 0.2)",
          "500": "rgba(0, 0, 0, 0.06)",
        },
        dimgray: {
          "100": "#6d6d6d",
          "200": "#616161",
        },
        silver: {
          "100": "#c2c2c2",
          "200": "#bdbdbd",
        },
        "text-primary": "rgba(0, 0, 0, 0.87)",
        orange: "#f99a0e",
        aliceblue: "#f3f7fb",
        saddlebrown: "#99600a",
        peru: "#9e6104",
        "primary-contrast": "#fff",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
        },
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
        },
        lavender: "#ccdcec",
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        lightgray: "#cecece",
        skyblue: "#99d2f5",
      },
      fontFamily: {
        inter: "Inter",
        newsreader: "Newsreader",
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        xl: "20px",
        "10xs": "3px",
        "4xl-2": "23.2px",
        "5xs-5": "7.5px",
        xs: "12px",
        "28xl-8": "47.8px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "45xl": "64px",
      mini: "15px",
      xs: "12px",
      "sm-5": "13.5px",
      "3xl-4": "22.4px",
      "xs-2": "11.2px",
      "base-5": "16.5px",
      "3xl": "22px",
      "4xl-9": "23.9px",
      "9xl-4": "28.4px",
      "2xs-5": "10.5px",
      "mid-9": "17.9px",
      "3xs-7": "9.7px",
      "4xs": "9px",
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
