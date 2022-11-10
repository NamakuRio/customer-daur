<template>
  <div>
    <Header title="Order Pengangkutan" :left-action="true">
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
        <div class="bg-white">
          <div class="p-5">
            <p class="text-sm font-extrabold text-black">Alamat Penjemputan</p>
            <div class="flex items-start justify-between mt-3">
              <div class="flex items-start justify-start">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[12px] min-h-[16px] max-w-[12px] max-h-[16px]"
                >
                  <g clip-path="url(#clip0_1847_6615)">
                    <path
                      d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 8C4.89687 8 4 7.10312 4 6C4 4.89687 4.89687 4 6 4C7.10313 4 8 4.89687 8 6C8 7.10312 7.10313 8 6 8Z"
                      fill="#F17E60"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1847_6615">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p class="ml-3 text-sm text-grey-2">
                  Jl. Soreang Rahayu IV, Nomor 289, Kabutaten Bogor, Jawa Barat
                  50129
                </p>
              </div>
              <div class="ml-3 cursor-pointer">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[19px] min-h-[19px] max-w-[19px] max-h-[19px]"
                >
                  <path
                    d="M6.33337 3.1665L12.6667 9.49984L6.33337 15.8332"
                    stroke="#F17E60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <input
                type="text"
                class="block w-full p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                placeholder="Alamat detail"
              />
            </div>
          </div>
          <div class="p-5 border-t border-black border-opacity-10">
            <p class="text-sm font-extrabold text-black">
              Pilihan Waktu Pengangkutan
            </p>
            <div class="mt-4">
              <div class="flex items-center gap-x-3 gap-y-4">
                <div class="flex items-center w-full">
                  <input
                    id="radio-pickup-ondemand"
                    type="radio"
                    name="radio-pickup"
                    class="hidden custom-selected-radio"
                  />
                  <label
                    for="radio-pickup-ondemand"
                    class="flex items-center justify-start w-full text-sm text-black text-opacity-75 cursor-pointer"
                  >
                    <span
                      class="inline-block w-4 h-4 border-2 rounded-full border-grey-1"
                    ></span>
                    <p class="ml-3">Sekarang</p>
                  </label>
                </div>
                <div class="flex items-center w-full">
                  <input
                    id="radio-pickup-scheduled"
                    type="radio"
                    name="radio-pickup"
                    class="hidden custom-selected-radio"
                  />
                  <label
                    for="radio-pickup-scheduled"
                    class="flex items-center justify-start w-full text-sm text-black text-opacity-75 cursor-pointer"
                  >
                    <span
                      class="inline-block w-4 h-4 border-2 rounded-full border-grey-1"
                    ></span>
                    <p class="ml-3">Atur Jadwal</p>
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-center gap-4">
                <input
                  type="text"
                  class="block w-2/3 p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                  placeholder="hari / bulan / tahun"
                />
                <input
                  type="text"
                  class="block w-1/3 p-4 text-sm text-black bg-gray-100 rounded focus:outline-none"
                  placeholder="00:00"
                />
              </div>
            </div>
          </div>
          <div class="p-5 border-t border-black border-opacity-10">
            <p class="text-sm font-extrabold text-black">Sampah</p>
          </div>
          <div class="p-5 border-t border-black border-opacity-10">
            <button class="btn btn--primary btn--rounded btn--block">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
}
</script>
<style>
input[type='radio'].custom-selected-radio + label {
  @apply transition duration-200 border border-grey-1 rounded-lg p-4 text-sm text-black;
}

input[type='radio'].custom-selected-radio:checked + label {
  @apply border-secondary bg-secondary bg-opacity-25 text-secondary;
}

input[type='radio'].custom-selected-radio + label span {
  @apply transition-all duration-200;
}
input[type='radio'].custom-selected-radio:checked + label span {
  @apply bg-secondary border-white;
}
</style>
