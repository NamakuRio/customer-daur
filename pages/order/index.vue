<template>
  <div>
    <Header title="Order" />
    <div class="with-header with-bottom-navbar">
      <Loader v-if="order.loading && order.isFirst" />
      <div v-else>
        <div>
          <div class="w-full p-5">
            <div class="relative">
              <div class="absolute top-0 p-4 right-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_95_4833)">
                    <path
                      d="M12.2498 12.2498L9.633 9.62834M11.0832 6.12484C11.0832 7.43987 10.5608 8.70104 9.63091 9.63091C8.70104 10.5608 7.43987 11.0832 6.12484 11.0832C4.80981 11.0832 3.54863 10.5608 2.61877 9.63091C1.6889 8.70104 1.1665 7.43987 1.1665 6.12484C1.1665 4.80981 1.6889 3.54863 2.61877 2.61877C3.54863 1.6889 4.80981 1.1665 6.12484 1.1665C7.43987 1.1665 8.70104 1.6889 9.63091 2.61877C10.5608 3.54863 11.0832 4.80981 11.0832 6.12484V6.12484Z"
                      stroke="#A5A5A5"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_95_4833">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <input
                type="text"
                class="block w-full py-4 pl-4 pr-12 mt-1 text-xs text-black bg-gray-100 rounded focus:outline-none"
                placeholder="Cari ID, customer, alamat"
                @keyup="searchOrder($event.target.value)"
              />
            </div>
          </div>
          <Loader
            v-if="order.loading && !order.isFirst"
            classList=""
            styleList="height:calc(100vh - (144px + 96px));"
          />
          <template v-else>
            <div class="flex flex-col gap-3 p-5" v-if="order.list.length > 0">
              <NuxtLink
                v-for="item in order.list"
                :key="item.id"
                :to="`/order/${item.id}`"
                class="p-4 border rounded-lg cursor-pointer border-grey-1"
              >
                <div
                  v-if="
                    item?.status == 'pending' && item?.payment?.status != 'paid'
                  "
                  class="flex flex-row items-center p-3 mb-4 border rounded border-warning text-warning bg-warning bg-opacity-10"
                >
                  <svg
                    class="min-w-[12px] min-h-[12px] max-w-[12px] max-h-[12px]"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_671_2328)">
                      <path
                        d="M5.5 0.6875C2.84238 0.6875 0.6875 2.84238 0.6875 5.5C0.6875 8.15762 2.84238 10.3125 5.5 10.3125C8.15762 10.3125 10.3125 8.15762 10.3125 5.5C10.3125 2.84238 8.15762 0.6875 5.5 0.6875ZM5.5 9.49609C3.29355 9.49609 1.50391 7.70645 1.50391 5.5C1.50391 3.29355 3.29355 1.50391 5.5 1.50391C7.70645 1.50391 9.49609 3.29355 9.49609 5.5C9.49609 7.70645 7.70645 9.49609 5.5 9.49609Z"
                        fill="#DD9813"
                      />
                      <path
                        d="M4.98438 3.60938C4.98438 3.74613 5.0387 3.87728 5.1354 3.97398C5.2321 4.07068 5.36325 4.125 5.5 4.125C5.63675 4.125 5.7679 4.07068 5.8646 3.97398C5.9613 3.87728 6.01562 3.74613 6.01562 3.60938C6.01562 3.47262 5.9613 3.34147 5.8646 3.24477C5.7679 3.14807 5.63675 3.09375 5.5 3.09375C5.36325 3.09375 5.2321 3.14807 5.1354 3.24477C5.0387 3.34147 4.98438 3.47262 4.98438 3.60938ZM5.75781 4.8125H5.24219C5.19492 4.8125 5.15625 4.85117 5.15625 4.89844V7.82031C5.15625 7.86758 5.19492 7.90625 5.24219 7.90625H5.75781C5.80508 7.90625 5.84375 7.86758 5.84375 7.82031V4.89844C5.84375 4.85117 5.80508 4.8125 5.75781 4.8125Z"
                        fill="#DD9813"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_671_2328">
                        <rect width="11" height="11" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p class="ml-1 text-xs">Menunggu Pembayaran</p>
                </div>
                <div class="flex flex-col gap-3">
                  <div class="flex items-start justify-between">
                    <div>
                      <p class="text-sm font-extrabold text-black">
                        {{ item.order_number }}
                      </p>
                      <p class="mt-1 text-xs text-grey-2">
                        {{ $dateDiffForHumans(item.created_at) }}
                      </p>
                    </div>
                    <span
                      class="rounded-full py-1 px-4 bg-opacity-20 text-xs font-medium"
                      :class="$orderStatusClass(item?.status)"
                      >{{ $orderStatus(item?.status) }}</span
                    >
                  </div>
                  <p class="text-xs text-grey-3">
                    {{ item.address }}
                  </p>
                  <p class="text-xs text-grey-3">{{ item.type }}</p>
                </div>
              </NuxtLink>
              <infinite-loading
                @infinite="getOrderListInfinite"
                spinner="spiral"
              >
                <div slot="no-more"></div>
                <div slot="no-results"></div>
              </infinite-loading>
            </div>
            <div
              v-else
              class="inset-0 flex items-center w-full"
              style="height: calc(100vh - (144px + 96px))"
            >
              <div class="block m-auto text-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-grey-3 mx-auto min-w-[110px] min-h-[110px] max-w-[110px] max-h-[110px]"
                >
                  <path
                    d="M10 0C8.0222 0 6.0888 0.586491 4.44431 1.68531C2.79981 2.78412 1.51809 4.34591 0.76121 6.17317C0.00433285 8.00044 -0.193701 10.0111 0.192152 11.9509C0.578005 13.8907 1.53041 15.6726 2.92894 17.0711C4.32747 18.4696 6.1093 19.422 8.04911 19.8079C9.98893 20.1937 11.9996 19.9957 13.8269 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9975 7.34863 18.9431 4.80656 17.0683 2.93175C15.1935 1.05693 12.6514 0.00254574 10 0ZM10 18.4616C8.32648 18.4616 6.69053 17.9653 5.29903 17.0355C3.90754 16.1058 2.823 14.7843 2.18257 13.2381C1.54213 11.692 1.37456 9.99063 1.70105 8.34925C2.02755 6.70787 2.83343 5.20016 4.0168 4.01679C5.20017 2.83343 6.70787 2.02754 8.34925 1.70105C9.99063 1.37456 11.692 1.54213 13.2381 2.18256C14.7843 2.823 16.1058 3.90753 17.0355 5.29903C17.9653 6.69052 18.4616 8.32648 18.4616 10C18.459 12.2434 17.5667 14.3941 15.9804 15.9804C14.3941 17.5667 12.2434 18.459 10 18.4616ZM11.5385 14.6154C11.5385 14.8194 11.4574 15.0151 11.3132 15.1593C11.1689 15.3036 10.9733 15.3846 10.7693 15.3846H10C9.79601 15.3846 9.60035 15.3036 9.45609 15.1593C9.31183 15.0151 9.23079 14.8194 9.23079 14.6154V10C9.02677 10 8.83112 9.91897 8.68686 9.77471C8.5426 9.63045 8.46156 9.4348 8.46156 9.23078C8.46156 9.02677 8.5426 8.83111 8.68686 8.68685C8.83112 8.54259 9.02677 8.46155 9.23079 8.46155H10C10.204 8.46155 10.3997 8.54259 10.5439 8.68685C10.6882 8.83111 10.7693 9.02677 10.7693 9.23078V13.8462C10.9733 13.8462 11.1689 13.9272 11.3132 14.0715C11.4574 14.2157 11.5385 14.4114 11.5385 14.6154ZM8.65386 5.76924C8.65386 5.54103 8.72153 5.31795 8.84832 5.1282C8.97511 4.93845 9.15531 4.79056 9.36615 4.70322C9.57699 4.61589 9.80899 4.59304 10.0328 4.63756C10.2566 4.68208 10.4622 4.79198 10.6236 4.95335C10.785 5.11471 10.8949 5.32031 10.9394 5.54413C10.9839 5.76796 10.9611 5.99996 10.8737 6.2108C10.7864 6.42164 10.6385 6.60184 10.4488 6.72863C10.259 6.85542 10.0359 6.92309 9.80771 6.92309C9.50169 6.92309 9.20821 6.80152 8.99182 6.58513C8.77543 6.36874 8.65386 6.07526 8.65386 5.76924Z"
                    fill="currentColor"
                  />
                </svg>
                <p class="text-sm text-grey-3 mt-6">Data tidak tersedia</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <BottomNavbar />
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      order: {
        isFirst: true,
        loading: true,
        list: [],
        params: {
          limit: 5,
          page: 1,
          orderBy: 'desc',
          sortBy: 'created_at',
          search: 'order_number',
          value: '',
        },
        search: {
          timer: null,
        },
      },
      axiosCancelToken: null,
    }
  },
  computed: {
    urlGetOrderList() {
      return `/api/v1/order?limit=${this.order.params.limit}&page=${this.order.params.page}&order_by=${this.order.params.orderBy}&sort_by=${this.order.params.sortBy}&search=${this.order.params.search}&value=${this.order.params.value}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.getOrderList()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getOrderList() {
      try {
        this.order.loading = true
        var response = await this.$axios.$get(this.urlGetOrderList, {
          CancelToken: this.axiosCancelToken,
        })

        this.order.loading = false
        if (response.success) {
          this.order.isFirst = false
          this.order.params.page++
          this.order.list = response.data
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.order.loading = false
        }
      }
    },
    async getOrderListInfinite($state) {
      try {
        var response = await this.$axios.$get(this.urlGetOrderList, {
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          if (response.data.length > 0) {
            this.order.params.page++
            this.order.list.push(...response.data)

            if (response.current_page < response.last_page) {
              $state.loaded()
            } else {
              $state.complete()
            }
          } else {
            $state.complete()
          }
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          $state.error()
        }
      }
    },
    searchOrder(value) {
      if (this.order.search.timer) {
        clearTimeout(this.order.search.timer)
        this.order.search.timer = null
      }
      this.order.search.timer = setTimeout(() => {
        this.order.params.page = 1
        this.order.params.value = value
        this.order.list = []
        this.order.loading = true
        this.getOrderList()
      }, 400)
    },
  },
}
</script>
