export default function ({ store, $axios, app }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    const statusText = error.response && error.response.statusText
    const data = error.response && error.response.data

    if (code === 401) {
      store.commit('authentication/logout')
      window.location = '/auth/login'
    } else {
      if (code !== 422) {
        if (statusText) {
          store.commit('notification/showNotification', {
            type: 'error',
            message: statusText,
          })
        } else {
          if (data.message) {
            store.commit('notification/showNotification', {
              type: 'error',
              message: data.message,
            })
          } else {
            store.commit('notification/showNotification', {
              type: 'error',
              message: 'Server Error',
            })
          }
        }
      }
    }
  })
}
