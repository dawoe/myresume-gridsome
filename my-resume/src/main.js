// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.script.push({
    src: 'https://use.fontawesome.com/releases/v5.0.9/js/all.js'
  })

  head.bodyAttrs = { class: 'antialiased text-' }

  Vue.component('Layout', DefaultLayout)
}
