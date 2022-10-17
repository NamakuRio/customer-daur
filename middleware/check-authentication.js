import Cookie from 'js-cookie'
import { getTokenFromCookie } from '~/utils/token'

export default function ({ store, req }) {
  const token = process.server ? getTokenFromCookie(req) : Cookie.get('token')
  if (token) {
    store.commit('authentication/setToken', token)
  }
}
