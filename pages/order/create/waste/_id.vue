<template>
  <div>
    <Header :title="waste?.data?.name" :left-action="true">
      <template #left-action>
        <NuxtLink :to="urlBack">
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
      <Loader v-if="waste.loading" />
      <div v-else>
        <div>
          <div class="py-5">
            <p class="mx-5 text-base font-bold text-black">
              {{ waste?.data?.name }}
            </p>
            <p class="mx-5 mt-2 text-sm font-medium text-grey-2">
              Kami menerima semua jenis {{ waste?.data?.name.toLowerCase() }}
            </p>
            <div class="mt-5 overflow-hidden">
              <Loader
                v-if="wasteType.loading"
                classList=""
                styleList="height:200px;"
              />
              <template v-else>
                <div class="swiper swiper-material" style="overflow: initial">
                  <div class="swiper-wrapper">
                    <div
                      v-for="item in wasteType.list"
                      :key="item.id"
                      class="flex flex-col items-center justify-center gap-2 !w-[28%] swiper-slide"
                    >
                      <img
                        :src="
                          item?.image || '/assets/images/wastes/no-image.svg'
                        "
                        alt=""
                        class="min-w-[70px] max-w-[70px] aspect-square"
                      />
                      <p class="text-sm text-center text-grey-3">
                        {{ item?.name }}
                      </p>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </template>
            </div>
            <div class="mx-5 mt-7">
              <p class="text-sm text-grey-2">
                Sampah Anda tidak ada dalam contoh? Tulis disini
              </p>
              <input
                type="text"
                class="block w-full p-4 mt-2 text-sm text-black bg-gray-100 rounded focus:outline-none"
                placeholder="Jenis plastik lain"
                v-model="waste.storing.note"
              />
            </div>
          </div>
          <div class="p-5 border-t border-black border-opacity-10">
            <p class="text-sm font-extrabold text-grey-3">Deskripsi</p>
            <div
              v-html="waste?.data?.description"
              class="text-sm text-grey-3 mt-4"
            ></div>
          </div>
        </div>
        <div
          class="fixed bottom-0 w-full p-5 mx-auto bg-white max-w-[444px]"
          style="box-shadow: rgb(0 0 0 / 2%) 0px -6px 6px"
        >
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-grey-3">Total</p>
            <p class="text-base font-extrabold text-black">
              {{
                $formattingThousand($changeSeparator(waste?.storing?.weight)) ||
                0
              }}
              kg
            </p>
          </div>
          <div class="flex items-center gap-3 mt-3">
            <div class="flex items-center w-1/2">
              <div class="flex items-center gap-4">
                <div
                  class="text-black transition-colors duration-300"
                  :class="[
                    waste?.storing?.total == 0
                      ? 'cursor-not-allowed text-opacity-40'
                      : 'cursor-pointer',
                  ]"
                  @click="changeUnit('reduce')"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="min-w-[29px] min-h-[29px] max-w-[29px] max-h-[29px]"
                  >
                    <path
                      d="M19.3333 14.5H9.66667"
                      stroke="currentColor"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.5 26.5832C21.1734 26.5832 26.5833 21.1733 26.5833 14.4998C26.5833 7.8264 21.1734 2.4165 14.5 2.4165C7.82656 2.4165 2.41667 7.8264 2.41667 14.4998C2.41667 21.1733 7.82656 26.5832 14.5 26.5832Z"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  v-model="waste.storing.total"
                  placeholder="0"
                  class="text-center text-base font-medium text-grey-3 w-8 focus:outline-none"
                  @keypress="$onlyNumber($event)"
                  @keyup="changeUnit('input', $event.target.value)"
                />
                <div
                  class="text-black cursor-pointer"
                  @click="changeUnit('add')"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="min-w-[29px] min-h-[29px] max-w-[29px] max-h-[29px]"
                  >
                    <path
                      d="M14.5 9.6665V14.4998M14.5 14.4998V19.3332M14.5 14.4998H19.3333M14.5 14.4998H9.66667"
                      stroke="currentColor"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.5 26.5832C21.1734 26.5832 26.5833 21.1733 26.5833 14.4998C26.5833 7.8264 21.1734 2.4165 14.5 2.4165C7.82656 2.4165 2.41667 7.8264 2.41667 14.4998C2.41667 21.1733 7.82656 26.5832 14.5 26.5832Z"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <p class="ml-3 text-sm font-medium text-grey-3">
                {{ waste?.data?.unit }}
              </p>
            </div>
            <button
              @click="saveWaste()"
              class="btn btn--secondary btn--block btn--rounded !w-1/2"
              :disabled="isFilledAllField"
            >
              Tambahkan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Popup Delete Waste -->
    <transition name="slide-popup">
      <div
        class="fixed bottom-0 flex items-center justify-center w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="confirmationDeleteWaste.popup"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="confirmationDeleteWaste.popup = false"
        ></div>
        <div
          class="z-10 content-center w-full p-4 transition-all duration-1000 top-14 content-popup"
        >
          <div class="w-full overflow-auto bg-white rounded-lg">
            <!-- content -->
            <div>
              <div class="px-3 pb-8 text-center pt-7">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <path
                    d="M37.5002 72.9168C57.0602 72.9168 72.9168 57.0602 72.9168 37.5002C72.9168 17.9401 57.0602 2.0835 37.5002 2.0835C17.9401 2.0835 2.0835 17.9401 2.0835 37.5002C2.0835 57.0602 17.9401 72.9168 37.5002 72.9168Z"
                    stroke="#DD9813"
                    stroke-width="4"
                  />
                  <path
                    d="M30.417 25.0478C32.1878 21.5416 33.9587 19.792 37.5003 19.792C41.9132 19.792 44.5837 23.2947 44.5837 26.7974C44.5837 30.3001 42.8128 32.0497 37.5003 35.556V41.042M37.5003 53.4378V55.2087"
                    stroke="#DD9813"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>

                <h1
                  class="mt-4 text-xl font-semibold text-primary max-w-[160px] mx-auto"
                >
                  Anda Yakin?
                </h1>
                <p class="mt-2 text-xs text-grey-2 max-w-[222px] mx-auto">
                  Data sampah akan dihapus
                </p>
              </div>
              <div
                class="flex items-center border-t border-black border-opacity-10"
              >
                <button
                  class="!py-4 btn btn--block text-grey-2 font-medium uppercase"
                  @click="confirmationDeleteWaste.popup = false"
                >
                  Batal
                </button>
                <button
                  @click="deleteWaste()"
                  class="!py-4 font-bold btn btn--block text-warning uppercase"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Popup Delete Waste -->
  </div>
