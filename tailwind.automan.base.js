const plugin = require("tailwindcss/plugin");

const extColors = {
};

const automanBasePlugin = plugin(({ addComponents, matchUtilities, theme }) => {
  addComponents({
    '.command-style-indicator-base': {
      '-webkit-clip-path': 'polygon(0 0, calc(100% - 1rem) 0%, 100% 50%, calc(100% - 1rem) 100%, 0 100%)',
      'clip-path': 'polygon(0 0, calc(100% - 1rem) 0%, 100% 50%, calc(100% - 1rem) 100%, 0 100%)'
    },
    '.command-style-indicator-left': {
      '@apply content-[""] absolute left-[0.5px] -translate-x-full z-50 w-4 h-full block': {},
      '-webkit-clip-path': 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%, 100% 50%)',
      'clip-path': 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%, 100% 50%)'
    },

    '.w-128': {
      'width': '32rem'
    },
    '.w-160': {
      'width': '40rem'
    },
    '.w-192': {
      'width': '48rem'
    },
    '.max-w-half': {
      'max-width': '50%'
    },

    // list-item-indicator
    '.list-item-indicator': {
      '@apply relative pl-2': {},
      '@apply before:absolute before:left-0 before:content-[""] before:border-l-[1px] before:h-full before:-translate-y-1/2 before:border-slate-300 before:grow': {},
      '@apply after:absolute after:left-0 after:content-[""] after:border-l-[1px] after:h-full after:translate-y-1/2 after:border-slate-300 after:grow': {},
      '@apply before:absolute before:w-2 before:border-b-[1px]': {},
      '@apply after:absolute after:w-2 after:border-t-[1px]': {},
    },
    '.list-item-indicator:nth-of-type(1)': {
      '@apply before:hidden': {}
    },
    '.list-item-indicator:nth-last-of-type(1)': {
      '@apply after:hidden': {}
    },

    // divider
    '.divider-horizontal': {
      '@apply w-full h-[1px] bg-zinc-500': {}
    },
    '.divider-vertical': {
      '@apply w-[1px] h-full bg-zinc-500': {}
    },

    // table
    '.table th, .table td': {
      '@apply py-1 px-2': {}
    },
    '.table-center th, .table-center td': {
      '@apply text-center': {}
    },
    '.table-bordered': {
      '@apply border-[1px]': {}
    },
    '.table-bordered tr': {
      '@apply border-b-[1px]': {}
    },
    '.table-bordered th, .table-bordered td': {
      '@apply border-r-[1px]': {}
    },
    '.table-bordered th:nth-last-of-type(1), .table-bordered td:nth-last-of-type(1)': {
      '@apply border-r-0': {}
    },

    // btn
    '.btn': {
      '@apply border-0 hover:border-0 focus:outline-0 transition-all h-10 flex items-center justify-center p-2 select-none whitespace-nowrap uppercase': {}
    },
    '.btn:disabled': {
      '@apply bg-zinc-900 hover:bg-zinc-900': {}
    },
    '.btn-sm': {
      '@apply h-8': {}
    },
    '.btn-square': {
      '@apply p-0 w-10 rounded-none': {}
    },
    '.btn-square.btn-sm': {
      '@apply w-8': {}
    },
    '.btn-ghost': {
      '@apply bg-transparent hover:bg-zinc-700 active:bg-zinc-600': {}
    },
    '.btn-ghost:disabled': {
      '@apply bg-transparent hover:bg-transparent': {}
    },

    // input
    'input.input': {
      '@apply py-1 px-2 h-8': {}
    },

    // labeled input
    'label.input': {
      '@apply h-8 flex items-center': {}
    },
    'label.input input': {
      '@apply py-1 px-2': {}
    },

    // select
    'select.select': {
      '@apply py-1 px-2 h-8': {}
    },
    // labeled select
    'label.select': {
      '@apply flex items-center': {}
    },
    'label.select select': {
      '@apply py-1 px-2 h-8': {}
    },
    'label .adornment': {
      '@apply flex items-center h-8': {}
    },

    // breadcrumbs
    '.breadcrumbs ul': {
      '@apply flex flex-wrap items-center gap-2': {}
    },
    '.breadcrumbs ul li': {
      '@apply before:content-["/"] before:mr-2 before:text-zinc-500': {}
    },
    '.breadcrumbs ul li:nth-of-type(1)': {
      '@apply before:content-none': {}
    },

    // checkbox
    '.checkbox': {
      '@apply w-6 h-6 transition-all duration-75 flex items-center justify-center': {},
      '-webkit-appearance': 'none'
    },
    '.checkbox:checked': {
      '@apply before:content-[""] before:block before:w-2 before:h-2 before:bg-white before:rounded-full': {}
    },
    '.checkbox-zinc': {
      '@apply bg-zinc-600': {}
    },
    '.checkbox-zinc:checked': {
      '@apply bg-blue-500 before:bg-blue-100': {}
    },

    // modal
    '.modal': {
      '@apply border-[1px] border-zinc-700 min-w-[30%] max-w-[60%] bg-transparent transform scale-90 transition-transform duration-200 ease-in-out': {},
      '&::backdrop': {
        '@apply transition-opacity opacity-0 duration-200 ease-in-out': {},
        'background-color': '#0006',
      }
    },
    '.modal-box': {
      '@apply p-6 transition drop-shadow-xl overflow-x-hidden overflow-y-auto overscroll-contain': {},
    },
    '.modal .modal-action': {
      '@apply mt-8 flex justify-end': {}
    },
    '.modal-open': {
      '@apply scale-100': {},
      '&::backdrop': {
        '@apply opacity-100': {},
      }
    }

    // TODO: tooltip
  });
});

module.exports = {
  automanBasePlugin
}