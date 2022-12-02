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
                v-model="address_note"
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
                    @change="setOrderType('on-demand', 1)"
                    :checked="order?.order_type_1 == 'on-demand'"
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
                    @change="setOrderType('scheduled', 1)"
                    :checked="order?.order_type_1 == 'scheduled'"
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
                v-if="order?.order_type_1 == 'scheduled'"
              >
                <div class="flex items-center w-full">
                  <input
                    id="radio-collect-pickup-time-scheduled-onetime"
                    type="radio"
                    name="radio-collect-pickup-time-scheduled"
                    class="hidden custom-selected-radio"
                    @change="setOrderType('scheduled-onetime', 2)"
                    :checked="order?.order_type_2 == 'scheduled-onetime'"
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
                    @change="setOrderType('scheduled-subscription', 2)"
                    :checked="order?.order_type_2 == 'scheduled-subscription'"
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
                <div v-if="order?.order_type_2 == 'scheduled-onetime'">
                  <vc-date-picker
                    v-model="order.scheduled.oneTime.dateTime"
                    mode="dateTime"
                    is24hr
                    locale="id-ID"
                    :min-date="order.scheduled.oneTime.config.minDate"
                    :masks="order.scheduled.oneTime.config.masks"
                  >
                    <template v-slot="{ inputValue, inputEvents }">
                      <input
                        class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                        :value="inputValue"
                        v-on="inputEvents"
                        placeholder="Pilih tanggal & waktu"
                      />
                    </template>
                  </vc-date-picker>
                </div>
                <!-- End Scheduled One Time -->
                <!-- Start Scheduled Subscription -->
                <div
                  class="flex flex-col gap-4"
                  v-else-if="order?.order_type_2 == 'scheduled-subscription'"
                >
                  <select
                    name=""
                    id=""
                    class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                    v-model="order.scheduled.subscription.day"
                  >
                    <option value="" selected disabled>Pilih hari</option>
                    <option value="Senin">Senin</option>
                    <option value="Selasa">Selasa</option>
                    <option value="Rabu">Rabu</option>
                    <option value="Kamis">Kamis</option>
                    <option value="Jumat">Jumat</option>
                    <option value="Sabtu">Sabtu</option>
                    <option value="Minggu">Minggu</option>
                  </select>
                  <div class="flex items-center gap-4">
                    <input
                      type="tel"
                      class="block w-full p-4 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none cleave-time"
                      placeholder="Pilih waktu"
                      v-model="order.scheduled.subscription.time"
                    />
                    <input
                      type="text"
                      class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                      placeholder="Berapa kali angkut"
                      @keypress="$onlyNumber($event)"
                      v-model="order.scheduled.subscription.count"
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
            <template v-if="temporaryCreateData?.wastes?.length > 0">
              <div class="flex flex-col gap-3">
                <div
                  v-for="item in temporaryCreateData.wastes"
                  :key="item.id"
                  class="flex items-start justify-between"
                >
                  <div class="flex items-center justify-start">
                    <img
                      :src="item?.image || '/assets/images/wastes/no-image.svg'"
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
                    {{ $formattingThousand($changeSeparator(item.weight)) }} kg
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-extrabold text-black">Total</p>
                <p class="text-sm font-extrabold text-black">
                  {{
                    $formattingThousand(
                      $changeSeparator(temporaryCreateData?.wasteWeight)
                    )
                  }}
                  kg
                </p>
              </div>
            </template>
            <template v-else>
              <div class="text-center">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto min-w-[54px] min-h-[54px] max-w-[54px] max-h-[54px]"
                >
                  <path
                    d="M45.5625 15.1875L42.5387 44.2695C42.4421 45.0906 42.0474 45.8477 41.4296 46.3971C40.8117 46.9465 40.0137 47.25 39.1869 47.25H14.8141C13.9874 47.25 13.1893 46.9465 12.5715 46.3971C11.9537 45.8477 11.559 45.0906 11.4623 44.2695L8.4375 15.1875"
                    stroke="#E8E8E8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M48.9375 6.75H5.0625C4.13052 6.75 3.375 7.50552 3.375 8.4375V13.5C3.375 14.432 4.13052 15.1875 5.0625 15.1875H48.9375C49.8695 15.1875 50.625 14.432 50.625 13.5V8.4375C50.625 7.50552 49.8695 6.75 48.9375 6.75Z"
                    stroke="#E8E8E8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.9062 25.3125L21.0938 37.125M32.9062 37.125L21.0938 25.3125"
                    stroke="#E8E8E8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="text-sm text-grey-2 mt-2">Belum ada sampah</p>
              </div>
            </template>
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
          <div
            class="p-5"
            v-if="order.order_type_2 != 'scheduled-subscription'"
          >
            <div
              @click="captureImage()"
              class="rounded-lg border bg-white border-black border-opacity-10 text-grey-2 cursor-pointer group hover:text-primary hover:border-primary hover:border-dashed"
            >
              <div v-if="imageDataURL" class="p-[1px]">
                <img :src="imageDataURL" alt="" class="m-auto rounded-lg" />
              </div>
              <div
                v-else
                class="flex flex-col items-center gap-4 px-5 pt-8 pb-7"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.1875 12.1094H35.5469L33.9648 7.67578C33.8555 7.3724 33.6552 7.11017 33.3913 6.92489C33.1274 6.73962 32.8127 6.64034 32.4902 6.64063H17.5098C16.8506 6.64063 16.2598 7.05566 16.04 7.67578L14.4531 12.1094H7.8125C5.6543 12.1094 3.90625 13.8574 3.90625 16.0156V38.2812C3.90625 40.4395 5.6543 42.1875 7.8125 42.1875H42.1875C44.3457 42.1875 46.0938 40.4395 46.0938 38.2812V16.0156C46.0938 13.8574 44.3457 12.1094 42.1875 12.1094ZM42.5781 38.2812C42.5781 38.4961 42.4023 38.6719 42.1875 38.6719H7.8125C7.59766 38.6719 7.42188 38.4961 7.42188 38.2812V16.0156C7.42188 15.8008 7.59766 15.625 7.8125 15.625H16.9287L17.7637 13.291L18.8818 10.1563H31.1133L32.2314 13.291L33.0664 15.625H42.1875C42.4023 15.625 42.5781 15.8008 42.5781 16.0156V38.2812ZM25 18.75C20.6836 18.75 17.1875 22.2461 17.1875 26.5625C17.1875 30.8789 20.6836 34.375 25 34.375C29.3164 34.375 32.8125 30.8789 32.8125 26.5625C32.8125 22.2461 29.3164 18.75 25 18.75ZM25 31.25C22.4121 31.25 20.3125 29.1504 20.3125 26.5625C20.3125 23.9746 22.4121 21.875 25 21.875C27.5879 21.875 29.6875 23.9746 29.6875 26.5625C29.6875 29.1504 27.5879 31.25 25 31.25Z"
                    fill="currentColor"
                  />
                </svg>
                <p class="text-sm text-grey-2 group-hover:text-primary">
                  Ambil foto sampah yang akan diangkut
                </p>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              name="photo"
              capture="image"
              class="hidden"
              ref="capture-image-file"
              @change="handleCapturingImage($event)"
            />
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
      order: {
        order_type_1: null,
        order_type_2: null,
        scheduled: {
          oneTime: {
            dateTime: null,
            config: {
              minDate: new Date(),
              masks: {
                inputDateTime24hr: 'DD MMMM YYYY HH:mm',
              },
            },
          },
          subscription: {
            day: '',
            time: null,
            count: null,
          },
        },
      },
      address_note: '',
      imageDataURL: null,
      axiosCancelToken: null,
    }
  },
  computed: {
    temporaryCreateData() {
      return this.$store.getters['order/getTemporaryCreateData']
    },
    isFilledAllField() {
      if (this.order.order_type_1 == 'on-demand') {
        if (this.temporaryCreateData.wastes.length == 0) return true
        if (!this.imageDataURL) return true
        return false
      } else if (this.order.order_type_1 == 'scheduled') {
        if (
          this.order.order_type_2 == 'scheduled-onetime' &&
          this.order.scheduled.oneTime.dateTime
        ) {
          if (this.temporaryCreateData.wastes.length == 0) return true
          if (!this.imageDataURL) return true
          return false
        } else if (
          this.order.order_type_2 == 'scheduled-subscription' &&
          this.order.scheduled.subscription.day &&
          this.order.scheduled.subscription.time &&
          this.order.scheduled.subscription.count
        ) {
          return false
        }
      }
      return true
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.$store.dispatch('order/loadTemporaryCreateData')
    this.address_note = this.temporaryCreateData.address_note || ''
    this.imageDataURL = this.temporaryCreateData.image || null
    if (this.temporaryCreateData.order_type) {
      if (this.temporaryCreateData.order_type == 'on-demand') {
        this.order.order_type_1 = 'on-demand'
      } else if (this.temporaryCreateData.order_type == 'scheduled') {
        this.order.order_type_1 = 'scheduled'
        this.order.order_type_2 = 'scheduled-onetime'
        this.order.scheduled.OneTime.dateTime =
          this.temporaryCreateData?.scheduled_collect_dateTime
      } else if (this.temporaryCreateData.order_type == 'subscription') {
        this.order.order_type_1 = 'scheduled'
        this.order.order_type_2 = 'scheduled-subscription'
        this.order.scheduled.subscription.day =
          this.temporaryCreateData?.subscription_collect_day
        this.order.scheduled.subscription.time =
          this.temporaryCreateData?.subscription_collect_time
        this.order.scheduled.subscription.count =
          this.temporaryCreateData?.subscription_collect_count
      }
    }
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    setOrderType(value, level) {
      if (level == 1) {
        this.order.order_type_1 = value
      } else if (level == 2) {
        this.order.order_type_2 = value
      }
    },
    captureImage() {
      this.$refs['capture-image-file'].click()
    },
    handleCapturingImage(e) {
      let _self = this
      let file = e.target.files[0]

      let img = document.createElement('img')
      img.src = URL.createObjectURL(file)
      img.onload = function () {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')

        var MAX_WIDTH = 400
        var MAX_HEIGHT = 150
        var width = img.width
        var height = img.height

        // if (width > height) {
        //   if (width > MAX_WIDTH) {
        //     height *= MAX_WIDTH / width
        //     width = MAX_WIDTH
        //   }
        // } else {
        //   if (height > MAX_HEIGHT) {
        //     width *= MAX_HEIGHT / height
        //     height = MAX_HEIGHT
        //   }
        // }
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        _self.imageDataURL = canvas.toDataURL('image/jpeg', 0.3)
      }
    },
    savePickupTime() {
      // order type
      if (this.order.order_type_1 == 'on-demand') {
        this.$store.commit('order/updateTemporaryCreateData', {
          key: 'order_type',
          value: 'on-demand',
        })
      } else if (this.order.order_type_1 == 'scheduled') {
        if (this.order.order_type_2 == 'scheduled-onetime') {
          this.$store.commit('order/updateTemporaryCreateData', {
            key: 'order_type',
            value: 'scheduled',
          })
          this.$store.commit('order/updateTemporaryCreateData', {
            key: 'scheduled_collect_dateTime',
            value: this.order.scheduled.oneTime.dateTime,
          })
        } else if (this.order.order_type_2 == 'scheduled-subscription') {
          this.$store.commit('order/updateTemporaryCreateData', {
            key: 'order_type',
            value: 'subscription',
          })
          this.$store.commit('order/updateTemporaryCreateData', {
            key: 'subscription_collect_day',
            value: this.order.scheduled.subscription.day,
          })
          this.$store.commit('order/updateTemporaryCreateData', {
            key: 'subscription_collect_time',
            value: this.order.scheduled.subscription.time,
          })
          this.$store.commit('order/updateTemporaryCreateData', {
            key: 'subscription_collect_count',
            value: this.order.scheduled.subscription.count,
          })
        }
      }

      this.$store.commit('order/updateTemporaryCreateData', {
        key: 'image',
        value: this.imageDataURL,
      })
      this.$store.commit('order/updateTemporaryCreateData', {
        key: 'address_note',
        value: this.address_note,
      })
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
