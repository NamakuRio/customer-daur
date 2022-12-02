<template>
  <div>
    <Header
      title="Jadwal Berlangganan"
      :left-action="true"
      :right-action="true"
    >
      <template #left-action>
        <NuxtLink :to="`/order/${$route.params.id}`">
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
      <Loader v-if="order.loading" />
      <div v-else>
        <div
          class="bg-white p-5 flex items-center justify-between border-b border-black border-opacity-10"
        >
          <div>
            <p class="text-sm font-extrabold text-black">ID Order</p>
            <p class="mt-1 text-sm font-medium text-grey-2">
              {{ order?.data?.order_number || '-' }}
            </p>
          </div>
          <span
            class="px-5 py-1 text-xs font-medium rounded-full bg-opacity-20"
            :class="$orderStatusClass(order?.data?.status)"
          >
            {{ $orderStatus(order?.data?.status) }}
          </span>
        </div>
        <Loader
          v-if="collect.loading"
          classList=""
          styleList="height:calc(100vh - (56px + 85px));"
        />
        <template v-else>
          <div
            class="p-5 bg-white flex flex-col gap-3"
            v-if="collect.list.length > 0"
          >
            <NuxtLink
              v-for="item in collect.list"
              :key="item.id"
              :to="`/collect/${item.id}?ref=/order/${order.data.id}/collect`"
              class="p-4 border rounded-lg cursor-pointer border-grey-1"
            >
              <div class="flex flex-col gap-3">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-sm font-extrabold text-black">
                      {{ item.collect_number }}
                    </p>
                    <p class="mt-1 text-xs text-grey-2">
                      {{ $dateDiffForHumans(item.created_at) }}
                    </p>
                  </div>
                  <span
                    class="rounded-full py-1 px-4 bg-opacity-20 text-xs font-medium"
                    :class="$collectStatusClass(item?.status)"
                    >{{ $collectStatus(item?.status) }}</span
                  >
                </div>
                <div>
                  <p class="text-xs text-grey-3">
                    {{ item.address }}
                  </p>
                  <div class="flex flex-row items-center mt-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_508_13248)">
                        <path
                          d="M10.5001 2.3335H3.50008C2.21142 2.3335 1.16675 3.37816 1.16675 4.66683V10.5002C1.16675 11.7888 2.21142 12.8335 3.50008 12.8335H10.5001C11.7887 12.8335 12.8334 11.7888 12.8334 10.5002V4.66683C12.8334 3.37816 11.7887 2.3335 10.5001 2.3335Z"
                          stroke="#A5A5A5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66675 1.16675V3.50008M9.33342 1.16675V3.50008M1.16675 5.83341H12.8334"
                          stroke="#A5A5A5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_508_13248">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p class="ml-3 text-xs font-normal text-grey-3">
                      Jadwal&nbsp;<span class="font-extrabold">
                        {{
                          `${$moment(item?.date).format(
                            'DD MMMM YYYY, HH:mm'
                          )} WIB` || '-'
                        }}</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
            <infinite-loading
              @infinite="getCollectListInfinite"
              spinner="spiral"
            >
              <div slot="no-more"></div>
              <div slot="no-results"></div>
            </infinite-loading>
          </div>
          <div v-else class="inset-0 flex items-center w-full h-72">
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
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      order: {
        loading: true,
        data: null,
      },
      collect: {
        loading: true,
        list: [],
        params: {
          limit: 5,
          page: 1,
          orderBy: 'asc',
          sortBy: 'date',
          orderId: '',
        },
      },
      axiosCancelToken: null,
    }
  },
  computed: {
    urlGetCollectList() {
      return `/api/v1/collect?limit=${this.collect.params.limit}&page=${this.collect.params.page}&order_by=${this.collect.params.orderBy}&sort_by=${this.collect.params.sortBy}&order_id=${this.collect.params.orderId}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.getOrderDetail()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getOrderDetail() {
      try {
        this.order.loading = true

        let id = this.$route.params.id
        var response = await this.$axios.$get(`/api/v1/order/${id}`, {
          CancelToken: this.axiosCancelToken,
        })

        this.order.loading = false
        if (response.success) {
          this.order.data = response.data
          this.collect.params.orderId = this.order.data.id
          this.getCollectList()
        }
      } catch (error) {
        this.order.loading = false
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
    async getCollectList() {
      try {
        this.collect.loading = true
        var response = await this.$axios.$get(this.urlGetCollectList, {
          CancelToken: this.axiosCancelToken,
        })

        this.collect.loading = false
        if (response.success) {
          this.collect.params.page++
          this.collect.list = response.data
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.collect.loading = false
        }
      }
    },
    async getCollectListInfinite($state) {
      try {
        var response = await this.$axios.$get(this.urlGetCollectList, {
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          if (response.data.length > 0) {
            this.collect.params.page++
            this.collect.list.push(...response.data)

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
  },
}
</script>
