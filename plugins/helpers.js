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
    (event, image = '/assets/images/wastes/no-image.svg') => {
      event.target.src = image
      event.onerror = ''
      console.log(event)
    }
  )
  inject('changeSeparator', (value, from = '.', to = ',') => {
    if (value) {
      return value.toString().replaceAll(from, to)
    }
    return value
  })
  inject('formattingThousand', (value) => {
    if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
    return value
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
  inject('orderStatus', (value) => {
    let status = ''
    if (value == 'pending') {
      status = 'Pending'
    } else if (value == 'active') {
      status = 'Active'
    } else if (value == 'inactive') {
      status = 'Inactive'
    } else if (value == 'cancel') {
      status = 'Canceled'
    }

    return status
  })
  inject('orderStatusClass', (value) => {
    let status = ''
    if (value == 'pending') {
      status = 'bg-warning text-warning'
    } else if (value == 'active') {
      status = 'bg-success text-success'
    } else if (value == 'inactive') {
      status = 'bg-grey-3 text-grey-3'
    } else if (value == 'cancel') {
      status = 'bg-danger text-danger'
    }

    return status
  })
  inject('paymentStatus', (value) => {
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
  inject('paymentStatusClass', (value) => {
    let status = ''
    if (value == 'not_yet') {
      status = 'text-warning'
    } else if (value == 'paid') {
      status = 'text-success'
    } else if (value == 'failed') {
      status = 'text-warning'
    }

    return status
  })
  inject('collectStatus', (value) => {
    let status = ''
    if (value == 'scheduled') {
      status = 'Waiting'
    } else if (value == 'pickup') {
      status = 'Pickup'
    } else if (value == 'drop') {
      status = 'Dropping'
    } else if (value == 'completed') {
      status = 'Complete'
    } else if (value == 'canceled' || value == 'cancel') {
      status = 'Canceled'
    }

    return status
  })
  inject('collectStatusClass', (value) => {
    let status = ''
    if (value == 'scheduled') {
      status = 'bg-grey-3 text-grey-3'
    } else if (value == 'pickup') {
      status = 'bg-info text-info'
    } else if (value == 'drop') {
      status = 'bg-info text-info'
    } else if (value == 'completed') {
      status = 'bg-success text-success'
    } else if (value == 'canceled' || value == 'cancel') {
      status = 'bg-danger text-danger'
    }

    return status
  })
}
