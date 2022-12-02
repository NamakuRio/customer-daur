export default ({ app, store }, inject) => {
  inject('midtransOpenSnap', (token) => {
    if (window.snap) {
      let onSuccess = app.$midtransPaymentSuccess
      let onPending = app.$midtransPaymentPending
      let onError = app.$midtransPaymentError
      let onClose = app.$midtransPaymentClose

      window.snap.pay(token, {
        onSuccess,
        onPending,
        onError,
        onClose,
      })
    } else {
      store.commit('notification/showNotification', {
        type: 'error',
        message: 'Module tidak ditemukan',
      })
    }
  })
  inject('midtransPaymentSuccess', (result) => {
    window.location.reload()
  })
  inject('midtransPaymentPending', (result) => {
    window.location.reload()
  })
  inject('midtransPaymentError', (result) => {
    window.location.reload()
  })
  inject('midtransPaymentClose', () => {})
}
