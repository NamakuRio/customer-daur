import Cookie from 'js-cookie'

export const state = () => ({
    token: null,
    prepareVerification: {
        phone: null,
        nextTimeRequestCode: 0,
    },
})

export const mutations = {
    prepareVerification(state, data) {
        state.prepareVerification.phone = data.phone || null
        state.prepareVerification.nextTimeRequestCode = 60
    },
    updateTimeRequestCode(state, data) {
        state.prepareVerification.nextTimeRequestCode = data || 0
    },
    setToken(state, token) {
        state.token = token || null
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
}

export const getters = {
    isLoggedIn(state) {
        return state.token ? true : false
    },
}
