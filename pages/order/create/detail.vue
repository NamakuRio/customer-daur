<template>
  <div>
    <Header title="Order Pengangkutan" :left-action="true">
      <template #left-action>
        <NuxtLink to="/order/create/address">
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
        <div class="bg-white">
          <div class="p-5">
            <p class="text-sm font-extrabold text-black">Alamat Penjemputan</p>
            <NuxtLink
              to="/order/create/address?ref=/order/create/detail"
              class="flex items-start justify-between mt-3"
            >
              <div class="flex items-start justify-start">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[12px] min-h-[16px] max-w-[12px] max-h-[16px]"
                >
                  <g clip-path="url(#clip0_1847_6615)">
                    <path
                      d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 8C4.89687 8 4 7.10312 4 6C4 4.89687 4.89687 4 6 4C7.10313 4 8 4.89687 8 6C8 7.10312 7.10313 8 6 8Z"
                      fill="#F17E60"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1847_6615">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p class="ml-3 text-sm text-grey-2">
                  {{ temporaryCreateData?.address || '-' }}
                </p>
              </div>
              <div class="ml-3 cursor-pointer">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[19px] min-h-[19px] max-w-[19px] max-h-[19px]"
                >
                  <path
                    d="M6.33337 3.1665L12.6667 9.49984L6.33337 15.8332"
                    stroke="#F17E60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </NuxtLink>
            <div class="mt-4">
              <input
                type="text"
                class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                placeholder="Alamat detail"
              />
            </div>
          </div>
          <div class="p-5 border-t border-black border-opacity-10">
            <p class="text-sm font-extrabold text-black">
              Pilihan Waktu Pengangkutan
            </p>
            <div class="flex flex-col gap-4 mt-4">
              <div class="flex items-center gap-x-3 gap-y-4">
                <div class="flex items-center w-full">
                  <input
                    id="radio-collect-pickup-time-ondemand"
                    type="radio"
                    name="radio-collect-pickup-time"
                    class="hidden custom-selected-radio-area"
                    @change="
                      $store.commit('order/updateTemporaryCreateData', {
                        key: 'order_type',
                        value: 'on-demand',
                      })
                    "
                    :checked="temporaryCreateData?.order_type == 'on-demand'"
                  />
                  <label
                    for="radio-collect-pickup-time-ondemand"
                    class="flex items-center justify-start w-full text-sm text-black text-opacity-75 cursor-pointer"
                  >
                    <span
                      class="inline-block w-4 h-4 border-2 rounded-full border-grey-1"
                    ></span>
                    <p class="ml-3">Sekarang</p>
                  </label>
                </div>
                <div class="flex items-center w-full">
                  <input
                    id="radio-collect-pickup-time-scheduled"
                    type="radio"
                    name="radio-collect-pickup-time"
                    class="hidden custom-selected-radio-area"
                    @change="
                      $store.commit('order/updateTemporaryCreateData', {
                        key: 'order_type',
                        value: 'scheduled',
                      })
                    "
                    :checked="
                      temporaryCreateData?.order_type == 'scheduled' ||
                      temporaryCreateData?.order_type == 'subscription'
                    "
                  />
                  <label
                    for="radio-collect-pickup-time-scheduled"
                    class="flex items-center justify-start w-full text-sm text-black text-opacity-75 cursor-pointer"
                  >
                    <span
                      class="inline-block w-4 h-4 border-2 rounded-full border-grey-1"
                    ></span>
                    <p class="ml-3">Atur Jadwal</p>
                  </label>
                </div>
              </div>
              <div
                class="flex items-center gap-x-3 gap-y-4"
                v-if="
                  temporaryCreateData?.order_type == 'scheduled' ||
                  temporaryCreateData?.order_type == 'subscription'
                "
              >
                <div class="flex items-center w-full">
                  <input
                    id="radio-collect-pickup-time-scheduled-onetime"
                    type="radio"
                    name="radio-collect-pickup-time-scheduled"
                    class="hidden custom-selected-radio"
                    @change="
                      $store.commit('order/updateTemporaryCreateData', {
                        key: 'order_type',
                        value: 'scheduled',
                      })
                    "
                    :checked="temporaryCreateData?.order_type == 'scheduled'"
                  />
                  <label
                    for="radio-collect-pickup-time-scheduled-onetime"
                    class="flex items-center justify-start w-full text-sm text-black text-opacity-75 cursor-pointer"
                  >
                    <span
                      class="inline-block w-4 h-4 border-2 rounded-full border-grey-1"
                    ></span>
                    <p class="ml-3">Angkut Sekali</p>
                  </label>
                </div>
                <div class="flex items-center w-full">
                  <input
                    id="radio-collect-pickup-time-scheduled-subscription"
                    type="radio"
                    name="radio-collect-pickup-time-scheduled"
                    class="hidden custom-selected-radio"
                    @change="
                      $store.commit('order/updateTemporaryCreateData', {
                        key: 'order_type',
                        value: 'subscription',
                      })
                    "
                    :checked="temporaryCreateData?.order_type == 'subscription'"
                  />
                  <label
                    for="radio-collect-pickup-time-scheduled-subscription"
                    class="flex items-center justify-start w-full text-sm text-black text-opacity-75 cursor-pointer"
                  >
                    <span
                      class="inline-block w-4 h-4 border-2 rounded-full border-grey-1"
                    ></span>
                    <p class="ml-3">Angkut Rutin</p>
                  </label>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <!-- Start Scheduled One Time -->
                <div v-if="temporaryCreateData?.order_type === 'scheduled'">
                  <input
                    type="text"
                    class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                    placeholder="Pilih tanggal & waktu"
                  />
                </div>
                <!-- End Scheduled One Time -->
                <!-- Start Scheduled Subscription -->
                <div
                  class="flex flex-col gap-4"
                  v-else-if="temporaryCreateData?.order_type === 'subscription'"
                >
                  <input
                    type="text"
                    class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                    placeholder="Pilih hari"
                  />
                  <div class="flex items-center gap-4">
                    <input
                      type="text"
                      class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                      placeholder="Pilih waktu"
                    />
                    <input
                      type="text"
                      class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                      placeholder="Berapa kali angkut"
                    />
                  </div>
                </div>
                <!-- End Scheduled Subscription -->
              </div>
            </div>
          </div>
          <div
            class="flex flex-col gap-5 p-5 border-t border-black border-opacity-10"
          >
            <p class="text-sm font-extrabold text-black">Sampah</p>
            <div class="flex flex-col gap-3">
              <div
                v-for="item in temporaryCreateData.wastes"
                :key="item.id"
                class="flex items-start justify-between"
              >
                <div class="flex items-center justify-start">
                  <img
                    :src="item?.image || '/assets/images/trashes/no-image.svg'"
                    alt=""
                    class="object-cover w-12 h-12 border rounded border-grey-1"
                  />
                  <div class="ml-4">
                    <p class="text-sm text-grey-3">{{ item?.name || '=' }}</p>
                    <div class="flex items-center mt-2 cursor-pointer">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="min-w-[12px] min-h-[12px] max-w-[12px] max-h-[12px]"
                      >
                        <path
                          d="M4.3535 9.85332L9 5.20682L6.793 2.99982L2.1465 7.64632C2.08253 7.71037 2.03709 7.79053 2.015 7.87832L1.5 10.4998L4.121 9.98482C4.209 9.96282 4.2895 9.91732 4.3535 9.85332ZM10.5 3.70682C10.6875 3.51929 10.7928 3.26498 10.7928 2.99982C10.7928 2.73465 10.6875 2.48035 10.5 2.29282L9.707 1.49982C9.51947 1.31235 9.26516 1.20703 9 1.20703C8.73484 1.20703 8.48053 1.31235 8.293 1.49982L7.5 2.29282L9.707 4.49982L10.5 3.70682Z"
                          fill="#F17E60"
                        />
                      </svg>
                      <NuxtLink
                        :to="`/order/create/waste/${item.id}?ref=/order/create/detail`"
                        class="ml-1 text-sm text-secondary"
                        >Edit</NuxtLink
                      >
                    </div>
                  </div>
                </div>
                <p class="text-sm font-extrabold text-black">
                  {{ item.weight }} kg
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-extrabold text-black">Total</p>
              <p class="text-sm font-extrabold text-black">
                {{ temporaryCreateData?.wasteWeight }} kg
              </p>
            </div>
            <NuxtLink
              to="/order/create/waste?ref=/order/create/detail"
              class="flex items-center justify-between px-4 py-3 border cursor-pointer border-success"
            >
              <p class="text-sm font-medium text-success">
                Tambah Jenis Sampah
              </p>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="min-w-[22px] min-h-[22px] max-w-[22px] max-h-[22px]"
              >
                <g clip-path="url(#clip0_1847_6623)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0.916504C5.43121 0.916504 0.916626 5.43109 0.916626 10.9998C0.916626 16.5686 5.43121 21.0832 11 21.0832C16.5687 21.0832 21.0833 16.5686 21.0833 10.9998C21.0833 5.43109 16.5687 0.916504 11 0.916504ZM11.9166 14.6665C11.9166 14.9096 11.82 15.1428 11.6481 15.3147C11.4762 15.4866 11.2431 15.5832 11 15.5832C10.7568 15.5832 10.5237 15.4866 10.3518 15.3147C10.1799 15.1428 10.0833 14.9096 10.0833 14.6665V11.9165H7.33329C7.09018 11.9165 6.85702 11.8199 6.68511 11.648C6.5132 11.4761 6.41663 11.243 6.41663 10.9998C6.41663 10.7567 6.5132 10.5236 6.68511 10.3517C6.85702 10.1797 7.09018 10.0832 7.33329 10.0832H10.0833V7.33317C10.0833 7.09005 10.1799 6.8569 10.3518 6.68499C10.5237 6.51308 10.7568 6.4165 11 6.4165C11.2431 6.4165 11.4762 6.51308 11.6481 6.68499C11.82 6.8569 11.9166 7.09005 11.9166 7.33317V10.0832H14.6666C14.9097 10.0832 15.1429 10.1797 15.3148 10.3517C15.4867 10.5236 15.5833 10.7567 15.5833 10.9998C15.5833 11.243 15.4867 11.4761 15.3148 11.648C15.1429 11.8199 14.9097 11.9165 14.6666 11.9165H11.9166V14.6665Z"
                    fill="#2AC769"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1847_6623">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NuxtLink>
          </div>
          <div class="p-5 border-t border-black border-opacity-10">
            <button
              @click="savePickupTime()"
              class="btn btn--primary btn--rounded btn--block"
              :disabled="isFilledAllField"
            >
              Selanjutnya
            </button>
          </div>
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
      axiosCancelToken: null,
    }
  },
  computed: {
    temporaryCreateData() {
      return this.$store.getters['order/getTemporaryCreateData']
    },
    isFilledAllField() {
      if (this.temporaryCreateData.wastes.length == 0) return true

      if (this.temporaryCreateData.order_type) {
        if (this.temporaryCreateData.order_type == 'on-demand') {
          return false
        } else {
        }
      }
      return true
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.$store.dispatch('order/loadTemporaryCreateData')
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    savePickupTime() {
      this.$store.commit('order/saveToLocalStorageTemporaryCreateData')

      this.$router.push('/order/create/overview')
    },
  },
}
</script>
<style>
/** Custom Selected Radio */
input[type='radio'].custom-selected-radio + label {
  @apply transition duration-200 text-sm text-black py-4;
}

input[type='radio'].custom-selected-radio:checked + label {
  @apply text-secondary;
}

input[type='radio'].custom-selected-radio + label span {
  @apply transition-all duration-200;
}
input[type='radio'].custom-selected-radio:checked + label span {
  @apply bg-secondary;
}
/** Custom Selected Radio Area */
input[type='radio'].custom-selected-radio-area + label {
  @apply transition duration-200 border border-grey-1 rounded-lg p-4 text-sm text-black;
}

input[type='radio'].custom-selected-radio-area:checked + label {
  @apply border-secondary bg-secondary bg-opacity-25 text-secondary;
}

input[type='radio'].custom-selected-radio-area + label span {
  @apply transition-all duration-200;
}
input[type='radio'].custom-selected-radio-area:checked + label span {
  @apply bg-secondary border-white;
}
</style>
