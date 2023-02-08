/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Montserrat"],
        montserrat: ["Montserrat"],
      },
      boxShadow: {
        inner: "inset 2px 4px 8px rgba(0, 0, 0, 0.25)",
        support: "2px 4px 20px #E4E4E4",
      },
      colors: {
        cream: "#FCFBF4",
        gray_title: "#727274",
        light_gray: "#959595",
        title: "#262626",
        tl_signup: "rgba(12, 97, 254, 1)",
        bl_signup: "rgba(234, 81, 81, 1)",
        tl_rgba_home: "rgba(12, 97, 254, 0.2)",
        m_rgba_home: "rgba(110, 154, 236, 0.1)",
        bl_rgba_home: "rgba(12, 97, 254, 0.2)",
        support_bg: "#F8F6FD",
        ratings: "#FDBC22",
        footer: "#11151E",
        green: "#5DDA6A",
        form_bg: "#191F2B",
      },
    },
  },
  plugins: [],
};
