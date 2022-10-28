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
