export default ({ app, $moment }, inject) => {
  inject('onlyNumber', (event) => {
    var ASCIICode = event.which ? event.which : event.keyCode
    if (
      ASCIICode > 31 &&
      (ASCIICode < 48 || ASCIICode > 57) &&
      ASCIICode !== 44
    ) {
      event.preventDefault()
    }
    return true
  })
  inject('accountType', (value) => {
    let accountType = ''
    if (value == 'b2c') {
      accountType = 'Pengguna Individu'
    } else if (value == 'b2b') {
      accountType = 'Pengguna Bisnis'
    }

    return accountType
  })
  inject('dateDiffForHumans', (value) => {
    var date

    date = $moment(value).fromNow()

    return date
  })
  inject(
    'handleErrorImage',
    (event, image = '/assets/images/trashes/no-image.svg') => {
      event.target.src = image
      event.onerror = ''
      console.log(event)
    }
  )
  inject('formattingThousand', (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  })
  inject('b64ToBlob', (image, type) => {
    var byteString = atob(image.split(',')[1])
    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], { type })
  })
  inject('orderPaymentStatusText', (value) => {
    let status = ''
    if (value == 'not_yet') {
      status = 'Belum Lunas'
    } else if (value == 'paid') {
      status = 'Lunas'
    } else if (value == 'failed') {
      status = 'Belum Lunas'
    }

    return status
  })
}
