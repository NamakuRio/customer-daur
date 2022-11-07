<template>
  <div>
    <Header title="Ubah Nomor Telepon" :left-action="true">
      <template #left-action>
        <NuxtLink to="/account/change/phone">
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
      <div class="p-5">
        <div>
          <form
            action="javascript:void(0)"
            method="POST"
            @submit="validateByWhatsapp = true"
          >
            <div class="flex flex-col gap-5">
              <div>
                <label for="name" class="block text-xs text-grey-3"
                  >Masukkan Nomor Telepon Baru</label
                >
                <input
                  type="tel"
                  class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded phone-number focus:outline-none"
                  placeholder="Masukkan Nomor Handphone"
                  v-model="phone"
                  :disabled="isLoading"
                />
              </div>
            </div>
            <div class="mt-5">
              <button
                type="submit"
                class="btn btn--block btn--rounded btn--primary"
                :class="{ 'btn--progress': isLoading }"
                :disabled="isLoading || !isFilledAllField"
              >
                Selanjutnya
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Start Popup Validate By Whatsapp -->
    <transition name="slide-popup">
      <div
        class="fixed bottom-0 flex items-center justify-center w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="validateByWhatsapp"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="validateByWhatsapp = false"
        ></div>
        <div
          class="z-10 content-center w-full p-4 transition-all duration-1000 top-14 content-popup"
        >
          <div class="w-full overflow-auto bg-white rounded-lg">
            <!-- content -->
            <div>
              <div class="px-3 pb-8 text-center pt-7">
                <svg
                  width="79"
                  height="74"
                  viewBox="0 0 79 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <g clip-path="url(#clip0_35_1247)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M50.7938 41.9476C49.9246 41.513 45.6633 39.4188 44.87 39.1272C44.0767 38.8384 43.4992 38.6955 42.9187 39.5647C42.3412 40.428 40.6817 42.3822 40.1771 42.9597C39.6696 43.5401 39.165 43.6101 38.2987 43.1784C37.4325 42.7409 34.6383 41.828 31.3279 38.8763C28.7525 36.578 27.0112 33.7401 26.5067 32.8709C26.0021 32.0047 26.4513 31.5351 26.8858 31.1034C27.2767 30.7155 27.7521 30.0913 28.1867 29.5867C28.6212 29.0792 28.7642 28.7176 29.0529 28.1372C29.3446 27.5597 29.1987 27.0551 28.98 26.6205C28.7642 26.1859 27.0317 21.9188 26.3083 20.1834C25.6054 18.4947 24.8908 18.7251 24.36 18.6959C23.8525 18.6726 23.275 18.6667 22.6975 18.6667C22.12 18.6667 21.1808 18.8826 20.3875 19.7517C19.5912 20.618 17.3542 22.7151 17.3542 26.9822C17.3542 31.2463 20.4575 35.3676 20.8921 35.948C21.3267 36.5255 27.0025 45.2813 35.6971 49.0351C37.7679 49.9276 39.3808 50.4613 40.6379 50.858C42.7146 51.5201 44.6046 51.4267 46.0979 51.2022C47.7604 50.9542 51.2254 49.1051 51.9487 47.0809C52.6692 45.0567 52.6692 43.3213 52.4533 42.9597C52.2375 42.598 51.66 42.3822 50.7908 41.9476H50.7938ZM34.9796 63.5396H34.9679C29.8038 63.5406 24.7344 62.1524 20.2912 59.5205L19.2412 58.8963L8.32708 61.7605L11.2408 51.1205L10.5554 50.0297C7.66832 45.434 6.14044 40.1153 6.14833 34.688C6.15417 18.7922 19.0867 5.85966 34.9912 5.85966C42.6912 5.85966 49.9304 8.86382 55.3729 14.3122C58.0574 16.9855 60.185 20.1646 61.6329 23.6656C63.0807 27.1666 63.82 30.9199 63.8079 34.7084C63.8021 50.6042 50.8696 63.5396 34.9796 63.5396ZM59.5146 10.1734C56.301 6.9386 52.4773 4.37372 48.2653 2.62741C44.0532 0.881093 39.5364 -0.0119348 34.9767 7.37415e-05C15.8608 7.37415e-05 0.2975 15.5605 0.291667 34.6851C0.282809 40.7714 1.87943 46.7524 4.92042 52.0247L0 70.0001L18.3867 65.1759C23.473 67.9471 29.1728 69.3991 34.965 69.3992H34.9796C54.0954 69.3992 69.6587 53.8388 69.6646 34.7113C69.6787 30.1534 68.7889 25.6379 67.0467 21.426C65.3044 17.2141 62.7444 13.3895 59.5146 10.1734Z"
                      fill="#2AC769"
                    />
                  </g>
                  <circle
                    cx="63.5"
                    cy="58.5"
                    r="14"
                    fill="#F17E60"
                    stroke="white"
                    stroke-width="3"
                  />
                  <path
                    d="M68.1877 53.3361C68.4166 53.1181 68.7212 52.9976 69.0372 53C69.3533 53.0024 69.656 53.1275 69.8816 53.3489C70.1072 53.5702 70.238 53.8706 70.2463 54.1865C70.2547 54.5025 70.14 54.8093 69.9264 55.0423L63.4427 63.1511C63.3312 63.2711 63.1966 63.3675 63.047 63.4344C62.8974 63.5013 62.7359 63.5373 62.5721 63.5404C62.4082 63.5434 62.2455 63.5134 62.0935 63.4521C61.9415 63.3907 61.8035 63.2994 61.6877 63.1836L57.3879 58.8838C57.2682 58.7722 57.1721 58.6377 57.1055 58.4882C57.0389 58.3387 57.0031 58.1773 57.0002 58.0137C56.9973 57.85 57.0274 57.6875 57.0887 57.5357C57.15 57.384 57.2412 57.2461 57.357 57.1304C57.4727 57.0146 57.6105 56.9234 57.7623 56.8621C57.9141 56.8008 58.0766 56.7707 58.2403 56.7736C58.4039 56.7765 58.5653 56.8123 58.7148 56.8789C58.8643 56.9455 58.9988 57.0416 59.1104 57.1613L62.5132 60.5624L68.1568 53.3718C68.1669 53.3593 68.1778 53.3474 68.1893 53.3361H68.1877Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_35_1247">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h1
                  class="mt-4 text-xl font-semibold text-primary max-w-[269px] mx-auto"
                >
                  Verifikasi melalui Whatsapp
                </h1>
                <p class="mt-2 text-xs text-grey-2 max-w-[193px] mx-auto">
                  Pastikan Nomor Anda memiliki Whatsapp yang aktif
                </p>
              </div>
              <div
                class="flex items-center border-t border-black border-opacity-10"
              >
                <button
                  class="!py-4 font-bold btn btn--block text-primary"
                  @click="
                    change()
                    validateByWhatsapp = false
                  "
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Popup Validate By Whatsapp -->
  </div>
</template>
<script>
import Cleave from 'cleave.js'
require('cleave.js/dist/addons/cleave-phone.id')

export default {
  middleware: ['authenticated'],
  data() {
    return {
      validateByWhatsapp: false,
      phone: '',
      isLoading: false,
      axiosCancelToken: null,
    }
  },
  computed: {
    isFilledAllField() {
      return this.phone ? true : false
    },
  },
  mounted() {
    if (!this.$store.state.account.change.phone.old.verified) {
      this.$router.push('/account/change/phone')
      return
    }

    Array.from(document.getElementsByClassName('phone-number')).forEach(
      (el) => {
        var cleavePN = new Cleave(el, {
          phone: true,
          phoneRegionCode: 'id',
        })
      }
    )
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async change() {
      try {
        this.isLoading = true
        var response = await this.$axios.$post(
          '/api/v1/profile/update',
          {
            phone: this.phone,
          },
          {
            CancelToken: this.axiosCancelToken,
          }
        )

        this.isLoading = false
        if (response.success) {
          this.$store.commit('account/setChange', {
            type: 'phone',
            stage: 'new',
            value: this.phone,
          })
          this.$store.commit('account/prepareVerification', {
            type: 'phone',
            stage: 'new',
            value: this.phone,
          })

          this.$router.push('/account/change/phone/new/verification')
        }
      } catch (e) {
        this.isLoading = false
        if (!this.$axios.isCancel(e)) {
        }
      }
    },
  },
}
</script>
