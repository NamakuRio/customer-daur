<template>
  <div>
    <HeaderSearch placeholder="Cari Lokasi" @search="searchResult">
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
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0342 20.083C11.0342 19.78 11.1546 19.4894 11.3688 19.2751C11.5831 19.0608 11.8737 18.9404 12.1768 18.9404L27.0307 18.9404C27.3337 18.9404 27.6244 19.0608 27.8386 19.2751C28.0529 19.4894 28.1733 19.78 28.1733 20.083C28.1733 20.3861 28.0529 20.6767 27.8386 20.891C27.6244 21.1053 27.3337 21.2256 27.0307 21.2256H12.1768C11.8737 21.2256 11.5831 21.1053 11.3688 20.891C11.1546 20.6767 11.0342 20.3861 11.0342 20.083Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </template>
    </HeaderSearch>
    <div class="with-header">
      <div>
        <div class="bg-white">
          <Loader v-if="search.loading" />
          <template v-else>
            <div class="flex flex-col" v-if="search.results.length > 0">
              <div
                v-for="item in search.results"
                :key="item?.place_id"
                class="p-5 border-b border-black cursor-pointer border-opacity-10"
              >
                <p class="text-base font-medium text-black">
                  {{ item?.structured_formatting?.main_text }}
                </p>
                <p class="mt-1 text-sm font-medium text-grey-2">
                  {{ item?.description }}
                </p>
              </div>
            </div>
            <div
              class="absolute inset-0 flex items-center w-full"
              v-else-if="
                search.keyword &&
                search.keyword.length > 3 &&
                search.results.length == 0
              "
            >
              <div class="block m-auto text-center">
                <img
                  src="~/assets/images/error/logo-2.png"
                  alt="error logo"
                  class="w-auto max-w-[240px]"
                />
                <p class="text-sm text-grey-3">Lokasi tidak ditemukan</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  head() {
    return !window.google
      ? {
          script: [
            {
              hid: 'maps-googleapis',
              src: `https://maps.googleapis.com/maps/api/js?libraries=places&key=${this.maps.apiKey}`,
              async: true,
              defer: true,
            },
          ],
        }
      : {}
  },
  data() {
    return {
      maps: {
        apiKey: 'AIzaSyDsBa1b021I8aR_VSRt6cDKeGG2vcSBWao',
      },
      search: {
        timer: null,
        keyword: null,
        results: [],
        loading: false,
      },
    }
  },
  methods: {
    searchResult(e) {
      if (this.search.timer) {
        clearTimeout(this.search.timer)
        this.search.timer = null
      }
      this.search.timer = setTimeout(() => {
        this.search.keyword = e
        this.search.results = []
        if (this.search.keyword.length <= 3) {
          this.search.results = []
        } else {
          this.search.loading = true
          let _self = this
          new google.maps.places.AutocompleteService().getQueryPredictions(
            {
              input: this.search.keyword,
            },
            function (results, status) {
              if (status === 'OK') {
                _self.search.results = results
                _self.search.loading = false
              } else if (status === 'ZERO_RESULTS') {
                _self.search.results = []
                _self.search.loading = false
              }
            }
          )
        }
      }, 400)
    },
  },
}
</script>
