export const state = () => ({
  change: {
    email: {
      old: {
        value: null,
        verified: false,
        nextTimeRequestCode: 0,
      },
      new: {
        value: null,
        verified: false,
        nextTimeRequestCode: 0,
      },
    },
    phone: {
      old: {
        value: null,
        verified: false,
        nextTimeRequestCode: 0,
      },
      new: {
        value: null,
        verified: false,
        nextTimeRequestCode: 0,
      },
    },
  },
})

export const mutations = {
  setChange(state, data) {
    let type = data.type
    let stage = data.stage
    state.change[type][stage].value = data.value || null
  },
  prepareVerification(state, data) {
    let type = data.type
    let stage = data.stage
    state.change[type][stage].value = data.value || null
    state.change[type][stage].nextTimeRequestCode = 60
  },
  updateTimeRequestCode(state, data) {
    let type = data.type
    let stage = data.stage
    state.change[type][stage].nextTimeRequestCode = data.time || 0
  },
  setVerified(state, data) {
    let type = data.type
    let stage = data.stage
    state.change[type][stage].verified = data.verified || false
  },
  setDefault(state, data) {
    let type = data.type

    state.change[type].old.value = null
    state.change[type].old.verified = false
    state.change[type].old.nextTimeRequestCode = 0

    state.change[type].new.value = null
    state.change[type].new.verified = false
    state.change[type].new.nextTimeRequestCode = 0
  },
}
