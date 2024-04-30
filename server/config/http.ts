import { Headers, fetch } from 'meteor/fetch'
import { Meteor } from 'meteor/meteor'

type HTTPOptions = {
  body?: any
  headers?: Record<string, string>
  queryParams?: Record<string, string>
}

const HTTP = {
  async call(method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', url: string, options: HTTPOptions = {}) {
    const init: any = {
      method: method,
      headers: new Headers(options.headers),
    }

    if (!['GET', 'HEAD'].includes(method)) {
      init.body = options.body
    }

    url = HTTP._setQueryParam(url, options.queryParams)

    console.log(`API LOG ${method} ${url}`)
    const response = await fetch(url, init)
    const body = await response.text()

    if (!response.ok) {
      throw new Meteor.Error('error', body)
    }
    const headers: Record<string, string> = {}
    response.headers.forEach((value, key) => {
      headers[key] = value
    })

    let data = null
    try {
      data = JSON.parse(body)
    } catch (error) {}

    const result = {
      request: {
        url,
        method,
        body: options.body,
        headers: options.headers,
      },
      response: {
        body,
        data,
        method,
        headers,
        ok: response.ok,
        url: response.url,
        status: response.status,
        statusText: response.statusText,
      },
    }

    return result
  },

  get(url: string, options: HTTPOptions) {
    return this.call('GET', url, options)
  },

  post(url: string, options: HTTPOptions) {
    return this.call('POST', url, options)
  },

  put(url: string, options: HTTPOptions) {
    return this.call('PUT', url, options)
  },

  patch(url: string, options: HTTPOptions) {
    return this.call('PATCH', url, options)
  },

  delete(url: string, options: HTTPOptions) {
    return this.call('DELETE', url, options)
  },

  _setQueryParam(url: string, queryParams?: Record<string, string>) {
    if (queryParams) {
      const splits = url.split('?')

      const rootUrl = splits[0]
      const queryString = splits[1] || ''

      const searchParams = new URLSearchParams(queryString)

      Object.keys(queryParams).forEach((key) => {
        searchParams.set(key, queryParams[key])
      })

      url = `${rootUrl}?${searchParams.toString()}`
    }

    return url
  },
}

export default HTTP
