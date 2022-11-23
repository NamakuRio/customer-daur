<template>
  <div>
    <Header title="Pemberitahuan" :left-action="true">
      <template #left-action>
        <NuxtLink to="/">
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
      <Loader v-if="notification.loading" />
      <div v-else>
        <div
          class="flex flex-col gap-3 p-5"
          v-if="notification.list.length > 0"
        >
          <div
            v-for="item in notification.list"
            :key="item.id"
            class="p-4 border rounded-lg cursor-pointer border-grey-1"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-start">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="max-w-[13px] max-h-[13px]"
                >
                  <g clip-path="url(#clip0_1846_5198)">
                    <path
                      d="M6.49993 0C5.98632 0 5.57136 0.391016 5.57136 0.875V1.4C3.45306 1.80469 1.85708 3.57109 1.85708 5.6875V6.20156C1.85708 7.48672 1.35507 8.72812 0.44971 9.69063L0.234977 9.91758C-0.00877252 10.1746 -0.0668083 10.5437 0.0811828 10.8582C0.229174 11.1727 0.562879 11.375 0.928504 11.375H12.0714C12.437 11.375 12.7678 11.1727 12.9187 10.8582C13.0696 10.5437 13.0086 10.1746 12.7649 9.91758L12.5502 9.69063C11.6448 8.72812 11.1428 7.48945 11.1428 6.20156V5.6875C11.1428 3.57109 9.54681 1.80469 7.4285 1.4V0.875C7.4285 0.391016 7.01355 0 6.49993 0ZM7.81444 13.4887C8.16266 13.1605 8.35708 12.7148 8.35708 12.25H4.64279C4.64279 12.7148 4.83721 13.1605 5.18542 13.4887C5.53364 13.8168 6.00663 14 6.49993 14C6.99324 14 7.46623 13.8168 7.81444 13.4887Z"
                      fill="#F17E60"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1846_5198">
                      <rect width="13" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h4 class="text-sm font-extrabold text-black ml-3">
                  Pembayaran Sukses
                </h4>
              </div>
              <p class="text-xs text-grey-2">2 jam lalu</p>
            </div>
            <div class="mt-4">
              <p class="text-xs text-grey-3">
                Selamat! Pembayaran untuk transaksi #01292 telah Kami terima
              </p>
            </div>
          </div>
          <infinite-loading
            @infinite="getNotificationListInfinite"
            spinner="spiral"
          >
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </infinite-loading>
        </div>
        <div v-else class="absolute inset-0 flex items-center w-full">
          <div class="block m-auto text-center">
            <img
              src="~/assets/images/icon/info.svg"
              alt="icon info"
              class="w-auto max-w-[120px]"
            />
            <p class="text-sm text-grey-3 mt-6">Data tidak tersedia</p>
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
      notification: {
        loading: true,
        list: [],
        params: {
          limit: 5,
          page: 1,
          orderBy: 'desc',
          sortBy: 'created_at',
        },
      },
      axiosCancelToken: null,
    }
  },
  computed: {
    urlGetNotificationList() {
      return `/api/v1/notification?limit=${this.notification.params.limit}&page=${this.notification.params.page}&order_by=${this.notification.params.orderBy}&sort_by=${this.notification.params.sortBy}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.getNotificationList()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getNotificationList() {
      try {
        this.notification.loading = true
        var response = await this.$axios.$get(this.urlGetNotificationList, {
          CancelToken: this.axiosCancelToken,
        })

        this.notification.loading = false
        if (response.success) {
          this.notification.params.page++
          this.notification.list = response.data
        }
      } catch (e) {
        if (!this.$axios.isCancel(e)) {
          this.notification.loading = false
        }
      }
    },
    async getNotificationListInfinite($state) {
      try {
        var response = await this.$axios.$get(this.urlGetNotificationList, {
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          if (response.data.length > 0) {
            this.notification.params.page++
            this.notification.list.push(...response.data)

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
  },
}
</script>
