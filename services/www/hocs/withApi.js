import React from 'react'
import axios from 'axios'
import getDisplayName from '../utils/getDisplayName'

const createApi = (ctx = {}) => {
  function getBaseURL(req = ctx.req) {
    if (typeof window !== 'undefined') return window.location.origin
    if (process.env.NODE_ENV !== 'production') return 'http://localhost:9000'
    if (!req?.headers?.host) return undefined
    return `https://${req?.headers?.host}`
  }
  let api
  if (typeof window !== 'undefined') {
    if (!window.api) {
      window.api = axios.create({
        baseURL: getBaseURL(),
      })
    }
    api = window.api
  } else {
    api = axios.create({
      baseURL: getBaseURL(ctx.req),
    })
  }
  return api
}

const withApi = (Component) => {
  const WithApi = (props) => <Component {...props} api={createApi()} />
  WithApi.displayName = `withApi(${getDisplayName(Component)})`
  WithApi.getInitialProps = async (ctx) => {
    ctx.api = createApi(ctx)
    ctx.api.interceptors.response.use(({ data }) => data)
    if (Component.getInitialProps) return Component.getInitialProps(ctx)
    return {}
  }
  return WithApi
}

export default withApi
