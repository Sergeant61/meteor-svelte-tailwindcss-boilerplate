import { i18n } from 'meteor/universe:i18n'
import { Tracker } from 'meteor/tracker'
import { derived, writable } from 'svelte/store'
import './i18n-config'
import '/lib/i18n/en'
import '/lib/i18n/tr'
import { ReactiveVar } from 'meteor/reactive-var'

const getLang = function () {
  return (navigator.languages && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.userLanguage || 'en-US'
}

console.log(getLang())
i18n.setLocale(getLang())

function createLocale() {
  const { subscribe, set } = writable(i18n.getLocale())
  return {
    subscribe,
    set: (lang) => {
      i18n.setLocale(lang)
      localStorage.setItem('lang', lang)
      return set(lang)
    },
  }
}

const locale = createLocale()
const getTranslation = (key, ...args) => i18n.getTranslation(key, ...args)
const t = derived(locale, ($locale) => (key, args) => getTranslation(key, args))
const Translate = i18n.createReactiveTranslator()

Tracker.autorun(function () {
  const language = localStorage.getItem('lang')

  if (!language) {
    return
  }

  i18n.setLocale(language)
  document.documentElement.setAttribute('lang', language.slice(0, 2))
  locale.set(language)
})

export { locale, t, Translate }
