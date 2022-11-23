<template>
  <div>
    <Loader v-if="!loadedData" />
    <div class="px-9 py-11" v-else-if="loadedData">
      <div class="w-[142px] mx-auto">
        <svg
          width="142"
          height="46"
          viewBox="0 0 142 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="142" height="46" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_820_1603"
                transform="translate(0 -0.00620403) scale(0.00115075 0.00355231)"
              />
            </pattern>
            <image
              id="image0_820_1603"
              width="869"
              height="285"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
      <div class="block mt-12 text-center">
        <h4 class="text-base font-extrabold text-primary font-[Montserrat]">
          LENGKAPI DATA DIRI
        </h4>
        <p class="text-xs text-grey-2 max-w-[269px] mx-auto mt-3">
          Lengkapi informasi tambahan berikut ini
        </p>
      </div>
      <div class="mt-11">
        <form
          action="javascript:void(0)"
          method="POST"
          @submit="completionProfile"
        >
          <div class="flex flex-col gap-4">
            <div>
              <label for="email" class="block text-xs text-grey-3">Email</label>
              <input
                type="email"
                class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none"
                placeholder="Masukkan email aktif"
                v-model="email"
                :disabled="isLoading"
              />
            </div>
            <div>
              <label for="account_type" class="block text-xs text-grey-3"
                >Jenis Akun</label
              >
              <select
                name="account_type"
                class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none"
                v-model="account_type"
                :disabled="isLoading"
              >
                <option value="" disabled selected>Pilih jenis akun</option>
                <option value="b2c">Pengguna Individu</option>
                <option value="b2b">Pengguna Bisnis</option>
              </select>
            </div>
          </div>
          <div class="mt-8">
            <button
              type="submit"
              class="btn btn--block btn--rounded btn--primary"
              :class="{ 'btn--progress': isLoading }"
              :disabled="isLoading || isFilledAllField"
            >
              Selesai
            </button>
          </div>
        </form>
      </div>
      <div class="flex flex-col items-center justify-center text-center mt-14">
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
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      email: null,
      account_type: '',
      loadedData: false,
      isLoading: false,
      axiosCancelToken: null,
    }
  },
  computed: {
    isFilledAllField() {
      return this.email && this.account_type ? true : false
    },
  },
  mounted() {
    if (this.$store.state.authentication.user) {
      this.email = this.$store.state.authentication.user.email
      this.account_type =
        this.$store.state.authentication.user.account_type ?? ''

      if (this?.email && this?.account_type) {
        this.$router.push('/')
        return
      }
      this.loadedData = true
    }
    this.checkUser()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    checkUser() {
      let token = this.$store.state.authentication.token
      let callback = (response) => {
        this.$store.commit('authentication/setUser', response)
        this.email = this.$store.state.authentication.user.email
        this.account_type =
          this.$store.state.authentication.user.account_type ?? ''

        if (this?.email && this?.account_type) {
          this.$router.push('/')
          return
        }
        this.loadedData = true
      }

      this.$store.dispatch('authentication/user', { token, callback })
    },
    async completionProfile() {
      try {
        this.isLoading = true

        var response = await this.$axios.$post(
          '/api/v1/profile',
          {
            email: this.email,
            account_type: this.account_type,
          },
          {
            CancelToken: this.axiosCancelToken,
          }
        )

        this.isLoading = false
        if (response.success) {
          this.$router.push('/')
        }
      } catch (error) {
        this.isLoading = false
        if (!this.$axios.isCancel(error)) {
        }
      }
    },
  },
}
</script>
