
const { automanBasePlugin } = require("./tailwind.automan.base.js");
const { automanColoredPlugin } = require("./tailwind.automan.colored");

module.exports = {
  content: [
    "./packages/renderer/index.html",
    "./packages/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    automanBasePlugin,
    automanColoredPlugin,
  ],
}
