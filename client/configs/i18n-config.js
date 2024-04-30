import { i18n } from 'meteor/universe:i18n'

i18n.createReactiveTranslator = (namespace, locale) => {
  const translator = i18n.createTranslator(namespace, locale)
  return (...args) => {
    i18n._deps.depend()
    return translator(...args)
  }
}

i18n.createTranslator = (namespace, options) => {
  const finalOptions = typeof options === 'string' ? (options === '' ? {} : { _locale: options }) : options

  return (...args) => {
    let _namespace = namespace
    const finalArg = args.length - 1
    if (typeof args[finalArg] === 'object') {
      _namespace = args[finalArg]._namespace || _namespace
      args[finalArg] = { ...finalOptions, ...args[finalArg] }
    } else if (finalOptions) {
      args.push(finalOptions)
    }

    if (_namespace) {
      args.unshift(_namespace)
    }

    return i18n.getTranslation(...args)
  }
}
