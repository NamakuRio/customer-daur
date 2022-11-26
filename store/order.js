export const state = () => ({
  temporaryCreateData: {
    order_type: null,
    schedules: [],
    wastes: [],
    latitude: null,
    longitude: null,
    address: null,
    amount: 0,
    payment_method: 'gopay',
    image: null,
    wasteWeight: 0,
  },
  address: {
    search: {
      selected: null,
    },
  },
})

export const getters = {
  getTemporaryCreateData(state) {
    return state.temporaryCreateData
  },
  getSelectedSearchAddress(state) {
    return state.address.search.selected
  },
}

export const mutations = {
  clearTemporaryCreateData(state) {
    state.temporaryCreateData = {
      order_type: null,
      schedules: [],
      wastes: [],
      latitude: null,
      longitude: null,
      address: null,
      amount: 0,
      payment_method: 'gopay',
      image: null,
      wasteWeight: 0,
    }

    state.address = {
      search: {
        selected: null,
      },
    }
  },
  saveToLocalStorageTemporaryCreateData(state) {
    localStorage.setItem(
      'temporaryCreateData',
      JSON.stringify(state.temporaryCreateData)
    )
  },
  updateAllTemporaryCreateData(state, data) {
    state.temporaryCreateData = data
  },
  updateTemporaryCreateData(state, data) {
    state.temporaryCreateData[data.key] = data.value
  },
  addWasteTemporaryCreateData(state, data) {
    state.temporaryCreateData.wastes.push(data)
  },
  removeWasteTemporaryCreateData(state, id) {
    state.temporaryCreateData.wastes = state.temporaryCreateData.wastes.filter(
      (item) => item.id !== id
    )
  },
  setSelectedSearchAddress(state, data) {
    state.address.search.selected = data
  },
  clearSelectedSearchAddress(state) {
    state.address.search.selected = null
  },
}

export const actions = {
  loadTemporaryCreateData({ commit, state }) {
    if (process.client) {
      let temporaryCreateData = JSON.parse(
        localStorage.getItem('temporaryCreateData')
      )
      if (temporaryCreateData) {
        commit('updateAllTemporaryCreateData', temporaryCreateData)
      }
    }

    return state.temporaryCreateData
  },
}
