<template>
  <div>
    <Header title="Pilih Jenis Sampah" :left-action="true">
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
      <Loader v-if="waste.loading && waste.isFirst" />
      <div v-else>
        <div
          class="w-full p-4 bg-white border-b border-black border-opacity-10"
        >
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
              placeholder="Cari Jenis Sampah"
              @keyup="searchWaste($event.target.value)"
            />
          </div>
        </div>
        <Loader
          v-if="waste.loading && !waste.isFirst"
          classList=""
          styleList="height:calc(100vh - (56px + 96px + 122px));"
        />
        <template v-else>
          <div class="bg-white">
            <div class="flex flex-col" v-if="waste.list.length > 0">
              <NuxtLink
                v-for="item in waste.list"
                :key="item.id"
                :to="
                  $route.query?.ref
                    ? `/order/create/waste/${item.id}?ref=/order/create/waste?ref=${urlBack}`
                    : `/order/create/waste/${item.id}`
                "
                class="flex items-center justify-between px-5 py-4 border-b border-black cursor-pointer border-opacity-10"
              >
                <div class="flex items-center">
                  <img
                    :src="item?.image || '/assets/images/trashes/no-image.svg'"
                    alt=""
                    class="object-cover w-12 h-12 border rounded border-grey-1"
                  />
                  <div class="ml-4">
                    <p class="text-sm text-grey-3">{{ item?.name }}</p>
                  </div>
                </div>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[19px] min-h-[19px] max-w-[19px] max-h-[19px]"
                >
                  <path
                    d="M6.33334 3.1665L12.6667 9.49984L6.33334 15.8332"
                    stroke="#F17E60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </div>
            <div
              v-else
              class="inset-0 flex items-center w-full"
              style="height: calc(100vh - (56px + 96px + 122px))"
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
          </div>
        </template>
        <div
          v-if="!waste.isFirst"
          class="fixed bottom-0 w-full p-5 mx-auto bg-white max-w-[444px]"
          style="box-shadow: rgb(0 0 0 / 2%) 0px -6px 6px"
        >
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-grey-3">Total</p>
            <p class="text-base font-extrabold text-black">0</p>
          </div>
          <div class="flex items-center gap-3 mt-3">
            <NuxtLink
              :to="urlBack"
              class="btn btn--default btn--block btn--rounded"
            >
              Batal
            </NuxtLink>
            <NuxtLink
              to="/order/create/address"
              class="btn btn--primary btn--block btn--rounded"
            >
              Selanjutnya
            </NuxtLink>
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
      waste: {
        isFirst: true,
        loading: true,
        list: [],
        params: {
          limit: 5,
          page: 1,
          orderBy: 'desc',
          sortBy: 'created_at',
          status: 'active',
          search: 'name',
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
    urlBack() {
      return this.$route.query?.ref || '/'
    },
    urlGetWasteList() {
      return `/api/v1/waste?limit=${this.waste.params.limit}&page=${this.waste.params.page}&order_by=${this.waste.params.orderBy}&sort_by=${this.waste.params.sortBy}&status=${this.waste.params.status}&search=${this.waste.params.search}&value=${this.waste.params.value}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.getWasteList()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getWasteList() {
      try {
        this.waste.loading = true
        var response = await this.$axios.$get(this.urlGetWasteList, {
          CancelToken: this.axiosCancelToken,
        })

        this.waste.loading = false
        if (response.success) {
          this.waste.isFirst = false
          this.waste.params.page++
          this.waste.list = response.data
        }
      } catch (e) {
        if (!this.$axios.isCancel(e)) {
          this.waste.loading = false
        }
      }
    },
    async getWasteListInfinite($state) {
      try {
        var response = await this.$axios.$get(this.urlGetWasteList, {
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          if (response.data.length > 0) {
            this.waste.params.page++
            this.waste.list.push(...response.data)

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
    searchWaste(value) {
      if (this.waste.search.timer) {
        clearTimeout(this.waste.search.timer)
        this.waste.search.timer = null
      }
      this.waste.search.timer = setTimeout(() => {
        this.waste.params.page = 1
        this.waste.params.value = value
        this.waste.list = []
        this.waste.loading = true
        this.getWasteList()
      }, 400)
    },
  },
}
</script>
