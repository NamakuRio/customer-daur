export const state = () => ({
  temporaryCreateData: {
    order_type: null,
    schedules: [],
    wastes: [],
    latitude: null,
    longitude: null,
    address: null,
    address_note: '',
    amount: 0,
    payment_method: 'gopay',
    image: null,
    wasteWeight: 0,
    onDemand_collect_dateTime: null,
    onDemand_collect_count: 1,
    scheduled_collect_dateTime: null,
    scheduled_collect_count: 1,
    subscription_collect_day: null,
    subscription_collect_time: null,
    subscription_collect_count: null,
  },
  address: {
    search: {
      selected: null,
    },
  },
  autoPay: false,
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
      address_note: null,
      amount: 0,
      payment_method: 'gopay',
      image: null,
      wasteWeight: 0,
      onDemand_collect_dateTime: null,
      onDemand_collect_count: 1,
      scheduled_collect_dateTime: null,
      scheduled_collect_count: 1,
      subscription_collect_day: null,
      subscription_collect_time: null,
      subscription_collect_count: null,
    }

    state.address = {
      search: {
        selected: null,
      },
    }

    if (process.client) {
      localStorage.removeItem('temporaryCreateData')
    }
  },
  saveToLocalStorageTemporaryCreateData(state) {
    if (process.client) {
      localStorage.setItem(
        'temporaryCreateData',
        JSON.stringify(state.temporaryCreateData)
      )
    }
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
  setAutoPay(state, value) {
    state.autoPay = value
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
