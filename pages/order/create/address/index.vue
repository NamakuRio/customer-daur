<template>
  <div>
    <Header title="Alamat" :left-action="true" :right-action="true">
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
      <template #right-action>
        <NuxtLink
          :to="
            $route.query?.ref
              ? `/order/create/address/search?ref=/order/create/address?ref=${urlBack}`
              : '/order/create/address/search'
          "
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.125 20.1248L15.8259 15.8181M18.2084 10.0623C18.2084 12.2227 17.3501 14.2947 15.8225 15.8223C14.2949 17.35 12.2229 18.2082 10.0625 18.2082C7.90211 18.2082 5.83019 17.35 4.30255 15.8223C2.77491 14.2947 1.91669 12.2227 1.91669 10.0623C1.91669 7.90193 2.77491 5.83 4.30255 4.30236C5.83019 2.77472 7.90211 1.9165 10.0625 1.9165C12.2229 1.9165 14.2949 2.77472 15.8225 4.30236C17.3501 5.83 18.2084 7.90193 18.2084 10.0623V10.0623Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
      </template>
    </Header>
    <div class="with-header">
      <div>
        <div ref="maps" class="w-full" style="height: calc(100vh - 56px)"></div>
        <div
          class="fixed bottom-0 mx-auto w-full max-w-[444px] p-5 bg-white"
          ref="mapsDetail"
        >
          <div v-if="maps.dragged" class="min-h-[246px]">
            <Loader />
          </div>
          <div v-else>
            <div
              class="flex items-center justify-start cursor-pointer"
              @click="getUserLocation"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px]"
              >
                <path
                  d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                  fill="#F17E60"
                />
                <path
                  d="M9.75 3.05175V1.5H8.25V3.05175C6.93022 3.22026 5.70373 3.82213 4.76293 4.76293C3.82213 5.70373 3.22026 6.93022 3.05175 8.25H1.5V9.75H3.05175C3.22001 11.0699 3.8218 12.2965 4.76265 13.2374C5.70349 14.1782 6.93013 14.78 8.25 14.9482V16.5H9.75V14.9482C11.0699 14.7801 12.2966 14.1784 13.2375 13.2375C14.1784 12.2966 14.7801 11.0699 14.9482 9.75H16.5V8.25H14.9482C14.78 6.93013 14.1782 5.70349 13.2374 4.76265C12.2965 3.8218 11.0699 3.22001 9.75 3.05175ZM9 13.5C6.51825 13.5 4.5 11.4818 4.5 9C4.5 6.51825 6.51825 4.5 9 4.5C11.4818 4.5 13.5 6.51825 13.5 9C13.5 11.4818 11.4818 13.5 9 13.5Z"
                  fill="#F17E60"
                />
              </svg>
              <p class="ml-3 text-sm select-none text-secondary">
                Gunakan lokasi saat ini
              </p>
            </div>
            <div class="mt-6">
              <p class="text-sm font-extrabold text-black">
                Alamat yang Anda pilih
              </p>
              <div class="flex items-start justify-start mt-3">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]"
                >
                  <g clip-path="url(#clip0_158_2497)">
                    <path
                      d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 8C4.89687 8 4 7.10312 4 6C4 4.89687 4.89687 4 6 4C7.10313 4 8 4.89687 8 6C8 7.10312 7.10313 8 6 8Z"
                      fill="#F17E60"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_158_2497">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p class="ml-3 text-sm text-grey-2">
                  {{ addresses?.address }}
                </p>
              </div>
              <input
                type="text"
                class="block w-full p-4 mt-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                placeholder="Alamat detail"
              />
            </div>
            <NuxtLink
              to="/order/create/detail"
              class="mt-4 btn btn--primary btn--block btn--rounded"
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
  head() {
    return !window.google
      ? {
          script: [
            {
              hid: 'maps-googleapis',
              src: `https://maps.googleapis.com/maps/api/js?libraries=places&key=${this.maps.apiKey}`,
              async: true,
              defer: true,
              callback: this.initMap,
            },
          ],
        }
      : {}
  },
  data() {
    return {
      maps: {
        dragged: false,
        apiKey: 'AIzaSyDsBa1b021I8aR_VSRt6cDKeGG2vcSBWao',
        map: null,
        target: null,
        defaultLocation: {
          lat: -6.176279,
          lng: 106.8250734,
        },
        marker: {
          base: null,
          target: null,
          targetIcon:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCAzMSA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1OF8yNDk5KSI+CjxwYXRoIGQ9Ik0yNC45MDQ3IDI4LjU0NUMyMi4wNTY3IDMzLjIzOTUgMTguNjg4OSAzNy43MSAxNi42Mjg0IDQwLjMzMDRDMTYuMDM1OCA0MS4wNzgzIDE0Ljk2NCA0MS4wNzgzIDE0LjM3MTUgNDAuMzMwMkMxMi4zMTA5IDM3LjcwOTggOC45NDMyOCAzMy4yMzk0IDYuMDk1MjkgMjguNTQ1QzQuNjcwODMgMjYuMTk3IDMuMzg4MDIgMjMuODEyIDIuNDY0MDEgMjEuNTg3OUMxLjUzMzI5IDE5LjM0NzcgMSAxNy4zNDg3IDEgMTUuNzVDMSA3LjU5MTgzIDcuNTEwMDIgMSAxNS41IDFDMjMuNDkgMSAzMCA3LjU5MTgzIDMwIDE1Ljc1QzMwIDE3LjM0ODcgMjkuNDY2NyAxOS4zNDc3IDI4LjUzNiAyMS41ODc5QzI3LjYxMiAyMy44MTIgMjYuMzI5MiAyNi4xOTcgMjQuOTA0NyAyOC41NDVaTTkuMzMzMzMgMTUuNzVDOS4zMzMzMyAxOS4xODI4IDEyLjA4MyAyMiAxNS41IDIyQzE4LjkxNyAyMiAyMS42NjY3IDE5LjE4MjggMjEuNjY2NyAxNS43NUMyMS42NjY3IDEyLjMxNzIgMTguOTE3IDkuNSAxNS41IDkuNUMxMi4wODMgOS41IDkuMzMzMzMgMTIuMzE3MiA5LjMzMzMzIDE1Ljc1WiIgZmlsbD0iI0YxN0U2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTU4XzI0OTkiPgo8cmVjdCB3aWR0aD0iMzEiIGhlaWdodD0iNDIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
        },
      },
      addresses: {
        coordinate: {
          lat: null,
          lng: null,
        },
        address: null,
      },
    }
  },
  computed: {
    urlBack() {
      return this.$route.query?.ref || '/order/create/waste'
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.maps.map === null && window.google) {
        this.initMap()
      }
    }, 1000)

    this.$refs.maps.style.setProperty(
      `height`,
      `calc(100vh - (56px + ${this.$refs.mapsDetail.offsetHeight}px))`
    )
  },
  methods: {
    initMap() {
      let maps = this.maps
      let _self = this

      maps.target = this.$refs.maps
      let indonesian = new google.maps.LatLng(
        maps.defaultLocation.lat,
        maps.defaultLocation.lng
      )
      maps.map = new google.maps.Map(maps.target, {
        center: indonesian,
        zoom: 16,
        disableDefaultUI: true,
        gestureHandling: 'greedy',
      })

      maps.marker.target = new google.maps.Marker({
        position: indonesian,
        map: maps.map,
        icon: maps.marker.targetIcon,
        animation: google.maps.Animation.DROP,
        draggable: false,
      })

      this.getUserLocation()

      // handle event marker target
      maps.marker.target.addListener('click', function () {
        if (maps.marker.target.getAnimation() !== null) {
          maps.marker.target.setAnimation(null)
        } else {
          maps.marker.target.setAnimation(google.maps.Animation.BOUNCE)
        }
      })

      //handle event maps
      google.maps.event.addListener(maps.map, 'drag', function (e) {
        let center = maps.map.getCenter()
        maps.marker.target.setPosition(center)

        maps.dragged = true
      })

      google.maps.event.addListener(maps.map, 'dragend', function (e) {
        let center = maps.map.getCenter()
        maps.marker.target.setPosition(center)

        let pos = {
          lat: maps.marker.target.getPosition().lat(),
          lng: maps.marker.target.getPosition().lng(),
        }

        setTimeout(() => {
          _self.addresses.coordinate = pos
          const callback = (response) => {
            let data = response[0]
            _self.addresses.address = data.formatted_address

            maps.dragged = false
          }
          _self.geocodeLatLng(pos, callback)
        }, 300)
      })

      google.maps.event.addListener(maps.map, 'zoom_changed', function (e) {
        let center = maps.map.getCenter()
        maps.marker.target.setPosition(center)

        let pos = {
          lat: maps.marker.target.getPosition().lat(),
          lng: maps.marker.target.getPosition().lng(),
        }

        setTimeout(() => {
          _self.addresses.coordinate = pos
          const callback = (response) => {
            let data = response[0]
            _self.addresses.address = data.formatted_address
          }
          _self.geocodeLatLng(pos, callback)
        }, 300)
      })

      google.maps.event.addListener(maps.map, 'tilesloaded', function (e) {
        let center = maps.map.getCenter()
        maps.marker.target.setPosition(center)
      })
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.setLocationFromGPS,
          this.handleErrorGPS
        )
      } else {
        this.$store.commit('notification/showNotification', {
          type: 'error',
          message: 'Geolokasi tidak didukung oleh browser ini.',
        })
      }
    },
    setLocationFromGPS(location) {
      let pos = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }

      this.maps.map.setZoom(16)
      this.maps.marker.target.setPosition(pos)
      this.maps.map.panTo(pos)

      this.addresses.coordinate = pos
      const callback = (response) => {
        let data = response[0]
        this.addresses.address = data.formatted_address
      }
      this.geocodeLatLng(pos, callback)
    },
    handleErrorGPS(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.$store.commit('notification/showNotification', {
            type: 'error',
            message: 'Pengguna menolak permintaan Geolokasi.',
          })
          break
        case error.POSITION_UNAVAILABLE:
          this.$store.commit('notification/showNotification', {
            type: 'error',
            message: 'Informasi lokasi tidak tersedia.',
          })
          break
        case error.TIMEOUT:
          this.$store.commit('notification/showNotification', {
            type: 'error',
            message: 'Permintaan untuk mendapatkan lokasi pengguna habis.',
          })
          break
        case error.UNKNOWN_ERROR:
          this.$store.commit('notification/showNotification', {
            type: 'error',
            message: 'Terjadi kesalahan yang tidak diketahui.',
          })
          break
      }
    },
    geocodeLatLng(location, callback) {
      new google.maps.Geocoder().geocode(
        {
          location,
        },
        function (results, status) {
          if (status === 'OK') {
            if (typeof callback == 'function') {
              callback(results)
            }
          } else {
            this.$store.commit('notification/showNotification', {
              type: 'error',
              message: `Geocoder failed due to: ${status}`,
            })
          }
        }
      )
    },
  },
}
</script>
