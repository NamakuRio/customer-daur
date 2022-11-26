<template>
  <div>
    <Header title="Rincian Order" :left-action="true">
      <template #left-action>
        <NuxtLink to="/order/create/detail">
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
      <Loader v-if="dropPoint.loading || price.loading" />
      <template v-else>
        <div>
          <div class="bg-white">
            <div class="flex flex-col gap-5 p-5">
              <div class="flex items-center justify-between">
                <p class="text-sm font-extrabold text-black">Rincian Order</p>
                <NuxtLink
                  to="/order/create/detail"
                  class="text-sm font-medium text-secondary"
                  >Ubah Pemesanan</NuxtLink
                >
              </div>
              <div class="flex items-start justify-start">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]"
                >
                  <path
                    d="M8.91504 1.83159C8.64943 1.56589 8.28915 1.41658 7.91346 1.4165H2.83329C2.45757 1.4165 2.09723 1.56576 1.83156 1.83144C1.56588 2.09711 1.41663 2.45745 1.41663 2.83317V7.91334C1.41671 8.28903 1.56601 8.64931 1.83171 8.91492L7.49838 14.5816C7.76404 14.8472 8.12431 14.9964 8.49996 14.9964C8.87561 14.9964 9.23588 14.8472 9.50154 14.5816L14.5817 9.50142C14.8473 9.23576 14.9965 8.87549 14.9965 8.49984C14.9965 8.12419 14.8473 7.76392 14.5817 7.49825L8.91504 1.83159ZM4.95829 6.37484C4.58248 6.37474 4.22209 6.22536 3.95641 5.95955C3.69073 5.69374 3.54153 5.33328 3.54163 4.95746C3.54172 4.58165 3.6911 4.22126 3.95691 3.95558C4.22272 3.6899 4.58318 3.5407 4.959 3.5408C5.33482 3.54089 5.69521 3.69027 5.96088 3.95608C6.22656 4.22189 6.37576 4.58235 6.37567 4.95817C6.37557 5.33399 6.22619 5.69438 5.96038 5.96005C5.69457 6.22573 5.33411 6.37493 4.95829 6.37484Z"
                    fill="#3E7380"
                  />
                </svg>
                <div class="ml-3">
                  <p class="text-sm text-grey-2">Jenis Order</p>
                  <p class="mt-1 text-sm text-grey-3">
                    {{ temporaryCreateData?.order_type || '-' }}
                  </p>
                </div>
              </div>
              <div class="flex items-start justify-start">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]"
                >
                  <g clip-path="url(#clip0_1847_6793)">
                    <path
                      d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 8C4.89687 8 4 7.10312 4 6C4 4.89687 4.89687 4 6 4C7.10313 4 8 4.89687 8 6C8 7.10312 7.10313 8 6 8Z"
                      fill="#3E7380"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1847_6793">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div class="ml-3">
                  <p class="text-sm text-grey-2">Alamat Penjemputan</p>
                  <p class="mt-1 text-sm text-grey-3">
                    {{ temporaryCreateData?.address || '-' }}
                  </p>
                </div>
              </div>
              <div class="flex items-start justify-start">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]"
                >
                  <path
                    d="M3.54167 15.5832H13.4583C14.2396 15.5832 14.875 14.9478 14.875 14.1665V4.24984C14.875 3.46855 14.2396 2.83317 13.4583 2.83317H12.0417V1.4165H10.625V2.83317H6.375V1.4165H4.95833V2.83317H3.54167C2.76037 2.83317 2.125 3.46855 2.125 4.24984V14.1665C2.125 14.9478 2.76037 15.5832 3.54167 15.5832ZM3.54167 4.95817H13.4583V6.37484H3.54167V4.95817Z"
                    fill="#3E7380"
                  />
                </svg>
                <div class="ml-3">
                  <p class="text-sm text-grey-2">Jadwal Pengangkutan</p>
                  <p class="mt-1 text-sm text-grey-3">{{ pickupSchedule }}</p>
                </div>
              </div>
              <div>
                <div class="flex items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px]"
                  >
                    <path
                      d="M14.6713 9.07375L15.8195 11.0627C16.0499 11.4617 16.1712 11.9143 16.1712 12.375C16.1713 12.8358 16.05 13.2884 15.8198 13.6874C15.5895 14.0864 15.2582 14.4178 14.8593 14.6483C14.4603 14.8787 14.0078 15.0001 13.547 15.0002H11.9998V16.5002L8.2498 13.8752L11.9998 11.2502V12.7502H13.5463C13.6065 12.7506 13.6659 12.7364 13.7194 12.7088C13.773 12.6813 13.819 12.6412 13.8537 12.592C13.8884 12.5428 13.9107 12.4859 13.9187 12.4262C13.9267 12.3666 13.9201 12.3058 13.8995 12.2492L13.871 12.1877L12.7228 10.1987L14.6713 9.07375ZM5.80255 7.03825L6.20005 11.5982L4.90255 10.8482L4.12855 12.1877C4.09812 12.2397 4.08071 12.2983 4.0778 12.3584C4.07489 12.4186 4.08657 12.4785 4.11184 12.5332C4.1371 12.5878 4.17521 12.6356 4.22292 12.6723C4.27062 12.7091 4.3265 12.7338 4.3858 12.7442L4.4533 12.7502H6.7498V15.0002H4.4533C3.99252 15.0002 3.53986 14.8789 3.14082 14.6485C2.74178 14.4181 2.41041 14.0868 2.18003 13.6877C1.94965 13.2887 1.82836 12.836 1.82836 12.3752C1.82837 11.9145 1.94966 11.4618 2.18005 11.0627L2.9533 9.72325L1.6543 8.97325L5.8018 7.03825H5.80255ZM10.3123 2.227C10.7113 2.45725 11.0428 2.78875 11.273 3.18775L12.0455 4.52725L13.3453 3.77725L12.9478 8.33725L8.7988 6.40225L10.0978 5.65225L9.32455 4.31275C9.29469 4.26047 9.25264 4.21619 9.20198 4.18368C9.15132 4.15116 9.09355 4.13137 9.03359 4.12599C8.97363 4.12062 8.91326 4.12981 8.85763 4.1528C8.80199 4.17578 8.75273 4.21187 8.71405 4.258L8.67505 4.31275L7.52755 6.30175L5.5783 5.17675L6.7258 3.18775C6.89816 2.88912 7.12767 2.62739 7.40121 2.41748C7.67475 2.20758 7.98697 2.05362 8.32002 1.9644C8.65307 1.87518 9.00044 1.85245 9.34228 1.89751C9.68412 1.94257 10.0137 2.05453 10.3123 2.227Z"
                      fill="#3E7380"
                    />
                  </svg>
                  <p class="ml-2 text-sm font-medium text-grey-2">
                    Jenis Sampah
                  </p>
                </div>
                <div class="mt-4">
                  <div class="border border-grey-1">
                    <div class="flex flex-col gap-4 p-4">
                      <div
                        v-for="item in temporaryCreateData?.wastes"
                        :key="item.id"
                        class="flex items-center justify-between"
                      >
                        <p class="text-sm font-medium text-grey-3">
                          {{ item?.name || '-' }}
                        </p>
                        <p class="text-sm font-extrabold text-black">
                          {{ item?.weight || 0 }} kg
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div class="flex flex-col gap-4 p-4">
                      <div class="flex items-center justify-between">
                        <p class="text-sm font-extrabold text-grey-3">Total</p>
                        <p class="text-sm font-extrabold text-black">
                          {{ temporaryCreateData?.wasteWeight || 0 }} kg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-start justify-start">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]"
                >
                  <path
                    d="M1.83777 4.2752C1.83777 3.4058 2.54337 2.7002 3.41277 2.7002H11.0259C11.8953 2.7002 12.6009 3.4058 12.6009 4.2752V5.4002H13.3938C13.6446 5.4002 13.8905 5.4701 14.1038 5.60205C14.3172 5.73399 14.4895 5.92277 14.6016 6.1472L16.0578 9.05869C16.1516 9.24588 16.2006 9.45232 16.2009 9.6617V13.0502C16.2009 13.4082 16.0586 13.7516 15.8055 14.0048C15.5523 14.258 15.2089 14.4002 14.8509 14.4002H13.4559C13.3526 14.9088 13.0766 15.3661 12.6748 15.6946C12.2729 16.023 11.7699 16.2025 11.2509 16.2025C10.7319 16.2025 10.2288 16.023 9.82695 15.6946C9.4251 15.3661 9.14915 14.9088 9.04587 14.4002H8.05587C7.95259 14.9088 7.67664 15.3661 7.27479 15.6946C6.87293 16.023 6.36988 16.2025 5.85087 16.2025C5.33186 16.2025 4.82881 16.023 4.42695 15.6946C4.0251 15.3661 3.74915 14.9088 3.64587 14.4002H3.41277C2.99505 14.4002 2.59445 14.2343 2.29908 13.9389C2.00371 13.6435 1.83777 13.2429 1.83777 12.8252V4.2752ZM12.6009 6.3002V9.0002H15.0219L13.797 6.5486C13.7596 6.47394 13.7021 6.41117 13.6311 6.3673C13.56 6.32343 13.4782 6.3002 13.3947 6.3002H12.6H12.6009ZM5.85087 12.6002C5.49283 12.6002 5.14945 12.7424 4.89627 12.9956C4.6431 13.2488 4.50087 13.5922 4.50087 13.9502C4.50087 14.3082 4.6431 14.6516 4.89627 14.9048C5.14945 15.158 5.49283 15.3002 5.85087 15.3002C6.20891 15.3002 6.55229 15.158 6.80546 14.9048C7.05864 14.6516 7.20087 14.3082 7.20087 13.9502C7.20087 13.5922 7.05864 13.2488 6.80546 12.9956C6.55229 12.7424 6.20891 12.6002 5.85087 12.6002ZM9.90087 13.9502C9.90087 14.3082 10.0431 14.6516 10.2963 14.9048C10.5494 15.158 10.8928 15.3002 11.2509 15.3002C11.6089 15.3002 11.9523 15.158 12.2055 14.9048C12.4586 14.6516 12.6009 14.3082 12.6009 13.9502C12.6009 13.5922 12.4586 13.2488 12.2055 12.9956C11.9523 12.7424 11.6089 12.6002 11.2509 12.6002C10.8928 12.6002 10.5494 12.7424 10.2963 12.9956C10.0431 13.2488 9.90087 13.5922 9.90087 13.9502Z"
                    fill="#3E7380"
                  />
                </svg>
                <div class="ml-3">
                  <p class="text-sm text-grey-2">Jenis Kendaraan</p>
                  <p class="mt-1 text-sm text-grey-3">
                    {{ price?.data?.vehicle }}
                  </p>
                  <p class="mt-1 text-xs text-grey-3 text-opacity-70">
                    Volume maximum : 35cm x 30cm x 35cm
                  </p>
                </div>
              </div>
            </div>
            <div
              class="p-5 border-t border-black border-opacity-10 flex flex-col gap-6"
            >
              <!-- Start Section Alert -->
              <div class="flex flex-col gap-4">
                <div
                  class="flex items-start justify-start p-3 border rounded border-success bg-success bg-opacity-10"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="min-w-[21px] min-h-[21px] max-w-[21px] max-h-[21px]"
                  >
                    <path
                      d="M2.99997 5.19997C2.99997 4.6165 3.23176 4.05692 3.64434 3.64434C4.05692 3.23176 4.6165 2.99997 5.19997 2.99997H6.19997C6.78087 2.99964 7.33806 2.76957 7.74997 2.35997L8.44997 1.65997C8.65442 1.45437 8.89749 1.29121 9.16521 1.17988C9.43294 1.06855 9.72003 1.01123 10.01 1.01123C10.2999 1.01123 10.587 1.06855 10.8547 1.17988C11.1225 1.29121 11.3655 1.45437 11.57 1.65997L12.27 2.35997C12.682 2.76997 13.24 2.99997 13.82 2.99997H14.82C15.4034 2.99997 15.963 3.23176 16.3756 3.64434C16.7882 4.05692 17.02 4.6165 17.02 5.19997V6.19997C17.02 6.77997 17.25 7.33797 17.66 7.74997L18.36 8.44997C18.5656 8.65442 18.7287 8.89749 18.8401 9.16521C18.9514 9.43294 19.0087 9.72003 19.0087 10.01C19.0087 10.2999 18.9514 10.587 18.8401 10.8547C18.7287 11.1225 18.5656 11.3655 18.36 11.57L17.66 12.27C17.2504 12.6819 17.0203 13.2391 17.02 13.82V14.82C17.02 15.4034 16.7882 15.963 16.3756 16.3756C15.963 16.7882 15.4034 17.02 14.82 17.02H13.82C13.2391 17.0203 12.6819 17.2504 12.27 17.66L11.57 18.36C11.3655 18.5656 11.1225 18.7287 10.8547 18.8401C10.587 18.9514 10.2999 19.0087 10.01 19.0087C9.72003 19.0087 9.43294 18.9514 9.16521 18.8401C8.89749 18.7287 8.65442 18.5656 8.44997 18.36L7.74997 17.66C7.33806 17.2504 6.78087 17.0203 6.19997 17.02H5.19997C4.6165 17.02 4.05692 16.7882 3.64434 16.3756C3.23176 15.963 2.99997 15.4034 2.99997 14.82V13.82C2.99964 13.2391 2.76957 12.6819 2.35997 12.27L1.65997 11.57C1.45437 11.3655 1.29121 11.1225 1.17988 10.8547C1.06855 10.587 1.01123 10.2999 1.01123 10.01C1.01123 9.72003 1.06855 9.43294 1.17988 9.16521C1.29121 8.89749 1.45437 8.65442 1.65997 8.44997L2.35997 7.74997C2.76957 7.33806 2.99964 6.78087 2.99997 6.19997V5.19997"
                      stroke="#2AC769"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 10L9 12L13 8"
                      stroke="#2AC769"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="ml-3">
                    <p class="text-sm font-extrabold text-success">
                      Anda mendapatkan 100 poin dari transaksi ini
                    </p>
                    <p class="mt-2 text-sm text-success">
                      Gunakan sebagai diskon untuk order pengangkutan
                      berikutnya!
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-start justify-start p-3 border rounded border-primary hidden"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="min-w-[21px] min-h-[21px] max-w-[21px] max-h-[21px]"
                  >
                    <path
                      d="M10 0C8.0222 0 6.0888 0.586491 4.44431 1.68531C2.79981 2.78412 1.51809 4.34591 0.76121 6.17317C0.00433285 8.00044 -0.193701 10.0111 0.192152 11.9509C0.578005 13.8907 1.53041 15.6726 2.92894 17.0711C4.32747 18.4696 6.1093 19.422 8.04911 19.8079C9.98893 20.1937 11.9996 19.9957 13.8269 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9975 7.34863 18.9431 4.80656 17.0683 2.93175C15.1935 1.05693 12.6514 0.00254574 10 0ZM10 18.4616C8.32648 18.4616 6.69053 17.9653 5.29903 17.0355C3.90754 16.1058 2.823 14.7843 2.18257 13.2381C1.54213 11.692 1.37456 9.99063 1.70105 8.34925C2.02755 6.70787 2.83343 5.20016 4.0168 4.01679C5.20017 2.83343 6.70787 2.02754 8.34925 1.70105C9.99063 1.37456 11.692 1.54213 13.2381 2.18256C14.7843 2.823 16.1058 3.90753 17.0355 5.29903C17.9653 6.69052 18.4616 8.32648 18.4616 10C18.459 12.2434 17.5667 14.3941 15.9804 15.9804C14.3941 17.5667 12.2434 18.459 10 18.4616ZM11.5385 14.6154C11.5385 14.8194 11.4574 15.0151 11.3132 15.1593C11.1689 15.3036 10.9733 15.3846 10.7693 15.3846H10C9.79601 15.3846 9.60035 15.3036 9.45609 15.1593C9.31183 15.0151 9.23079 14.8194 9.23079 14.6154V10C9.02677 10 8.83112 9.91897 8.68686 9.77471C8.5426 9.63045 8.46156 9.4348 8.46156 9.23078C8.46156 9.02677 8.5426 8.83111 8.68686 8.68685C8.83112 8.54259 9.02677 8.46155 9.23079 8.46155H10C10.204 8.46155 10.3997 8.54259 10.5439 8.68685C10.6882 8.83111 10.7693 9.02677 10.7693 9.23078V13.8462C10.9733 13.8462 11.1689 13.9272 11.3132 14.0715C11.4574 14.2157 11.5385 14.4114 11.5385 14.6154ZM8.65386 5.76924C8.65386 5.54103 8.72153 5.31795 8.84832 5.1282C8.97511 4.93845 9.15531 4.79056 9.36615 4.70322C9.57699 4.61589 9.80899 4.59304 10.0328 4.63756C10.2566 4.68208 10.4622 4.79198 10.6236 4.95335C10.785 5.11471 10.8949 5.32031 10.9394 5.54413C10.9839 5.76796 10.9611 5.99996 10.8737 6.2108C10.7864 6.42164 10.6385 6.60184 10.4488 6.72863C10.259 6.85542 10.0359 6.92309 9.80771 6.92309C9.50169 6.92309 9.20821 6.80152 8.99182 6.58513C8.77543 6.36874 8.65386 6.07526 8.65386 5.76924Z"
                      fill="#3E7380"
                    />
                  </svg>
                  <div class="ml-3">
                    <p class="text-sm text-primary">
                      Sampah Anda akan diangkut pada
                    </p>
                    <p class="mt-1 text-sm font-extrabold text-primary">
                      Selasa, 20 Juni 2022, Jam 09:00 WIB
                    </p>
                  </div>
                </div>
              </div>
              <!-- End Section Alert -->
              <!-- Start Section Detail Payment -->
              <div>
                <div class="flex items-center justify-between">
                  <p class="text-xs text-grey-3">Biaya Angkut</p>
                  <p class="text-xs font-medium text-black">
                    1 x Rp.
                    {{ $formattingThousand(price?.data?.price?.total) || 0 }}
                  </p>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <p class="text-sm font-extrabold text-black">Total</p>
                  <p class="text-base font-extrabold text-black">
                    Rp.
                    {{ $formattingThousand(price?.data?.price?.total) || 0 }}
                  </p>
                </div>
              </div>
              <!-- End Section Detail Payment -->
              <button
                class="btn btn--block btn--primary btn--rounded"
                @click="payOrder()"
              >
                Ke Pembayaran
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      dropPoint: {
        loading: true,
        list: [],
        params: {
          limit: 1,
          page: 1,
          orderBy: 'asc',
          sortBy: 'distance',
          status: 'active',
        },
      },
      price: {
        loading: true,
        data: null,
      },
      axiosCancelToken: null,
    }
  },
  computed: {
    temporaryCreateData() {
      return this.$store.getters['order/getTemporaryCreateData']
    },
    pickupSchedule() {
      if (this.temporaryCreateData.order_type == 'on-demand') {
        return 'Sekarang'
      } else {
        return 'Nanti'
      }
    },
    urlGetDropPointList() {
      return `/api/v1/drop-point?limit=${this.dropPoint.params.limit}&page=${this.dropPoint.params.page}&order_by=${this.dropPoint.params.orderBy}&sort_by=${this.dropPoint.params.sortBy}&status=${this.dropPoint.params.status}&latitude=${this.temporaryCreateData.latitude}&longitude=${this.temporaryCreateData.longitude}`
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.$store.dispatch('order/loadTemporaryCreateData')
    this.getDropPointList()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    async getDropPointList() {
      try {
        this.dropPoint.loading = true
        var response = await this.$axios.$get(this.urlGetDropPointList, {
          CancelToken: this.axiosCancelToken,
        })

        this.dropPoint.loading = false
        if (response.success) {
          this.dropPoint.params.page++
          if (response.data.length > 0) {
            this.dropPoint.list = response.data
            this.getPrice()
          } else {
            this.$store.commit('notification/showNotification', {
              type: 'error',
              message: 'Tidak ditemukan drop point.',
            })
          }
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.dropPoint.loading = false
        }
      }
    },
    async getPrice() {
      try {
        this.price.loading = true

        let data = {
          weight: this.temporaryCreateData.wasteWeight,
          range: this.dropPoint.list[0].distance,
        }

        var response = await this.$axios.$post('/api/v1/pricing', data, {
          CancelToken: this.axiosCancelToken,
        })

        this.price.loading = false
        if (response.success) {
          this.price.data = response.data
        }
      } catch (error) {
        if (!this.$axios.isCancel(error)) {
          this.price.loading = false
        }
      }
    },
    async payOrder() {
      try {
        this.$store.commit('app/setLoader', true)

        const formData = new FormData()
        formData.append('order_type', this.temporaryCreateData.order_type)

        // wastes
        this.temporaryCreateData.wastes.forEach((item, index) => {
          for (var prop in item) {
            if (prop == 'id' || prop == 'weight') {
              formData.append(`wastes[${index}][${prop}]`, item[prop])
            }
          }
        })

        // address
        formData.append('latitude', this.temporaryCreateData.latitude)
        formData.append('longitude', this.temporaryCreateData.longitude)
        formData.append('address', this.temporaryCreateData.address)

        // payment
        formData.append('amount', this.price.data.price.total)
        formData.append(
          'payment_method',
          this.temporaryCreateData.payment_method
        )

        // image
        let imageDataURL = this.temporaryCreateData.image.split(';')
        let imageBase64 = imageDataURL[1]
        let imageType = imageDataURL[0].split(':')[1]
        let imageBlob = this.$b64ToBlob(imageBase64, imageType)
        formData.append('image', imageBlob, 'order.jpeg')

        // schedules
        if (this.temporaryCreateData.order_type == 'on-demand') {
          formData.append(
            'schedules[0][date]',
            this.$moment().format('YYYY-MM-DD')
          )
        }

        var response = await this.$axios.$post('/api/v1/order', formData, {
          'content-type': 'multipart/form-data',
          CancelToken: this.axiosCancelToken,
        })

        if (response.success) {
          this.$store.commit('app/setLoader', false)
          this.$store.commit('order/clearTemporaryCreateData')
          this.$router.push(`/order/${response.data.id}`)
        }
      } catch (error) {
        console.log(error)
        this.$store.commit('app/setLoader', false)
        if (!this.$axios.isCancel(error)) {
          const code = parseInt(error.response && error.response.status)
          const statusText = error.response && error.response.statusText
          const data = error.response && error.response.data

          if (code === 422) {
            for (var prop in data.errors) {
              this.$store.commit('notification/showNotification', {
                type: 'error',
                message: data.errors[prop][0],
              })
            }
          }
        }
      }
    },
  },
}
</script>
