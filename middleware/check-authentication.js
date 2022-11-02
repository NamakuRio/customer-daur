import Cookie from 'js-cookie'
import { getTokenFromCookie } from '~/utils/token'

export default function ({ store, req }) {
  const token = process.server ? getTokenFromCookie(req) : Cookie.get('token')
  if (token) {
    let callback = (response) => {
      store.commit('authentication/setUser', response)
      store.commit('app/setIsAppLoaded', true)
    }

    store.commit('authentication/setToken', token)
    store.dispatch('authentication/user', {
      token,
      callback,
    })
    if (process.client) {
      store.dispatch('notification/requestPermission', token)
    }
  } else {
    store.commit('app/setIsAppLoaded', true)
  }
}
