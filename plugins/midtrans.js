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
    console.log(result)
    store.commit('notification/showNotification', {
      type: 'error',
      message: JSON.stringify(result),
    })
  })
  inject('midtransPaymentPending', (result) => {
    console.log(result)
    store.commit('notification/showNotification', {
      type: 'error',
      message: JSON.stringify(result),
    })
  })
  inject('midtransPaymentError', (result) => {
    console.log(result)
    store.commit('notification/showNotification', {
      type: 'error',
      message: JSON.stringify(result),
    })
  })
  inject('midtransPaymentClose', () => {
    store.commit('notification/showNotification', {
      type: 'error',
      message: 'Close',
    })
  })
}
