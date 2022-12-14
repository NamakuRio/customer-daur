import Cookie from 'js-cookie'

export const state = () => ({
  token: null,
  user: null,
  prepareVerification: {
    source: 'login',
    phone: null,
    nextTimeRequestCode: 0,
  },
})

export const getters = {
  isLoggedIn(state) {
    return state.token ? true : false
  },
}

export const mutations = {
  prepareVerification(state, data) {
    state.prepareVerification.phone = data.phone || null
    state.prepareVerification.source = data.source || 'login'
    state.prepareVerification.nextTimeRequestCode = 60
  },
  updateTimeRequestCode(state, data) {
    state.prepareVerification.nextTimeRequestCode = data || 0
  },
  setToken(state, token) {
    state.token = token || null
  },
  setUser(state, user) {
    state.user = user || null
  },
  login(state, data) {
    if (process.browser) {
      /**
       * Set Token
       */
      let expires = 30
      Cookie.set('token', data.token, { expires })
      state.token = data.token || null
    }
  },
  logout(state) {
    state.user = null
    state.token = null
    if (process.browser) {
      Cookie.remove('token')
      localStorage.clear()
    }
  },
}

export const actions = {
  user({ commit }, { token, callback }) {
    this.$axios.setToken(token, 'Bearer')
    this.$axios
      .$get('/api/v1/profile')
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        this.$nuxt.context.error({
          status: 500,
          message: error?.response?.statusText
            ? error?.response?.statusText
            : error?.response?.data
            ? error?.response?.data
            : 'Server Error',
        })
      })
  },
}
