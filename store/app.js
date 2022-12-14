export const state = () => ({
  isAppLoaded: false,
  background: 'bg-white',
  loader: false,
})

export const mutations = {
  changeBackground(state, value) {
    state.background = value
  },
  removeBackground(state) {
    state.background = 'bg-white'
  },
  setLoader(state, value) {
    state.loader = value
  },
  setIsAppLoaded(state, value) {
    state.isAppLoaded = value
  },
}