</template>
<script>
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  middleware: ['authenticated'],
  data() {
    return {
      waste: {
        loading: true,
        data: null,
        storing: null,
      },
      wasteType: {
        loading: true,
        list: [],
        params: {
          limit: 50,
          page: 1,
          orderBy: 'asc',
          sortBy: 'name',
          status: 'active',
          category: '',
        },
      },
      confirmationDeleteWaste: {
        popup: false,
      },
      swiper: null,
      axiosCancelToken: null,
    }
  },
  computed: {
    temporaryCreateData() {
      return this.$store.getters['order/getTemporaryCreateData']
    },
    isFilledAllField() {
      return this.waste.storing.total == 0 ? true : false
    },
    urlBack() {
      return this.$route.query?.ref || '/order/create/waste'
    },
    urlGetWasteTypeList() {
      return `/api/v1/waste-type?limit=${this.wasteType.params.limit}&page=${this.wasteType.params.page}&order_by=${this.wasteType.params.orderBy}&sort_by=${this.wasteType.params.sortBy}&status=${this.wasteType.params.status}&category=${this.wasteType.params.category}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.$store.dispatch('order/loadTemporaryCreateData')
    this.getWasteDetail()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getWasteDetail() {
      try {
        this.waste.loading = true

        let id = this.$route.params.id
        var response = await this.$axios.$get(`/api/v1/waste/${id}`, {
          CancelToken: this.axiosCancelToken,
        })

        this.waste.loading = false
        if (response.success) {
          this.waste.data = response.data

          let waste = this.temporaryCreateData.wastes.find(
            (item) => item.id === this.waste.data.id
          )

          if (waste) {
            this.waste.storing = JSON.parse(JSON.stringify(waste))
          } else {
            this.waste.storing = JSON.parse(JSON.stringify(this.waste.data))
            this.waste.storing.total = 0
            this.waste.storing.weight = 0
            this.waste.storing.note = ''
          }
          this.getWasteTypeList()
        }
      } catch (error) {
        this.waste.loading = false
        if (!this.$axios.isCancel(error)) {
          const code = parseInt(error.response && error.response.status)
          const statusText = error.response && error.response.statusText
          const data = error.response && error.response.data

          if (code === 404) {
            this.$nuxt.context.error({
              statusCode: 404,
              message: data.message,
            })
            return Promise.resolve(false)
          }
        }
      }
    },
    async getWasteTypeList() {
      try {
        this.wasteType.loading = true

        let id = this.$route.params.id
        this.wasteType.params.category = id

        var response = await this.$axios.$get(this.urlGetWasteTypeList, {
          CancelToken: this.axiosCancelToken,
        })

        this.wasteType.loading = false
        if (response.success) {
          this.wasteType.params.page++
          this.wasteType.list = response.data
          setTimeout(() => {
            this.initSwiper()
          }, 10)
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.wasteType.loading = false
        }
      }
    },
    initSwiper() {
      this.swiper = new Swiper('.swiper-material', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: '!bg-secondary !opacity-100',
        },
      })
    },
    changeUnit(type, value = 0) {
      let waste = JSON.parse(JSON.stringify(this.waste.storing))

      if (type == 'add') {
        waste.total += 1
        waste.weight =
          Math.ceil((waste.total / this.waste.data.unit_convertion) * 10) / 10
      } else if (type == 'reduce') {
        if (waste.total === 0) {
          return false
        }

        if (waste.total === 1) {
          if (
            this.temporaryCreateData.wastes.find((item) => item.id === waste.id)
          ) {
            this.confirmationDeleteWaste.popup = true
            return false
          }
        }
        waste.total -= 1
        if (waste.total > 0) {
          waste.weight =
            Math.ceil((waste.total / this.waste.data.unit_convertion) * 10) / 10
        } else {
          waste.weight = 0
        }
      } else if (type == 'input') {
        value = parseInt(Number(value))
        if (value <= 0) {
          if (
            this.temporaryCreateData.wastes.find((item) => item.id === waste.id)
          ) {
            this.confirmationDeleteWaste.popup = true
            waste.total = 1
            waste.weight =
              Math.ceil((waste.total / this.waste.data.unit_convertion) * 10) /
              10
          }
        } else {
          waste.total = value
          waste.weight =
            Math.ceil((waste.total / this.waste.data.unit_convertion) * 10) / 10
        }
      }
      this.waste.storing = waste
    },
    deleteWaste() {
      this.$store.commit(
        'order/removeWasteTemporaryCreateData',
        this.waste.storing.id
      )

      let wasteWeight = this.$roundNumber(
        this.temporaryCreateData.wastes.reduce(
          (sum, data) => sum + data.weight,
          0
        )
      )
      this.$store.commit('order/updateTemporaryCreateData', {
        key: 'wasteWeight',
        value: wasteWeight,
      })

      this.$store.commit('order/saveToLocalStorageTemporaryCreateData')

      this.$router.push(this.urlBack)
    },
    saveWaste() {
      this.$store.commit(
        'order/removeWasteTemporaryCreateData',
        this.waste.storing.id
      )
      this.$store.commit(
        'order/addWasteTemporaryCreateData',
        this.waste.storing
      )

      let wasteWeight = this.$roundNumber(
        this.temporaryCreateData.wastes.reduce(
          (sum, data) => sum + data.weight,
          0
        )
      )
      this.$store.commit('order/updateTemporaryCreateData', {
        key: 'wasteWeight',
        value: wasteWeight,
      })

      this.$store.commit('order/saveToLocalStorageTemporaryCreateData')

      this.$router.push(this.urlBack)
    },
  },
}
</script>
<style>
.swiper-material {
  @apply w-full h-full pb-12;
}

.swiper-slide {
  @apply text-center text-lg bg-white flex justify-center items-center;
}

.swiper-slide img {
  @apply block w-full h-full object-cover;
}
</style>
