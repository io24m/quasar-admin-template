import Vue from 'vue'

import '@/styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import lang from 'quasar/lang/zh-hans.js'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, LoadingBar } from 'quasar'

const loadingBarDefault = {
  position: "bottom",
  color: "accent",
  size: "8px"
}

LoadingBar.setDefaults(loadingBarDefault)

Vue.use(Quasar, {
  config: {
    loadingBar: loadingBarDefault
  },
  plugins: {
    LoadingBar
  },
  lang: lang
})