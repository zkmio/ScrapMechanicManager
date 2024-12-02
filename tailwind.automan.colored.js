const plugin = require("tailwindcss/plugin");

const automanColoredPlugin = plugin(({ addComponents, matchUtilities, theme }) => {
  addComponents({
    '.table-bordered.zinc-component': {
      '@apply border-zinc-500': {}
    },
    '.table-bordered.zinc-component *': {
      '@apply border-zinc-500': {}
    },
    'label.zinc-component, button.zinc-component, input.zinc-component, select.zinc-component': {
      '@apply border-none outline outline-1 outline-zinc-600 bg-zinc-600': {},
      '@apply hover:bg-zinc-500': {},
      '@apply focus:bg-zinc-500 focus:outline-zinc-400': {},
    },
    '.zinc-component:disabled': {
      '@apply bg-zinc-900 hover:bg-zinc-900 active:bg-zinc-900': {}
    },
    'button.zinc-component': {
      '@apply outline-0 active:bg-zinc-400': {},
    },
    // labeled
    'label.zinc-component:has(> *:disabled)': {
      '@apply bg-zinc-900 hover:bg-zinc-900 active:bg-zinc-900': {}
    },
    'label.zinc-component input': {
      '@apply bg-transparent border-none outline-0': {}
    },
    'label.zinc-component select': {
      '@apply bg-zinc-600 border-none outline-0': {}
    },
    'label.zinc-component:hover select': {
      '@apply bg-zinc-500': {}
    },
    'label.zinc-component:focus-within': {
      '@apply bg-zinc-500 outline-zinc-400': {},
    },
    // FIXME: animation not countinued
    'label.zinc-component:hover button:not(:disabled)': {
      '@apply bg-zinc-500': {},
    },
    'label.zinc-component:focus-within button:not(:disabled)': {
      '@apply bg-zinc-500 outline-zinc-400 hover:bg-zinc-400 active:bg-zinc-300': {},
    },
  });
});


module.exports = {
  automanColoredPlugin
}