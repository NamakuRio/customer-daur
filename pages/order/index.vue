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
                      :class="[
                        item?.status == 'pending'
                          ? 'bg-warning text-warning'
                          : '',
                        item?.status == 'active'
                          ? 'bg-success text-success'
                          : '',
                        item?.status == 'inactive'
                          ? 'bg-grey-3 text-grey-3'
                          : '',
                        item?.status == 'cancel' ? 'bg-danger text-danger' : '',
                      ]"
                      >{{ item?.status }}</span
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
              <!-- <NuxtLink
                to="/order/1"
                class="p-4 border rounded-lg cursor-pointer border-grey-1"
              >
                <div
                  class="flex flex-row items-center p-3 mb-4 border rounded border-warning text-warning bg-warning bg-opacity-10"
                >
                  <svg
                    class="min-w-[11px] min-h-[11px]"
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
                      <p class="text-sm font-extrabold text-black">#01292</p>
                      <p class="mt-1 text-xs text-grey-2">2 jam lalu</p>
                    </div>
                    <span
                      class="rounded-full py-1 px-2 bg-warning text-warning bg-opacity-30 text-[10px] font-medium"
                      >pending</span
                    >
                  </div>
                  <p class="text-xs text-grey-3">
                    Jl. Soreang Rahayu IV, Nomor 289, Kabutaten Bogor, Jawa Barat
                    50129
                  </p>
                  <p class="text-xs text-grey-3">On-demand</p>
                </div>
              </NuxtLink>
              <NuxtLink
                to="/order/1"
                class="p-4 border rounded-lg cursor-pointer border-grey-1"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-start justify-between">
                    <div>
                      <p class="text-sm font-extrabold text-black">#01292</p>
                      <p class="mt-1 text-xs text-grey-2">2 jam lalu</p>
                    </div>
                    <span
                      class="rounded-full py-1 px-2 bg-success text-success bg-opacity-20 text-[10px] font-medium"
                      >active</span
                    >
                  </div>
                  <p class="text-xs text-grey-3">
                    Jl. Soreang Rahayu IV, Nomor 289, Kabutaten Bogor, Jawa Barat
                    50129
                  </p>
                  <p class="text-xs text-grey-3">On-demand</p>
                </div>
              </NuxtLink> -->
            </div>
            <div
              v-else
              class="inset-0 flex items-center w-full"
              style="height: calc(100vh - (144px + 96px))"
            >
              <div class="block m-auto text-center">
                <img
                  src="~/assets/images/icon/info.svg"
                  alt="icon info"
                  class="w-auto max-w-[120px]"
                />
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
      } catch (e) {
        if (!this.$axios.isCancel(e)) {
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
      } catch (e) {
        if (!this.$axios.isCancel(e)) {
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
