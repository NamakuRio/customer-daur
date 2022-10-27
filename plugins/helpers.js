export default ({ app }, inject) => {
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
}
