<template>
  <div>
    <Header title="Verifikasi" :left-action="true">
      <template #left-action>
        <NuxtLink to="/account">
          <svg
            width="37"
            height="40"
            viewBox="0 0 37 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.6979 12.4177C18.8043 12.5239 18.8888 12.6499 18.9464 12.7888C19.004 12.9276 19.0336 13.0764 19.0336 13.2267C19.0336 13.377 19.004 13.5258 18.9464 13.6646C18.8888 13.8034 18.8043 13.9295 18.6979 14.0356L12.649 20.0823L18.6979 26.129C18.8042 26.2352 18.8884 26.3614 18.9459 26.5002C19.0034 26.639 19.033 26.7877 19.033 26.938C19.033 27.0882 19.0034 27.237 18.9459 27.3758C18.8884 27.5146 18.8042 27.6407 18.6979 27.7469C18.5917 27.8532 18.4656 27.9375 18.3268 27.9949C18.188 28.0524 18.0392 28.082 17.889 28.082C17.7387 28.082 17.59 28.0524 17.4512 27.9949C17.3124 27.9375 17.1862 27.8532 17.08 27.7469L10.2244 20.8913C10.1179 20.7852 10.0335 20.6591 9.97592 20.5203C9.91832 20.3814 9.88867 20.2326 9.88867 20.0823C9.88867 19.932 9.91832 19.7832 9.97592 19.6444C10.0335 19.5056 10.1179 19.3795 10.2244 19.2734L17.08 12.4177C17.1861 12.3113 17.3122 12.2269 17.451 12.1693C17.5899 12.1117 17.7387 12.082 17.889 12.082C18.0393 12.082 18.1881 12.1117 18.3269 12.1693C18.4657 12.2269 18.5918 12.3113 18.6979 12.4177Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0342 20.083C11.0342 19.78 11.1546 19.4894 11.3688 19.2751C11.5831 19.0608 11.8737 18.9404 12.1768 18.9404L27.0307 18.9404C27.3337 18.9404 27.6244 19.0608 27.8386 19.2751C28.0529 19.4894 28.1733 19.78 28.1733 20.083C28.1733 20.3861 28.0529 20.6767 27.8386 20.891C27.6244 21.1053 27.3337 21.2256 27.0307 21.2256H12.1768C11.8737 21.2256 11.5831 21.1053 11.3688 20.891C11.1546 20.6767 11.0342 20.3861 11.0342 20.083Z"
              fill="white"
            />
          </svg>
        </NuxtLink>
      </template>
    </Header>
    <div class="with-header">
      <div>
        <div class="px-5 py-10">
          <form
            action="javascript:void(0)"
            method="POST"
            @submit="verification()"
          >
            <div class="text-center">
              <p class="text-xs text-grey-2 max-w-[269px] mx-auto font-medium">
                Kami telah mengirimkan kode verifikasi melalui whatsapp ke nomor
                berikut :
              </p>
              <h4 class="text-secondary text-xl mt-4 font-[Montserrat]">
                {{ phoneOld }}
              </h4>
              <div class="mt-7">
                <p class="text-xs font-medium text-grey-2">
                  Masukkan kode verifikasi tersebut disini
                </p>
                <div
                  class="flex flex-row items-center justify-center gap-5 mt-3"
                >
                  <input
                    type="tel"
                    class="w-full max-w-[53px] max-h-[53px] p-4 text-3xl flex items-center justify-center text-black bg-gray-100 rounded focus:outline-none"
                    :class="{ 'border border-danger': errorsField?.code }"
                    @keypress="$onlyNumber($event)"
                    @keyup="
                      insertCode($event.target)
                      handlingKeyup('code')
                    "
                    v-model="code.input1"
                    :disabled="isLoading"
                  />
                  <input
                    type="tel"
                    class="w-full max-w-[53px] max-h-[53px] p-4 text-3xl flex items-center justify-center text-black bg-gray-100 rounded focus:outline-none"
                    :class="{ 'border border-danger': errorsField?.code }"
                    @keypress="$onlyNumber($event)"
                    @keyup="
                      insertCode($event.target)
                      handlingKeyup('code')
                    "
                    v-model="code.input2"
                    :disabled="isLoading"
                  />
                  <input
                    type="tel"
                    class="w-full max-w-[53px] max-h-[53px] p-4 text-3xl flex items-center justify-center text-black bg-gray-100 rounded focus:outline-none"
                    :class="{ 'border border-danger': errorsField?.code }"
                    @keypress="$onlyNumber($event)"
                    @keyup="
                      insertCode($event.target)
                      handlingKeyup('code')
                    "
                    v-model="code.input3"
                    :disabled="isLoading"
                  />
                  <input
                    type="tel"
                    class="w-full max-w-[53px] max-h-[53px] p-4 text-3xl flex items-center justify-center text-black bg-gray-100 rounded focus:outline-none"
                    :class="{ 'border border-danger': errorsField?.code }"
                    @keypress="$onlyNumber($event)"
                    @keyup="
                      insertCode($event.target)
                      handlingKeyup('code')
                    "
                    v-model="code.input4"
                    :disabled="isLoading"
                  />
                </div>
                <span
                  class="text-danger text-xs font-medium mt-3 block"
                  v-if="errorsField?.code"
                  >{{ errorsField?.code[0] }}</span
                >
                <p
                  v-if="nextTimeRequestCode > 0"
                  class="text-xs text-grey-2 max-w-[269px] mx-auto font-medium mt-8"
                >
                  Mohon tunggu maksimal
                  <span class="font-bold text-secondary">{{
                    nextTimeRequestCode || 0
                  }}</span>
                  detik untuk mendapatkan kode
                </p>
                <div v-else class="mt-8">
                  <p
                    class="text-xs text-grey-2 max-w-[269px] mx-auto font-medium"
                  >
                    Belum menerima kode verifikasi?
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="text-xs text-secondary underline max-w-[269px] mx-auto font-medium mt-3 block"
                    @click="resendCode"
                    >Ulangi Kirim Kode</a
                  >
                </div>
              </div>
            </div>
            <div class="mt-48">
              <button
                type="submit"
                class="btn btn--block btn--rounded btn--primary"
                :class="{ 'btn--progress': isLoading }"
                :disabled="isLoading"
              >
                Konfirmasi
              </button>
              <div
                class="flex flex-col items-center justify-center mt-12 text-center"
              >
                <p class="text-xs text-grey-2">Menemukan masalah?</p>
                <NuxtLink
                  class="flex items-center mx-auto mt-2 text-xs underline text-secondary"
                  to="/"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_76_2336)">
                      <path
                        d="M7 0.875C3.61758 0.875 0.875 3.61758 0.875 7C0.875 10.3824 3.61758 13.125 7 13.125C10.3824 13.125 13.125 10.3824 13.125 7C13.125 3.61758 10.3824 0.875 7 0.875ZM7 12.0859C4.1918 12.0859 1.91406 9.8082 1.91406 7C1.91406 4.1918 4.1918 1.91406 7 1.91406C9.8082 1.91406 12.0859 4.1918 12.0859 7C12.0859 9.8082 9.8082 12.0859 7 12.0859Z"
                        fill="#F17E60"
                      />
                      <path
                        d="M8.52578 4.32988C8.11562 3.97031 7.57422 3.77344 7 3.77344C6.42578 3.77344 5.88437 3.97168 5.47422 4.32988C5.04766 4.70313 4.8125 5.20488 4.8125 5.74219V5.84609C4.8125 5.90625 4.86172 5.95547 4.92188 5.95547H5.57812C5.63828 5.95547 5.6875 5.90625 5.6875 5.84609V5.74219C5.6875 5.13926 6.27676 4.64844 7 4.64844C7.72324 4.64844 8.3125 5.13926 8.3125 5.74219C8.3125 6.16738 8.01172 6.55703 7.54551 6.73613C7.25566 6.84688 7.00957 7.04102 6.8332 7.29531C6.6541 7.55508 6.56113 7.8668 6.56113 8.18262V8.47656C6.56113 8.53672 6.61035 8.58594 6.67051 8.58594H7.32676C7.38691 8.58594 7.43613 8.53672 7.43613 8.47656V8.16621C7.43684 8.03349 7.47753 7.90405 7.55288 7.7948C7.62824 7.68554 7.73478 7.60152 7.85859 7.55371C8.66523 7.24336 9.18613 6.53242 9.18613 5.74219C9.1875 5.20488 8.95234 4.70313 8.52578 4.32988ZM6.45312 10.0078C6.45312 10.1529 6.51074 10.292 6.6133 10.3945C6.71586 10.4971 6.85496 10.5547 7 10.5547C7.14504 10.5547 7.28414 10.4971 7.3867 10.3945C7.48926 10.292 7.54688 10.1529 7.54688 10.0078C7.54688 9.86277 7.48926 9.72367 7.3867 9.62111C7.28414 9.51855 7.14504 9.46094 7 9.46094C6.85496 9.46094 6.71586 9.51855 6.6133 9.62111C6.51074 9.72367 6.45312 9.86277 6.45312 10.0078Z"
                        fill="#F17E60"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_76_2336">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="ml-2">Hubungi Bantuan</span>
                </NuxtLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      validationErrors: null,
      code: {
        input1: null,
        input2: null,
        input3: null,
        input4: null,
      },
      isLoading: false,
      axiosCancelToken: null,
    }
  },
  computed: {
    phoneOld() {
      return this.$store.state.account.change.phone.old.value
    },
    nextTimeRequestCode() {
      return this.$store.state.account.change.phone.old.nextTimeRequestCode
    },
    errorsField() {
      return this.validationErrors
    },
  },
  mounted() {
    this.$store.commit('app/setLoader', true)
    this.checkUser()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
    this.$store.commit('app/setLoader', false)
  },
  methods: {
    countTimeRequestCode() {
      if (this.nextTimeRequestCode < 1) {
        return false
      }
      setTimeout(() => {
        let time = this.nextTimeRequestCode - 1
        this.$store.commit('account/updateTimeRequestCode', {
          type: 'phone',
          stage: 'old',
          time,
        })
        this.countTimeRequestCode()
      }, 1000)
    },
    insertCode(el) {
      document.addEventListener('keyup', function (e) {
        if (e.keyCode != 13) {
        }

        if (el.value.length > 1) {
          el.value = el.value[el.value.length - 1]
        }
      })

      try {
        if (el.value == null || el.value == '') {
          if (el.previousElementSibling != null) {
            this.focusOnInput(el.previousElementSibling)
          }
        } else {
          if (el.nextElementSibling === null) {
            this.verification()
          } else {
            this.focusOnInput(el.nextElementSibling)
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    focusOnInput(el) {
      el.focus()
      let val = el.value
      el.value = ''
      setTimeout(() => {
        el.value = val
      })
    },
    handlingKeyup(pressedName) {
      // remove error
      if (this.validationErrors && this.validationErrors[pressedName]) {
        this.validationErrors[pressedName] = null
      }
    },
    checkUser() {
      let token = this.$store.state.authentication.token
      let callback = (response) => {
        this.$store.commit('account/setChange', {
          type: 'phone',
          stage: 'old',
          value: response.phone,
        })
        this.resendCode()
      }

      this.$store.dispatch('authentication/user', { token, callback })
    },
    async verification() {
      try {
        this.isLoading = true

        let code =
          this.code.input1.toString() +
          this.code.input2.toString() +
          this.code.input3.toString() +
          this.code.input4.toString()
        var response = await this.$axios.$post(
          '/api/v1/profile/otp',
          {
            phone: this.phoneOld,
            code: code,
          },
          {
            CancelToken: this.axiosCancelToken,
          }
        )

        this.isLoading = false
        if (response.success) {
          this.$store.commit('account/setVerified', {
            type: 'phone',
            stage: 'old',
            verified: true,
          })

          this.$router.push('/account/change/phone/new')
        }
      } catch (error) {
        this.isLoading = false
        if (!this.$axios.isCancel(error)) {
          const code = parseInt(error.response && error.response.status)
          const statusText = error.response && error.response.statusText
          const data = error.response && error.response.data

          if (code === 422) {
            if (data.errors) this.validationErrors = data.errors
          }
        }
      }
    },
    async resendCode() {
      try {
        this.isLoading = true
        this.$store.commit('app/setLoader', true)

        var response = await this.$axios.$post(
          '/api/v1/profile/validate',
          {
            phone: this.phoneOld,
          },
          {
            CancelToken: this.axiosCancelToken,
          }
        )

        this.isLoading = false
        this.$store.commit('app/setLoader', false)
        if (response.success) {
          this.$store.commit('account/prepareVerification', {
            type: 'phone',
            stage: 'old',
            value: this.phoneOld,
          })
          this.countTimeRequestCode()
        }
      } catch (error) {
        this.isLoading = false
        this.$store.commit('app/setLoader', false)
        if (!this.$axios.isCancel(error)) {
        }
      }
    },
  },
}
</script>
