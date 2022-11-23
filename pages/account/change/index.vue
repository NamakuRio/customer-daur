<template>
  <div>
    <Header title="Edit Profil" :left-action="true">
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
      <Loader v-if="!loadedData" />
      <div class="p-5" v-else-if="loadedData">
        <div>
          <form
            action="javascript:void(0)"
            method="POST"
            @submit="changeProfile"
          >
            <div class="flex flex-col gap-5">
              <div>
                <label for="name" class="block text-xs text-grey-3">Nama</label>
                <input
                  type="text"
                  class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none"
                  placeholder="Nama"
                  v-model="changeUser.name"
                  :disabled="isLoading"
                />
              </div>
              <div>
                <label for="account_type" class="block text-xs text-grey-3"
                  >Jenis Akun</label
                >
                <select
                  name=""
                  class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none"
                  v-model="changeUser.account_type"
                  :disabled="isLoading"
                  @change="changeAccountType($event.target.value)"
                >
                  <option value="" disabled selected>Pilih jenis akun</option>
                  <option value="b2c">Pengguna Individual</option>
                  <option value="b2b">Pengguna Bisnis</option>
                </select>
              </div>
              <div>
                <label for="industy_type" class="block text-xs text-grey-3"
                  >Jenis Industri</label
                >
                <select
                  name=""
                  class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none"
                  v-model="changeUser.industry_type"
                  :disabled="isLoading"
                >
                  <option value="" disabled selected>
                    Pilih jenis industri
                  </option>
                  <option
                    v-for="item in industryTypes"
                    :key="item.id"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="mt-5">
              <button
                type="submit"
                class="btn btn--block btn--rounded btn--primary"
                :class="{ 'btn--progress': isLoading }"
                :disabled="isLoading || isFilledAllField"
              >
                Perbarui
              </button>
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
      changeUser: {
        name: null,
        account_type: '',
        industry_type: '',
      },
      industryTypeList: {
        individual: [
          {
            id: 1,
            name: 'Rumah Tangga',
          },
        ],
        bussiness: [
          {
            id: 2,
            name: 'Kios',
          },
          {
            id: 3,
            name: 'Ruko/Minimarket',
          },
          {
            id: 4,
            name: 'Restaurant',
          },
          {
            id: 5,
            name: 'Apartement/Perumahan',
          },
          {
            id: 6,
            name: 'Perkantoran',
          },
          {
            id: 7,
            name: 'Hotel',
          },
          {
            id: 8,
            name: 'Rumah Sakit',
          },
          {
            id: 9,
            name: 'Supermarket',
          },
          {
            id: 10,
            name: 'Sekolah',
          },
        ],
      },
      loadedData: false,
      isLoading: false,
      axiosCancelToken: null,
    }
  },
  computed: {
    isFilledAllField() {
      return !this.changeUser.name ||
        !this.changeUser.account_type ||
        !this.changeUser.industry_type
        ? true
        : false
    },
    industryTypes() {
      if (this.changeUser.account_type == 'b2c') {
        return this.industryTypeList.individual
      } else if (this.changeUser.account_type == 'b2b') {
        return this.industryTypeList.bussiness
      }
    },
  },
  mounted() {
    if (this.$store.state.authentication.user) {
      this.changeUser = {
        name: this.$store.state.authentication.user.name,
        account_type: this.$store.state.authentication.user.account_type ?? '',
        industry_type:
          this.$store.state.authentication.user.industry_type ?? '',
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
        this.changeUser = {
          name: response.name,
          account_type: response.account_type ?? '',
          industry_type: response.industry_type ?? '',
        }
        this.loadedData = true
      }

      this.$store.dispatch('authentication/user', { token, callback })
    },
    changeAccountType(value) {
      this.changeUser.industry_type = ''
    },
    async changeProfile() {
      try {
        this.isLoading = true

        let data = {
          name: this.changeUser.name,
          account_type: this.changeUser.account_type,
          industry_type: this.changeUser.industry_type,
        }

        var response = await this.$axios.$post('/api/v1/profile', data, {
          CancelToken: this.axiosCancelToken,
        })

        this.isLoading = false
        if (response.success) {
          this.$router.push('/account')
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
