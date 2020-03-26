// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')

const postcssPlugins = [
	tailwind(),
]

module.exports = {
  siteName: 'Dave Woestenborghs - Resume',
  plugins: [],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
},
}
