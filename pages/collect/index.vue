<template>
  <div>
    <Header title="Pengangkutan" :right-action="true">
      <template #right-action>
        <NuxtLink to="/collect/history">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7083 3.625C12.824 3.625 10.0579 4.77076 8.01847 6.81021C5.97901 8.84967 4.83325 11.6158 4.83325 14.5H1.20825L5.90867 19.2004L5.99325 19.3696L10.8749 14.5H7.24992C7.24992 9.82375 11.032 6.04167 15.7083 6.04167C20.3845 6.04167 24.1666 9.82375 24.1666 14.5C24.1666 19.1763 20.3845 22.9583 15.7083 22.9583C13.3762 22.9583 11.2616 22.0038 9.73909 20.4692L8.02325 22.185C9.03029 23.1976 10.2278 24.0008 11.5468 24.5483C12.8658 25.0958 14.2801 25.3768 15.7083 25.375C18.5925 25.375 21.3586 24.2292 23.398 22.1898C25.4375 20.1503 26.5833 17.3842 26.5833 14.5C26.5833 11.6158 25.4375 8.84967 23.398 6.81021C21.3586 4.77076 18.5925 3.625 15.7083 3.625ZM14.4999 9.66667V15.7083L19.6353 18.7533L20.5658 17.2067L16.3124 14.6812V9.66667H14.4999Z"
              fill="white"
            />
          </svg>
        </NuxtLink>
      </template>
    </Header>
    <div class="with-header with-bottom-navbar">
      <Loader
        v-if="
          (collect.onDemand.loading && collect.onDemand.isFirst) ||
          (collect.scheduled.loading && collect.scheduled.isFirst)
        "
      />
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
                @keyup="searchCollect($event.target.value)"
              />
            </div>
          </div>
          <div class="p-5 border-b border-black border-opacity-10">
            <div class="flex flex-row items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.60005 3.30005C5.72483 3.30005 4.88547 3.64773 4.2666 4.2666C3.64773 4.88547 3.30005 5.72483 3.30005 6.60005V15.4C3.30005 16.2753 3.64773 17.1146 4.2666 17.7335C4.88547 18.3524 5.72483 18.7 6.60005 18.7H15.4C16.212 18.7011 16.9956 18.4017 17.6 17.8596V16.9565C17.3649 17.0395 17.1141 17.0681 16.8663 17.0401C16.4769 17.3877 15.9643 17.6 15.4 17.6H6.60005C6.01657 17.6 5.45699 17.3683 5.04441 16.9557C4.63183 16.5431 4.40005 15.9835 4.40005 15.4V6.60005C4.40005 6.01657 4.63183 5.45699 5.04441 5.04441C5.45699 4.63183 6.01657 4.40005 6.60005 4.40005H15.4C15.9835 4.40005 16.5431 4.63183 16.9557 5.04441C17.3683 5.45699 17.6 6.01657 17.6 6.60005V12.925L18.26 12.43C18.3965 12.3277 18.5449 12.2496 18.7 12.1946V6.60005C18.7 5.72483 18.3524 4.88547 17.7335 4.2666C17.1146 3.64773 16.2753 3.30005 15.4 3.30005H6.60005ZM15.2394 8.63945C15.3427 8.53617 15.4007 8.3961 15.4007 8.25005C15.4007 8.104 15.3427 7.96392 15.2394 7.86065C15.1362 7.75737 14.9961 7.69935 14.85 7.69935C14.704 7.69935 14.5639 7.75737 14.4606 7.86065L9.35005 12.9723L7.53945 11.1606C7.43617 11.0574 7.2961 10.9994 7.15005 10.9994C7.004 10.9994 6.86392 11.0574 6.76065 11.1606C6.65737 11.2639 6.59935 11.404 6.59935 11.55C6.59935 11.6961 6.65737 11.8362 6.76065 11.9394L8.96065 14.1394C9.01174 14.1907 9.07243 14.2313 9.13925 14.259C9.20607 14.2868 9.2777 14.301 9.35005 14.301C9.42239 14.301 9.49403 14.2868 9.56085 14.259C9.62767 14.2313 9.68836 14.1907 9.73945 14.1394L15.2394 8.63945ZM19.4965 13.2583C19.5877 13.3041 19.6644 13.3743 19.718 13.4611C19.7716 13.548 19.8 13.648 19.8 13.75V19.25C19.8 19.3959 19.7421 19.5358 19.639 19.639C19.5358 19.7421 19.3959 19.8 19.25 19.8C19.1042 19.8 18.9643 19.7421 18.8611 19.639C18.758 19.5358 18.7 19.3959 18.7 19.25V14.85L17.38 15.84C17.3223 15.8834 17.2565 15.9149 17.1865 15.9328C17.1166 15.9508 17.0438 15.9547 16.9723 15.9445C16.9008 15.9343 16.832 15.9101 16.7698 15.8733C16.7077 15.8365 16.6534 15.7878 16.61 15.73C16.5667 15.6723 16.5352 15.6065 16.5173 15.5365C16.4993 15.4666 16.4954 15.3938 16.5056 15.3223C16.5158 15.2508 16.54 15.182 16.5768 15.1198C16.6136 15.0577 16.6623 15.0034 16.72 14.96L18.92 13.31C19.0018 13.2487 19.0991 13.2114 19.2009 13.2023C19.3027 13.1931 19.4051 13.2126 19.4965 13.2583Z"
                  fill="#F17E60"
                />
              </svg>
              <p class="ml-1 text-sm font-extrabold text-black">On-demand</p>
            </div>
            <Loader
              v-if="collect.onDemand.loading"
              classList=""
              styleList="height:250px;"
            />
            <template v-else>
              <div
                class="flex flex-col gap-3 pt-3 pb-4"
                v-if="collect.onDemand.list.length > 0"
              >
                <NuxtLink
                  v-for="item in collect.onDemand.list"
                  :key="item.id"
                  :to="`/collect/${item.id}`"
                  class="p-4 border rounded-lg cursor-pointer border-grey-1"
                >
                  <div class="flex flex-col gap-3">
                    <div class="flex items-start justify-between">
                      <div>
                        <p class="text-sm font-extrabold text-black">
                          {{ item?.collect_number }}
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
                    <p class="text-xs tetext-grey-3">
                      {{ item.address }}
                    </p>
                  </div>
                </NuxtLink>
                <infinite-loading
                  @infinite="getCollectOnDemandListInfinite"
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
          <div class="p-5">
            <div class="flex flex-row items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.60005 3.30005C5.72483 3.30005 4.88547 3.64773 4.2666 4.2666C3.64773 4.88547 3.30005 5.72483 3.30005 6.60005V15.4C3.30005 16.2753 3.64773 17.1146 4.2666 17.7335C4.88547 18.3524 5.72483 18.7 6.60005 18.7H15.4C16.212 18.7011 16.9956 18.4017 17.6 17.8596V16.9565C17.3649 17.0395 17.1141 17.0681 16.8663 17.0401C16.4769 17.3877 15.9643 17.6 15.4 17.6H6.60005C6.01657 17.6 5.45699 17.3683 5.04441 16.9557C4.63183 16.5431 4.40005 15.9835 4.40005 15.4V6.60005C4.40005 6.01657 4.63183 5.45699 5.04441 5.04441C5.45699 4.63183 6.01657 4.40005 6.60005 4.40005H15.4C15.9835 4.40005 16.5431 4.63183 16.9557 5.04441C17.3683 5.45699 17.6 6.01657 17.6 6.60005V12.925L18.26 12.43C18.3965 12.3277 18.5449 12.2496 18.7 12.1946V6.60005C18.7 5.72483 18.3524 4.88547 17.7335 4.2666C17.1146 3.64773 16.2753 3.30005 15.4 3.30005H6.60005ZM15.2394 8.63945C15.3427 8.53617 15.4007 8.3961 15.4007 8.25005C15.4007 8.104 15.3427 7.96392 15.2394 7.86065C15.1362 7.75737 14.9961 7.69935 14.85 7.69935C14.704 7.69935 14.5639 7.75737 14.4606 7.86065L9.35005 12.9723L7.53945 11.1606C7.43617 11.0574 7.2961 10.9994 7.15005 10.9994C7.004 10.9994 6.86392 11.0574 6.76065 11.1606C6.65737 11.2639 6.59935 11.404 6.59935 11.55C6.59935 11.6961 6.65737 11.8362 6.76065 11.9394L8.96065 14.1394C9.01174 14.1907 9.07243 14.2313 9.13925 14.259C9.20607 14.2868 9.2777 14.301 9.35005 14.301C9.42239 14.301 9.49403 14.2868 9.56085 14.259C9.62767 14.2313 9.68836 14.1907 9.73945 14.1394L15.2394 8.63945ZM19.4965 13.2583C19.5877 13.3041 19.6644 13.3743 19.718 13.4611C19.7716 13.548 19.8 13.648 19.8 13.75V19.25C19.8 19.3959 19.7421 19.5358 19.639 19.639C19.5358 19.7421 19.3959 19.8 19.25 19.8C19.1042 19.8 18.9643 19.7421 18.8611 19.639C18.758 19.5358 18.7 19.3959 18.7 19.25V14.85L17.38 15.84C17.3223 15.8834 17.2565 15.9149 17.1865 15.9328C17.1166 15.9508 17.0438 15.9547 16.9723 15.9445C16.9008 15.9343 16.832 15.9101 16.7698 15.8733C16.7077 15.8365 16.6534 15.7878 16.61 15.73C16.5667 15.6723 16.5352 15.6065 16.5173 15.5365C16.4993 15.4666 16.4954 15.3938 16.5056 15.3223C16.5158 15.2508 16.54 15.182 16.5768 15.1198C16.6136 15.0577 16.6623 15.0034 16.72 14.96L18.92 13.31C19.0018 13.2487 19.0991 13.2114 19.2009 13.2023C19.3027 13.1931 19.4051 13.2126 19.4965 13.2583Z"
                  fill="#F17E60"
                />
              </svg>
              <p class="ml-1 text-sm font-extrabold text-black">Terjadwal</p>
            </div>
            <Loader
              v-if="collect.scheduled.loading"
              classList=""
              styleList="height:250px;"
            />
            <template v-else>
              <div
                class="flex flex-col gap-3 pt-3 pb-4"
                v-if="collect.scheduled.list.length > 0"
              >
                <NuxtLink
                  v-for="item in collect.scheduled.list"
                  :key="item.id"
                  :to="`/collect/${item.id}`"
                  class="p-4 border rounded-lg cursor-pointer border-grey-1"
                >
                  <div class="flex flex-col gap-3">
                    <div class="flex items-start justify-between">
                      <div>
                        <p class="text-sm font-extrabold text-black">#01292</p>
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
                  @infinite="getCollectScheduledListInfinite"
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
    </div>
    <BottomNavbar />
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      collect: {
        onDemand: {
          isFirst: true,
          loading: true,
          list: [],
          params: {
            limit: 5,
            page: 1,
            orderBy: 'desc',
            sortBy: 'created_at',
            search: 'id',
            value: '',
            type: 'On-demand',
          },
          search: {
            timer: null,
          },
        },
        scheduled: {
          isFirst: true,
          loading: true,
          list: [],
          params: {
            limit: 5,
            page: 1,
            orderBy: 'desc',
            sortBy: 'created_at',
            search: 'id',
            value: '',
            type: 'Scheduled',
          },
          search: {
            timer: null,
          },
        },
      },
      axiosCancelToken: null,
    }
  },
  computed: {
    urlGetCollectOnDemandList() {
      return `/api/v1/collect?limit=${this.collect.onDemand.params.limit}&page=${this.collect.onDemand.params.page}&order_by=${this.collect.onDemand.params.orderBy}&sort_by=${this.collect.onDemand.params.sortBy}&search=${this.collect.onDemand.params.search}&value=${this.collect.onDemand.params.value}&type=${this.collect.onDemand.params.type}`
    },
    urlGetCollectScheduledList() {
      return `/api/v1/collect?limit=${this.collect.scheduled.params.limit}&page=${this.collect.scheduled.params.page}&order_by=${this.collect.scheduled.params.orderBy}&sort_by=${this.collect.scheduled.params.sortBy}&search=${this.collect.scheduled.params.search}&value=${this.collect.scheduled.params.value}&type=${this.collect.scheduled.params.type}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.getCollectOnDemandList()
    this.getCollectScheduledList()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getCollectOnDemandList() {
      try {
        this.collect.onDemand.loading = true
        var response = await this.$axios.$get(this.urlGetCollectOnDemandList, {
          CancelToken: this.axiosCancelToken,
        })

        this.collect.onDemand.loading = false
        if (response.success) {
          this.collect.onDemand.isFirst = false
          this.collect.onDemand.params.page++
          this.collect.onDemand.list = response.data
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.collect.onDemand.loading = false
        }
      }
    },
    async getCollectOnDemandListInfinite($state) {
      try {
        var response = await this.$axios.$get(this.urlGetCollectOnDemandList, {
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          if (response.data.length > 0) {
            this.collect.onDemand.params.page++
            this.collect.onDemand.list.push(...response.data)

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
    async getCollectScheduledList() {
      try {
        this.collect.scheduled.loading = true
        var response = await this.$axios.$get(this.urlGetCollectScheduledList, {
          CancelToken: this.axiosCancelToken,
        })

        this.collect.scheduled.loading = false
        if (response.success) {
          this.collect.scheduled.isFirst = false
          this.collect.scheduled.params.page++
          this.collect.scheduled.list = response.data
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.collect.scheduled.loading = false
        }
      }
    },
    async getCollectScheduledListInfinite($state) {
      try {
        var response = await this.$axios.$get(this.urlGetCollectScheduledList, {
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          if (response.data.length > 0) {
            this.collect.scheduled.params.page++
            this.collect.scheduled.list.push(...response.data)

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
    searchCollect(value) {
      if (this.collect.onDemand.search.timer) {
        clearTimeout(this.collect.onDemand.search.timer)
        this.collect.onDemand.search.timer = null
      }
      this.collect.onDemand.search.timer = setTimeout(() => {
        this.collect.onDemand.params.page = 1
        this.collect.onDemand.params.value = value
        this.collect.onDemand.list = []
        this.collect.onDemand.loading = true
        this.getCollectOnDemandList()
      }, 400)

      if (this.collect.scheduled.search.timer) {
        clearTimeout(this.collect.scheduled.search.timer)
        this.collect.scheduled.search.timer = null
      }
      this.collect.scheduled.search.timer = setTimeout(() => {
        this.collect.scheduled.params.page = 1
        this.collect.scheduled.params.value = value
        this.collect.scheduled.list = []
        this.collect.scheduled.loading = true
        this.getCollectScheduledList()
      }, 400)
    },
  },
}
</script>
