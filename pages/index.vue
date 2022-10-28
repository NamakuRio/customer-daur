<template>
  <div>
    <div class="with-bottom-navbar">
      <div>
        <div class="relative overflow-hidden h-52">
          <div class="fixed w-full max-w-[444px]">
            <img
              src="~/assets/images/home-background.png"
              alt="home background"
              class="inset-0 object-cover object-top w-full translate-y-0 h-52 -z-10"
            />
            <div class="absolute inset-0 px-5 py-4">
              <div class="flex items-center justify-between">
                <div>
                  <svg
                    width="68"
                    height="22"
                    viewBox="0 0 68 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="68" height="22" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0_1140_1887"
                          transform="translate(0 -0.00685218) scale(0.00115075 0.00355686)"
                        />
                      </pattern>
                      <image
                        id="image0_1140_1887"
                        width="869"
                        height="285"
                        xlink:href="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div>
                  <NuxtLink to="/notification">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.5051 19.6464L24.1801 17.3084V11.5476C24.211 9.40839 23.4669 7.33021 22.0851 5.6968C20.7034 4.0634 18.7773 2.98508 16.6626 2.66095C15.4352 2.49932 14.1876 2.6013 13.0028 2.96007C11.818 3.31884 10.7233 3.92617 9.79184 4.74152C8.86036 5.55687 8.11348 6.5615 7.60103 7.68837C7.08857 8.81524 6.82233 10.0384 6.82007 11.2764V17.3084L4.49507 19.6464C4.20304 19.9433 4.00499 20.3197 3.92571 20.7285C3.84642 21.1374 3.88941 21.5605 4.04929 21.9451C4.20918 22.3296 4.47886 22.6585 4.82464 22.8906C5.17042 23.1227 5.57695 23.2478 5.99341 23.2501H10.3334V23.6893C10.3937 25.0006 10.9714 26.2345 11.9399 27.1206C12.9083 28.0068 14.1886 28.4729 15.5001 28.4168C16.8116 28.4729 18.0918 28.0068 19.0603 27.1206C20.0287 26.2345 20.6064 25.0006 20.6667 23.6893V23.2501H25.0067C25.4232 23.2478 25.8297 23.1227 26.1755 22.8906C26.5213 22.6585 26.791 22.3296 26.9509 21.9451C27.1107 21.5605 27.1537 21.1374 27.0744 20.7285C26.9952 20.3197 26.7971 19.9433 26.5051 19.6464ZM18.0834 23.6893C18.0118 24.3106 17.7032 24.8803 17.222 25.2797C16.7407 25.6791 16.1239 25.8775 15.5001 25.8335C14.8762 25.8775 14.2594 25.6791 13.7782 25.2797C13.297 24.8803 12.9884 24.3106 12.9167 23.6893V23.2501H18.0834V23.6893ZM7.11716 20.6668L8.64132 19.1426C8.88308 18.9023 9.07489 18.6165 9.20568 18.3017C9.33648 17.9869 9.40368 17.6493 9.40341 17.3084V11.2764C9.40411 10.405 9.59119 9.54389 9.9521 8.75078C10.313 7.95768 10.8394 7.25096 11.4959 6.67803C12.1436 6.09121 12.911 5.65213 13.7451 5.39119C14.5793 5.13025 15.4601 5.05368 16.3267 5.16678C17.8205 5.40933 19.1764 6.18334 20.1448 7.34632C21.1131 8.50929 21.6288 9.98294 21.5967 11.4959V17.3084C21.5948 17.6484 21.6599 17.9855 21.7885 18.3002C21.9171 18.615 22.1065 18.9012 22.3459 19.1426L23.883 20.6668H7.11716Z"
                        fill="white"
                      />
                      <circle cx="8" cy="8" r="5" fill="#F17E60" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
              <div class="flex items-center mx-2 mt-10">
                <img
                  src="https://ui-avatars.com/api/?name=Nancy+Smith"
                  alt="Foto Profil"
                  class="w-10 h-10 rounded-full"
                />
                <div class="ml-5">
                  <p class="text-sm text-grey-1 font-[Montserrat]">Welcome,</p>
                  <h4
                    class="text-xl text-white font-[Montserrat] font-semibold"
                  >
                    {{ user?.name || '-' }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sticky z-10 py-4 -mt-8 bg-white rounded-t-3xl">
          <div class="px-5 overflow-hidden">
            <div
              class="swiper swiper-home w-full h-full !pb-12"
              style="overflow: initial"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide !w-[80%] bg-secondary rounded-xl px-5 py-8"
                >
                  <h1 class="text-xl font-bold text-white uppercase">Banner</h1>
                  <p class="mt-2 text-sm font-medium text-white">
                    Lorem ipsum dolor sit amet adispicing consectuer
                  </p>
                </div>
                <div
                  class="swiper-slide !w-[80%] bg-secondary bg-opacity-60 rounded-xl px-5 py-8"
                >
                  <h1 class="text-xl font-bold text-gray-700 uppercase">
                    Banner
                  </h1>
                  <p class="mt-2 text-sm font-medium text-gray-700">
                    Lorem ipsum dolor sit amet adispicing consectuer
                  </p>
                </div>
                <div
                  class="swiper-slide !w-[80%] bg-primary rounded-xl px-5 py-8"
                >
                  <h1 class="text-xl font-bold text-white uppercase">Banner</h1>
                  <p class="mt-2 text-sm font-medium text-white">
                    Lorem ipsum dolor sit amet adispicing consectuer
                  </p>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="px-5">
            <div class="flex flex-wrap gap-4">
              <div class="flex-grow flex-shrink w-full" style="flex-basis: 45%">
                <div
                  class="px-4 pt-6 pb-5 text-center border rounded-lg cursor-pointer border-grey-1"
                >
                  <div class="mx-auto">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto"
                    >
                      <circle cx="24" cy="24" r="24" fill="#77DD77" />
                      <path
                        d="M15.5167 18.5832V18.4832H15.4167H13.35V16.5165H17.5833H17.6833V16.4165V15.3332C17.6833 14.7851 17.9011 14.2594 18.2886 13.8718C18.6762 13.4842 19.2019 13.2665 19.75 13.2665H26.25C26.7981 13.2665 27.3238 13.4842 27.7114 13.8718C28.0989 14.2594 28.3167 14.7851 28.3167 15.3332V16.4165V16.5165H28.4167H32.65V18.4832H30.5833H30.4833V18.5832V32.6665C30.4833 33.2146 30.2656 33.7403 29.878 34.1279C29.4904 34.5154 28.9648 34.7332 28.4167 34.7332H17.5833C17.0352 34.7332 16.5096 34.5154 16.122 34.1279C15.7344 33.7403 15.5167 33.2146 15.5167 32.6665V18.5832ZM17.5833 18.4832H17.4833V18.5832V32.6665V32.7665H17.5833H28.4167H28.5167V32.6665V18.5832V18.4832H28.4167H17.5833ZM19.75 15.2332H19.65V15.3332V16.4165V16.5165H19.75H26.25H26.35V16.4165V15.3332V15.2332H26.25H19.75Z"
                        fill="white"
                        stroke="#77DD77"
                        stroke-width="0.2"
                      />
                      <circle
                        cx="28"
                        cy="29"
                        r="7"
                        fill="#77DD77"
                        stroke="#77DD77"
                        stroke-width="2"
                      />
                      <path
                        d="M28 22.9C24.6314 22.9 21.9 25.6314 21.9 29C21.9 32.3686 24.6314 35.1 28 35.1C31.3686 35.1 34.1 32.3686 34.1 29C34.1 25.6314 31.3686 22.9 28 22.9ZM28 33.8821C25.3043 33.8821 23.1179 31.6957 23.1179 29C23.1179 26.3043 25.3043 24.1179 28 24.1179C30.6957 24.1179 32.8821 26.3043 32.8821 29C32.8821 31.6957 30.6957 33.8821 28 33.8821Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.2"
                      />
                      <g clip-path="url(#clip0_1140_1898)">
                        <path
                          d="M28.0001 31.6668V26.3335M25.6667 28.6668L28.0001 26.3335L30.3334 28.6668"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1140_1898">
                          <rect
                            width="8"
                            height="8"
                            fill="white"
                            transform="translate(24 25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h6 class="mt-5 text-sm font-medium text-grey-3">
                    Order Sekarang
                  </h6>
                </div>
              </div>
              <div class="flex-grow flex-shrink w-full" style="flex-basis: 45%">
                <div
                  class="px-4 pt-6 pb-5 text-center border rounded-lg cursor-pointer border-grey-1"
                >
                  <div class="mx-auto">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto"
                    >
                      <circle cx="24" cy="24" r="24" fill="#77DD77" />
                      <path
                        d="M32.125 28.0625H29.6875V25.625H28.0625V28.0625H25.625V29.6875H28.0625V32.125H29.6875V29.6875H32.125V28.0625Z"
                        fill="white"
                      />
                      <path
                        d="M28.875 35.375C25.3 35.375 22.375 32.45 22.375 28.875C22.375 25.3 25.3 22.375 28.875 22.375C32.45 22.375 35.375 25.3 35.375 28.875C35.375 32.45 32.45 35.375 28.875 35.375ZM28.875 24C26.1938 24 24 26.1938 24 28.875C24 31.5562 26.1938 33.75 28.875 33.75C31.5562 33.75 33.75 31.5562 33.75 28.875C33.75 26.1938 31.5562 24 28.875 24Z"
                        fill="white"
                      />
                      <path
                        d="M33.75 15.875C33.75 14.9813 33.0187 14.25 32.125 14.25H28.875V12.625H27.25V14.25H20.75V12.625H19.125V14.25H15.875C14.9812 14.25 14.25 14.9813 14.25 15.875V32.125C14.25 33.0187 14.9812 33.75 15.875 33.75H20.75V32.125H15.875V15.875H19.125V17.5H20.75V15.875H27.25V17.5H28.875V15.875H32.125V20.75H33.75V15.875Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h6 class="mt-5 text-sm font-medium text-grey-3">
                    Berlangganan
                  </h6>
                </div>
              </div>
            </div>
            <div
              class="flex items-start px-4 pt-6 pb-4 mt-4 border rounded-lg cursor-pointer border-grey-1"
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="min-w-[27px] min-h-[27px]"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#D8ECF1" />
                <g clip-path="url(#clip0_1140_1920)">
                  <path
                    d="M13.5 20.9375C11.5275 20.9375 9.63569 20.1539 8.24089 18.7591C6.84609 17.3643 6.0625 15.4725 6.0625 13.5C6.0625 11.5275 6.84609 9.63569 8.24089 8.24089C9.63569 6.84609 11.5275 6.0625 13.5 6.0625C15.4725 6.0625 17.3643 6.84609 18.7591 8.24089C20.1539 9.63569 20.9375 11.5275 20.9375 13.5C20.9375 15.4725 20.1539 17.3643 18.7591 18.7591C17.3643 20.1539 15.4725 20.9375 13.5 20.9375ZM13.5 22C15.7543 22 17.9163 21.1045 19.5104 19.5104C21.1045 17.9163 22 15.7543 22 13.5C22 11.2457 21.1045 9.08365 19.5104 7.48959C17.9163 5.89553 15.7543 5 13.5 5C11.2457 5 9.08365 5.89553 7.48959 7.48959C5.89553 9.08365 5 11.2457 5 13.5C5 15.7543 5.89553 17.9163 7.48959 19.5104C9.08365 21.1045 11.2457 22 13.5 22Z"
                    fill="#3E7380"
                  />
                  <path
                    d="M10.5835 11.1476C10.582 11.1819 10.5876 11.2162 10.5999 11.2483C10.6121 11.2803 10.6308 11.3096 10.6548 11.3341C10.6788 11.3587 10.7076 11.3781 10.7393 11.3912C10.7711 11.4043 10.8052 11.4107 10.8395 11.4101H11.7161C11.8627 11.4101 11.9796 11.29 11.9987 11.1444C12.0944 10.4474 12.5725 9.93956 13.4246 9.93956C14.1535 9.93956 14.8207 10.304 14.8207 11.1806C14.8207 11.8552 14.4234 12.1655 13.7954 12.6373C13.0804 13.1568 12.514 13.7635 12.5544 14.7484L12.5576 14.979C12.5587 15.0487 12.5872 15.1152 12.6369 15.1641C12.6866 15.213 12.7535 15.2404 12.8232 15.2404H13.6849C13.7554 15.2404 13.8229 15.2124 13.8727 15.1626C13.9226 15.1128 13.9505 15.0452 13.9505 14.9747V14.8632C13.9505 14.1003 14.2406 13.8783 15.0237 13.2843C15.6707 12.7924 16.3454 12.2463 16.3454 11.0998C16.3454 9.49438 14.9897 8.71875 13.5054 8.71875C12.1592 8.71875 10.6844 9.34562 10.5835 11.1476ZM12.2378 17.2708C12.2378 17.8371 12.6894 18.2557 13.3109 18.2557C13.958 18.2557 14.4032 17.8371 14.4032 17.2708C14.4032 16.6843 13.9569 16.2721 13.3099 16.2721C12.6894 16.2721 12.2378 16.6843 12.2378 17.2708Z"
                    fill="#3E7380"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1140_1920">
                    <rect
                      width="17"
                      height="17"
                      fill="white"
                      transform="translate(5 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div class="ml-3">
                <h6 class="text-sm font-medium text-black">Bantuan</h6>
                <p class="mt-2 text-sm font-medium text-grey-2">
                  Hubungi Kami jika mengalami masalah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNavbar />

    <!-- Start Popup Welcome -->
    <transition name="slide-popup">
      <div
        class="fixed bottom-0 flex items-center justify-center w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="welcomePopup"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="welcomePopup = false"
        ></div>
        <div
          class="z-10 content-center w-full p-4 transition-all duration-1000 top-14 content-popup"
        >
          <div class="w-full overflow-auto bg-white rounded-lg">
            <!-- content -->
            <div>
              <div class="px-3 pb-8 text-center pt-7">
                <svg
                  width="79"
                  height="79"
                  viewBox="0 0 79 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <g clip-path="url(#clip0_76_2502)">
                    <path
                      d="M39.5 37.3056C42.7387 37.3099 45.9059 36.3535 48.6009 34.5573C51.296 32.7611 53.3976 30.2059 54.64 27.215C55.8825 24.224 56.2098 20.9318 55.5806 17.7547C54.9514 14.5777 53.394 11.6587 51.1054 9.36705C48.8168 7.07539 45.8999 5.51407 42.7237 4.88063C39.5476 4.24718 36.2549 4.57009 33.2623 5.80849C30.2697 7.04689 27.7116 9.14513 25.9118 11.8377C24.112 14.5303 23.1514 17.6963 23.1514 20.935C23.1514 25.2729 24.8731 29.4335 27.9384 32.503C31.0038 35.5724 35.162 37.2997 39.5 37.3056V37.3056ZM39.5 8.93139C41.8716 8.92705 44.1911 9.62663 46.1649 10.9415C48.1386 12.2564 49.6777 14.1275 50.5873 16.3177C51.4969 18.508 51.736 20.9189 51.2744 23.2452C50.8128 25.5714 49.6712 27.7084 47.9942 29.3854C46.3172 31.0623 44.1803 32.2039 41.854 32.6655C39.5278 33.1272 37.1168 32.888 34.9266 31.9785C32.7363 31.0689 30.8653 29.5297 29.5504 27.556C28.2355 25.5823 27.5359 23.2627 27.5403 20.8911C27.5461 17.721 28.808 14.6823 31.0496 12.4407C33.2912 10.1991 36.3298 8.93719 39.5 8.93139V8.93139Z"
                      fill="#F17E60"
                    />
                    <path
                      d="M13.1666 69.9808V56.5508C16.5546 52.9951 20.6454 50.1833 25.179 48.2943C29.7125 46.4053 34.5896 45.4805 39.5 45.5786C46.2207 45.4881 52.8357 47.2576 58.6136 50.6916L61.5761 47.378C54.9703 43.2173 47.3065 41.0462 39.5 41.1239C33.7883 40.9783 28.1148 42.0947 22.8841 44.3934C17.6533 46.692 12.9941 50.1163 9.23858 54.4222C8.94585 54.7993 8.78406 55.2615 8.77775 55.7389V69.9808C8.74823 71.1761 9.19348 72.3345 10.016 73.2023C10.8386 74.0701 11.9714 74.5766 13.1666 74.6111H40.3558L36.1864 70.2222L13.1666 69.9808Z"
                      fill="#F17E60"
                    />
                    <path
                      d="M65.8334 69.9808V70.2222H58.9209L54.9709 74.6111H65.8334C67.0132 74.5768 68.1328 74.0823 68.9529 73.2335C69.773 72.3847 70.2286 71.2489 70.2223 70.0686V57.4944L65.8334 62.3881V69.9808Z"
                      fill="#F17E60"
                    />
                    <path
                      d="M76.2788 40.8606C75.8448 40.4743 75.2754 40.2759 74.6954 40.3088C74.1154 40.3417 73.5721 40.6032 73.1846 41.0361L47.6852 69.5639L36.2741 57.297C36.0867 57.0779 35.8581 56.8979 35.6013 56.7673C35.3444 56.6366 35.0643 56.5578 34.777 56.5354C34.4896 56.513 34.2007 56.5474 33.9267 56.6366C33.6527 56.7259 33.3989 56.8682 33.1799 57.0556C32.9654 57.2507 32.7916 57.4865 32.6688 57.7492C32.5459 58.0119 32.4764 58.2964 32.4641 58.5862C32.4519 58.8759 32.4972 59.1652 32.5974 59.4374C32.6977 59.7095 32.8509 59.9591 33.0482 60.1717L47.729 75.9717L76.4543 43.8889C76.8206 43.4586 77.0067 42.9036 76.974 42.3395C76.9413 41.7754 76.6923 41.2456 76.2788 40.8606V40.8606Z"
                      fill="#F17E60"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_76_2502">
                      <rect width="79" height="79" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h1 class="mt-4 text-xl font-semibold text-primary">
                  Selamat datang
                </h1>
                <p class="mt-2 text-xs text-grey-2">
                  Anda berhasil masuk ke akun Daur.id Anda
                </p>
              </div>
              <div
                class="flex items-center border-t border-black border-opacity-10"
              >
                <button
                  class="!py-4 font-bold btn btn--block text-primary"
                  @click="welcomePopup = false"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Popup Welcome -->
  </div>
</template>
<script>
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  middleware: ['authenticated'],
  data() {
    return {
      welcomePopup: false,
      swiper: null,
    }
  },
  mounted() {
    this.checkWelcomePopup()
    this.initSwiper()
  },
  computed: {
    user() {
      return this.$store.state.authentication.user
    },
  },
  methods: {
    checkWelcomePopup() {
      let welcomePopup = localStorage.getItem('welcome_popup')
      if (!welcomePopup) {
        this.welcomePopup = true
        localStorage.setItem('welcome_popup', true)
      }
    },
    initSwiper() {
      this.swiper = new Swiper('.swiper-home', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: '!bg-secondary !opacity-100',
        },
      })
    },
  },
}
</script>
