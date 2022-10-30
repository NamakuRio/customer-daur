export const state = () => ({
  active: false,
  autoHide: true,
  notifications: [],
})

export const getters = {
  getNotifications(state) {
    return state.notifications || []
  },
}

export const mutations = {
  showNotification(state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
    })
  },
  hideNotification(state, data) {
    state.notifications = state.notifications.filter((notification) => {
      return notification.id != data.id
    })
  },
}

export const actions = {
  async requestPermission({ dispatch }, token) {
    try {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        dispatch('getTokenDeviceNotification', token)
      }
    } catch (e) {
      console.error(e)
    }
  },
  async getTokenDeviceNotification({ commit, dispatch }, token) {
    let tokenNotification
    try {
      tokenNotification = await this.$fire.messaging.getToken()

      if (tokenNotification) {
        let data = {
          token,
          tokenNotification,
        }

        dispatch('sendTokenToServer', data)
      }
    } catch (e) {
      console.error('error retreiving token. ', e)
    }
  },
  async sendTokenToServer({ dispatch }, data) {
    if (localStorage.getItem('tokenDeviceNotification') !== '1') {
      try {
        this.$axios.setToken(data.token, 'Bearer')

        let response = this.$axios.$post('/api/v1/push-notification/token', {
          token: data.tokenNotification,
        })

        if (response) {
          dispatch('setTokenSentToServer', true)
        }
      } catch (e) {
        console.error('error store token.', e)
      }
    }
  },
  setTokenSentToServer({}, value) {
    if (process.client) {
      window.localStorage.setItem('tokenDeviceNotification', value ? '1' : '0')
    }
  },
}
