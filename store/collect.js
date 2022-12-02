export const state = () => ({})

export const getters = {}

export const mutations = {
  setPopupCompleted(state, id) {
    let name = 'daurid-customer-collect-popup-completed'

    let data = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : []

    if (!data.find((item) => item == id)) {
      data.push(id)
    }
    localStorage.setItem(name, JSON.stringify(data))
  },
  removePopupCompleted(state, id) {
    let name = 'daurid-customer-collect-popup-completed'

    let data = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : []

    data.filter((item) => item !== id)

    localStorage.setItem(name, JSON.stringify(data))
  },
}

export const actions = {
  getPopupCompleted({ commit }, id) {
    let name = 'daurid-customer-collect-popup-completed'

    let data = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : []

    if (data.find((item) => item === id)) {
      return true
    }

    return false
  },
}
