<template>
  <div>
    <Header title="Informasi Jenis Sampah" :left-action="true">
      <template #left-action>
        <NuxtLink to="/account">
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
        <div
          class="sticky z-50 w-full p-4 bg-white border-b border-black top-14 border-opacity-10"
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
              v-model="trash.search.key"
            />
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <div v-for="item in trashes" :key="item.id">
              <div class="px-5 py-4 border-b border-black border-opacity-10">
                <h1 class="text-xs font-bold text-black">{{ item.name }}</h1>
              </div>
              <div class="flex flex-col">
                <div
                  v-for="item2 in item.list"
                  :key="item2.id"
                  class="flex items-center px-5 py-3 border-b border-black cursor-pointer border-opacity-10"
                  @click="openTrashDetail(item.id, item2.id)"
                >
                  <img
                    :src="item2.image"
                    alt="Foto Jenis Sampah"
                    class="rounded min-w-[47px] min-h-[41px] max-w-[47px] max-h-[41px]"
                    @error="errorLoadImage($event)"
                  />
                  <div class="flex items-center justify-between w-full ml-3">
                    <p class="text-xs text-grey-3">{{ item2.name }}</p>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.3335 3.1665L12.6668 9.49984L6.3335 15.8332"
                        stroke="#F17E60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Bottom Popup Detail Sampah -->
    <transition name="slide-bottom-popup">
      <div
        class="fixed bottom-0 flex items-end justify-end w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="trash.detail.popup"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="trash.detail.popup = false"
        ></div>
        <div
          class="bottom-0 z-10 content-center w-full transition-all duration-1000 content-bottom-popup"
        >
          <div class="w-full overflow-auto bg-white">
            <!-- content -->
            <div>
              <div class="px-5 pt-5 pb-6">
                <div>
                  <p class="text-xs font-medium text-grey-3">
                    {{ trash.detail?.content?.parent?.name }}
                  </p>
                  <h1 class="mt-1 text-base font-bold text-grey-3">
                    {{ trash.detail?.content?.children?.name }}
                  </h1>
                </div>
                <div class="mt-4">
                  <img
                    :src="trash.detail?.content?.children?.image"
                    alt="Foto Jenis Sampah"
                    class="w-full rounded min-h-[124px] max-h-[124px] object-contain"
                    @error="errorLoadImage($event)"
                  />
                  <p class="mt-3 text-xs font-bold">Deskripsi</p>
                  <div
                    class="flex flex-col gap-3 mt-[14px]"
                    v-html="trash.detail?.content?.parent?.description"
                  ></div>
                </div>
                <div class="mt-7">
                  <button
                    class="mr-2 font-medium btn btn--default btn--rounded btn--block"
                    @click="trash.detail.popup = false"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Bottom Popup Detail Sampah -->
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      trash: {
        list: [
          {
            id: 1,
            name: 'Kertas',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 10,
                name: 'Kardus',
                image: '/assets/images/trashes/1_kertas/1_kardus.png',
              },
              {
                id: 11,
                name: 'Putihan',
                image: '/assets/images/trashes/1_kertas/2_putihan.png',
              },
              {
                id: 12,
                name: 'Kertas Campur',
                image: '/assets/images/trashes/1_kertas/3_kertas-campur.png',
              },
            ],
          },
          {
            id: 2,
            name: 'Plastik',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 13,
                name: 'Botol Plastik',
                image: '/assets/images/trashes/2_plastik/1_botol-plastik.png',
              },
              {
                id: 14,
                name: 'Emberan',
                image: '/assets/images/trashes/2_plastik/2_emberan.png',
              },
              {
                id: 15,
                name: 'Kemasan',
                image: '/assets/images/trashes/2_plastik/3_kemasan.png',
              },
              {
                id: 16,
                name: 'Kresek',
                image: '/assets/images/trashes/2_plastik/4_kresek.png',
              },
              {
                id: 17,
                name: 'CD',
                image: '/assets/images/trashes/2_plastik/5_cd.png',
              },
              {
                id: 18,
                name: 'Styrofoam',
                image: '/assets/images/trashes/2_plastik/6_styrofoam.png',
              },
            ],
          },
          {
            id: 3,
            name: 'Kaca/Beling',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 19,
                name: 'Botol Beling',
                image:
                  '/assets/images/trashes/3_kaca-beling/1_botol-beling.png',
              },
              {
                id: 20,
                name: 'Kaca',
                image: '/assets/images/trashes/3_kaca-beling/2_kaca.png',
              },
            ],
          },
          {
            id: 4,
            name: 'Logam',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 21,
                name: 'Besi',
                image: '/assets/images/trashes/4_logam/1_besi.png',
              },
              {
                id: 22,
                name: 'Tembaga',
                image: '/assets/images/trashes/4_logam/2_tembaga.png',
              },
              {
                id: 23,
                name: 'Alumunium',
                image: '/assets/images/trashes/4_logam/3_alumunium.png',
              },
            ],
          },
          {
            id: 5,
            name: 'Elektronik',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 24,
                name: 'TV',
                image: '/assets/images/trashes/5_elektronik/1_tv.png',
              },
              {
                id: 25,
                name: 'Kabel',
                image: '/assets/images/trashes/5_elektronik/2_kabel.png',
              },
              {
                id: 26,
                name: 'Mesin Cuci',
                image: '/assets/images/trashes/5_elektronik/3_mesin-cuci.png',
              },
              {
                id: 27,
                name: 'Komputer',
                image: '/assets/images/trashes/5_elektronik/4_komputer.png',
              },
              {
                id: 28,
                name: 'Handphone',
                image: '/assets/images/trashes/5_elektronik/5_handphone.png',
              },
            ],
          },
          {
            id: 6,
            name: 'Minyak',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 29,
                name: 'Minyak Goreng',
                image: '/assets/images/trashes/6_minyak/1_minyak-goreng.png',
              },
              {
                id: 30,
                name: 'Oli',
                image: '/assets/images/trashes/6_minyak/2_oli.png',
              },
            ],
          },
          {
            id: 7,
            name: 'B3',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 31,
                name: 'Medis',
                image: '/assets/images/trashes/7_b3/1_medis.png',
              },
            ],
          },
          {
            id: 8,
            name: 'Kain',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 32,
                name: 'Baju',
                image: '/assets/images/trashes/8_kain/1_baju.png',
              },
              {
                id: 33,
                name: 'Celana',
                image: '/assets/images/trashes/8_kain/2_celana.png',
              },
              {
                id: 34,
                name: 'Bahan Kain',
                image: '/assets/images/trashes/8_kain/3_bahan-kain.png',
              },
            ],
          },
          {
            id: 9,
            name: 'Karet',
            description:
              '<p class="text-xs font-medium text-grey-2">Kami menerima semua jenis sampah plastik<ul class="text-xs font-medium list-disc list-inside text-grey-2"><li>Semua sampah diharapkan dalam keadaan bersih dan tidak ada isinya</li><li>Sampah juga perlu dipisahkan berdasarkan kategori plastik, kertas, kaca dan kaleng</li></ul></p>',
            list: [
              {
                id: 35,
                name: 'Ban Bekas',
                image: '/assets/images/trashes/9_karet/1_ban.png',
              },
            ],
          },
        ],
        detail: {
          content: {
            parent: null,
            children: null,
          },
          popup: false,
        },
        search: {
          key: '',
          list: [],
        },
      },
    }
  },
  computed: {
    trashes() {
      if (this.trash.search.key !== '') {
        return this.searchTrash(this.trash.search.key)
      } else {
        return this.trash.list
      }
    },
  },
  methods: {
    searchTrash(value) {
      let trashes = []

      trashes = this.trash.list
      trashes = trashes.filter(
        (item) =>
          item.list.filter((item2) => item2.name.toLowerCase().includes(value))
            .length > 0 || item.name.toLocaleLowerCase().includes(value)
      )

      return trashes
    },
    openTrashDetail(parentId, childId) {
      let parent = this.trashes.find((item) => item.id === parentId)
      let children = parent.list.find((item) => item.id === childId)

      this.trash.detail.content = {
        parent,
        children,
      }
      this.trash.detail.popup = true
    },
    errorLoadImage(event) {
      event.target.src = '/assets/images/trashes/no-image.svg'
      event.onerror = ''
    },
  },
}
</script>
