<template>
  <div>
    <Header title="Akun Saya" />
    <div class="with-header with-bottom-navbar">
      <div>
        <div class="px-6 pt-3 pb-5">
          <div class="text-center">
            <img
              :src="user?.photo || '/assets/images/default-profile-photo.png'"
              alt="Foto Profil"
              class="w-24 h-24 mx-auto rounded-full"
            />
            <div class="mt-2">
              <h2 class="text-sm font-bold text-black" v-if="user?.name">
                {{ user?.name || '-' }}
              </h2>
              <p class="mt-2 text-sm text-grey-2" v-if="user?.account_type">
                {{ $accountType(user?.account_type) || '-' }}
              </p>
              <p class="mt-2 text-sm text-grey-2" v-if="user?.phone">
                {{ user?.phone || '-' }}
              </p>
              <p class="mt-1 text-sm text-grey-2" v-if="user?.email">
                {{ user?.email || '-' }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex flex-col py-2 border-t border-black border-opacity-10"
          >
            <NuxtLink
              to="/account/change"
              class="flex items-center justify-start px-4 py-3"
            >
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.579 2 2 6.579 2 12C2 17.421 6.579 22 12 22C17.421 22 22 17.421 22 12C22 6.579 17.421 2 12 2ZM12 7C13.727 7 15 8.272 15 10C15 11.728 13.727 13 12 13C10.274 13 9 11.728 9 10C9 8.272 10.274 7 12 7ZM6.894 16.772C7.791 15.452 9.287 14.572 11 14.572H13C14.714 14.572 16.209 15.452 17.106 16.772C15.828 18.14 14.015 19 12 19C9.985 19 8.172 18.14 6.894 16.772Z"
                    fill="#CACACA"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Edit Profil</p>
            </NuxtLink>
            <button
              class="flex items-center justify-start px-4 py-3"
              @click="validateChangePhoneByWhatsapp = true"
            >
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#CACACA" />
                  <path
                    d="M11.6239 12.055L12.4639 11.215C12.577 11.1033 12.7201 11.0268 12.8759 10.9948C13.0317 10.9629 13.1934 10.9768 13.3414 11.035L14.3651 11.4438C14.5147 11.5045 14.6429 11.6081 14.7337 11.7416C14.8244 11.875 14.8736 12.0324 14.8751 12.1938V14.0688C14.8742 14.1786 14.8512 14.287 14.8073 14.3877C14.7634 14.4883 14.6995 14.579 14.6197 14.6544C14.5398 14.7297 14.4455 14.7881 14.3425 14.826C14.2394 14.8639 14.1298 14.8806 14.0201 14.875C6.84636 14.4288 5.39886 8.35377 5.12511 6.02877C5.1124 5.91459 5.12401 5.79902 5.15918 5.68966C5.19434 5.58029 5.25227 5.47961 5.32914 5.39424C5.40601 5.30887 5.50008 5.24074 5.60517 5.19434C5.71026 5.14794 5.82398 5.12431 5.93886 5.12502H7.75011C7.91174 5.12549 8.06953 5.17432 8.20318 5.2652C8.33684 5.35609 8.44025 5.48488 8.50011 5.63502L8.90886 6.65877C8.96896 6.80617 8.98429 6.96801 8.95294 7.12407C8.9216 7.28013 8.84496 7.4235 8.73261 7.53627L7.89261 8.37627C7.89261 8.37627 8.37636 11.65 11.6239 12.055Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Ubah Nomor Telepon</p>
            </button>
            <NuxtLink
              to="/account/change/email"
              class="flex items-center justify-start px-4 py-3"
            >
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#CACACA" />
                  <path
                    d="M13.5 6H6.5C6.10218 6 5.72064 6.15804 5.43934 6.43934C5.15804 6.72064 5 7.10218 5 7.5V12.5C5 12.8978 5.15804 13.2794 5.43934 13.5607C5.72064 13.842 6.10218 14 6.5 14H13.5C13.8978 14 14.2794 13.842 14.5607 13.5607C14.842 13.2794 15 12.8978 15 12.5V7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6ZM13.5 7L10.25 9.235C10.174 9.27888 10.0878 9.30199 10 9.30199C9.91223 9.30199 9.82601 9.27888 9.75 9.235L6.5 7H13.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Ubah Email</p>
            </NuxtLink>
            <NuxtLink
              to="/trash"
              class="flex items-center justify-start px-4 py-3"
            >
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#CACACA" />
                  <path
                    d="M13.7812 10.0485L14.5467 11.375C14.7003 11.641 14.7811 11.9427 14.7812 12.2499C14.7812 12.557 14.7004 12.8588 14.5469 13.1248C14.3933 13.3908 14.1725 13.6117 13.9065 13.7654C13.6406 13.919 13.3389 13.9999 13.0317 14H12.0002V15.25L9.50022 13.5L12.0002 11.75V13H13.0312C13.1629 13.0001 13.2923 12.9655 13.4064 12.8997C13.5205 12.8339 13.6152 12.7392 13.6811 12.6252C13.747 12.5112 13.7817 12.3818 13.7817 12.2501C13.7817 12.1184 13.7471 11.9891 13.6812 11.875L12.9152 10.5485L13.7812 10.0485ZM7.65222 8.56701L7.91722 11.607L6.83522 10.982L6.31972 11.875C6.25389 11.989 6.21924 12.1184 6.21924 12.25C6.21924 12.3817 6.25389 12.511 6.31971 12.625C6.38554 12.739 6.48021 12.8337 6.59423 12.8995C6.70824 12.9654 6.83757 13 6.96922 13H8.50022V14H6.96922C6.66203 14 6.36026 13.9191 6.09423 13.7655C5.82821 13.6119 5.6073 13.391 5.45371 13.125C5.30012 12.859 5.21926 12.5572 5.21926 12.25C5.21927 11.9428 5.30013 11.641 5.45372 11.375L5.96872 10.4815L4.88672 9.85701L7.65172 8.56701H7.65222ZM10.8752 5.48451C11.1412 5.63801 11.3622 5.85901 11.5157 6.12501L12.0307 7.01751L13.1137 6.39251L12.8487 9.43301L10.0827 8.14301L11.1652 7.51801L10.6497 6.62501C10.5839 6.51101 10.4892 6.41634 10.3752 6.35052C10.2612 6.2847 10.1319 6.25005 10.0002 6.25005C9.86857 6.25005 9.73925 6.2847 9.62524 6.35052C9.51123 6.41634 9.41655 6.51101 9.35072 6.62501L8.58472 7.95151L7.71872 7.45151L8.48522 6.12501C8.71729 5.72309 9.09952 5.42981 9.54782 5.30969C9.99612 5.18957 10.4738 5.25246 10.8757 5.48451H10.8752Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Informasi Jenis Sampah</p>
            </NuxtLink>
            <div class="flex items-center justify-start px-4 py-3">
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1.4375C5.94316 1.4375 1.4375 5.94316 1.4375 11.5C1.4375 17.0568 5.94316 21.5625 11.5 21.5625C17.0568 21.5625 21.5625 17.0568 21.5625 11.5C21.5625 5.94316 17.0568 1.4375 11.5 1.4375ZM11.5 17.3398C11.0036 17.3398 10.6016 16.9378 10.6016 16.4414C10.6016 15.945 11.0036 15.543 11.5 15.543C11.9964 15.543 12.3984 15.945 12.3984 16.4414C12.3984 16.9378 11.9964 17.3398 11.5 17.3398ZM12.9128 12.4097C12.7094 12.4882 12.5344 12.6262 12.4106 12.8057C12.2868 12.9852 12.2199 13.1979 12.2188 13.4159V13.9258C12.2188 14.0246 12.1379 14.1055 12.0391 14.1055H10.9609C10.8621 14.1055 10.7812 14.0246 10.7812 13.9258V13.4429C10.7812 12.924 10.9317 12.4119 11.2282 11.9852C11.518 11.5674 11.9223 11.2484 12.3984 11.0665C13.1621 10.7723 13.6562 10.1321 13.6562 9.43359C13.6562 8.44307 12.6882 7.63672 11.5 7.63672C10.3118 7.63672 9.34375 8.44307 9.34375 9.43359V9.6043C9.34375 9.70312 9.26289 9.78398 9.16406 9.78398H8.08594C7.98711 9.78398 7.90625 9.70312 7.90625 9.6043V9.43359C7.90625 8.55088 8.29258 7.72656 8.99336 7.11338C9.66719 6.52266 10.5566 6.19922 11.5 6.19922C12.4434 6.19922 13.3328 6.5249 14.0066 7.11338C14.7074 7.72656 15.0938 8.55088 15.0938 9.43359C15.0938 10.7318 14.238 11.8998 12.9128 12.4097Z"
                    fill="#CACACA"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Bantuan</p>
            </div>
            <div class="flex items-center justify-start px-4 py-3">
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1.4375C5.94316 1.4375 1.4375 5.94316 1.4375 11.5C1.4375 17.0568 5.94316 21.5625 11.5 21.5625C17.0568 21.5625 21.5625 17.0568 21.5625 11.5C21.5625 5.94316 17.0568 1.4375 11.5 1.4375ZM12.2188 16.3516C12.2188 16.4504 12.1379 16.5312 12.0391 16.5312H10.9609C10.8621 16.5312 10.7812 16.4504 10.7812 16.3516V10.2422C10.7812 10.1434 10.8621 10.0625 10.9609 10.0625H12.0391C12.1379 10.0625 12.2188 10.1434 12.2188 10.2422V16.3516ZM11.5 8.625C11.2179 8.61924 10.9492 8.50312 10.7518 8.30156C10.5543 8.1 10.4437 7.82906 10.4437 7.54688C10.4437 7.26469 10.5543 6.99375 10.7518 6.79219C10.9492 6.59063 11.2179 6.47451 11.5 6.46875C11.7821 6.47451 12.0508 6.59063 12.2482 6.79219C12.4457 6.99375 12.5563 7.26469 12.5563 7.54688C12.5563 7.82906 12.4457 8.1 12.2482 8.30156C12.0508 8.50312 11.7821 8.61924 11.5 8.625Z"
                    fill="#CACACA"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Syarat & Ketentuan</p>
            </div>
          </div>
          <div
            class="flex flex-col py-2 border-t border-black border-opacity-10"
          >
            <div
              class="flex items-center justify-start px-4 py-3 cursor-pointer"
              @click="confirmationLogout.popup = true"
            >
              <div
                class="flex items-center justify-center min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5002 22.9167C6.74704 22.9167 2.0835 18.2532 2.0835 12.5C2.0835 6.74692 6.74704 2.08337 12.5002 2.08337C18.2533 2.08337 22.9168 6.74692 22.9168 12.5C22.9168 18.2532 18.2533 22.9167 12.5002 22.9167ZM7.29183 11.4584V8.33337L2.0835 12.5L7.29183 16.6667V13.5417H15.6252V11.4584H7.29183Z"
                    fill="#FF9595"
                  />
                </svg>
              </div>
              <p class="ml-4 text-sm text-black">Keluar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNavbar />

    <!-- Popup Section -->
    <!-- Start Popup Lengkapi Data -->
    <transition name="slide-popup">
      <div
        class="fixed bottom-0 flex items-center justify-center w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="completionB2BData.popup"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="completionB2BData.popup = false"
        ></div>
        <div
          class="z-10 content-center w-full p-4 transition-all duration-1000 top-14 content-popup"
        >
          <div class="w-full overflow-auto bg-white rounded-lg">
            <!-- content -->
            <div>
              <div class="px-3 pb-8 text-center pt-7">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <path
                    d="M49.5742 38.4167V38.4168H49.5835H55.4105C55.455 38.4184 55.4976 38.4358 55.5305 38.4659C55.5643 38.4967 55.5857 38.5388 55.5907 38.5842L55.5916 38.5924L55.5928 38.6005L56.1469 42.4505L56.1886 42.74L56.4613 42.8455C57.3108 43.1744 58.0598 43.6435 58.8436 44.1661L59.064 44.313L59.3093 44.2133L62.8053 42.7921C62.9533 42.7936 63.0438 42.7995 63.113 42.8195C63.1453 42.8289 63.1576 42.8377 63.1615 42.8408L63.1616 42.8409C63.1641 42.8429 63.1743 42.8512 63.1879 42.8804L63.1975 42.9013L63.2089 42.9211L66.1204 47.958C66.146 48.0086 66.1542 48.0662 66.1437 48.1221C66.1335 48.1768 66.1058 48.2267 66.065 48.2644L62.9859 50.6463L62.7469 50.8311L62.7994 51.1286C62.8806 51.5886 62.9085 52.025 62.9085 52.5001C62.9085 52.9395 62.8594 53.356 62.8034 53.8305L62.7953 53.9L62.762 54.1824L62.9877 54.3553L66.0947 56.7364C66.1352 56.774 66.1627 56.8236 66.1729 56.8781C66.1834 56.9339 66.1751 56.9916 66.1496 57.0422L63.2381 62.079L63.2343 62.0856L63.2308 62.0922C63.2116 62.1278 63.1953 62.1428 63.1853 62.1503C63.1741 62.1588 63.1553 62.1697 63.1194 62.1799C63.0458 62.2007 62.953 62.2066 62.8053 62.208L59.3093 60.7869L59.064 60.6872L58.8436 60.8341C58.0701 61.3497 57.31 61.7991 56.4722 62.1621L56.2159 62.2732L56.1761 62.5497L55.623 66.3925C55.6021 66.5044 55.4874 66.5834 55.4168 66.5834H49.5835C49.4147 66.5834 49.3374 66.4931 49.3191 66.3928L48.7659 62.5497L48.7242 62.2602L48.4515 62.1546C47.5995 61.8248 46.8196 61.3535 46.0764 60.839L45.8548 60.6856L45.6048 60.7864L42.0793 62.208C41.9461 62.2064 41.8632 62.2005 41.7991 62.1815C41.7686 62.1725 41.7565 62.164 41.7522 62.1604C41.7493 62.1581 41.7387 62.1494 41.725 62.1197L41.7154 62.0989L41.7039 62.079L38.7924 57.0422C38.7669 56.9916 38.7586 56.9339 38.7691 56.8781C38.7794 56.8233 38.807 56.7735 38.8479 56.7358L41.9269 54.3539L42.1512 54.1804L42.1174 53.8988C42.0058 52.9697 42.0058 52.0305 42.1174 51.1014L42.1512 50.8198L41.9269 50.6463L38.8394 48.2578C38.7549 48.1887 38.7262 48.0829 38.7909 47.9606L41.7039 42.9211L41.7077 42.9146L41.7112 42.908C41.7305 42.8722 41.7474 42.8563 41.7583 42.8479C41.7702 42.8387 41.7887 42.8282 41.821 42.8187C41.8844 42.7999 41.9618 42.7939 42.0795 42.7923L45.6048 44.2138L45.8548 44.3146L46.0764 44.1612C46.8065 43.6557 47.6234 43.2048 48.4698 42.838L48.7261 42.727L48.7659 42.4505L49.3178 38.6162C49.3309 38.5603 49.3622 38.5102 49.407 38.474C49.4543 38.4358 49.5135 38.4155 49.5742 38.4167ZM53.0002 31.5897V8.75008V8.25008H52.5002H11.6668H11.1668V8.75008V61.2501V61.7501H11.6668H29.1668H29.6668V61.2501V51.5418H31.6071C31.5835 51.8656 31.5835 52.1779 31.5835 52.4828V52.5001C31.5835 57.9284 33.663 62.869 37.0586 66.5834H6.3335V3.41675H57.8335V32.2757C56.2961 31.8817 54.6795 31.6315 53.0002 31.5897ZM57.3752 52.5001C57.3752 49.8031 55.1971 47.6251 52.5002 47.6251C49.8032 47.6251 47.6252 49.8031 47.6252 52.5001C47.6252 55.1949 49.7718 57.3751 52.5002 57.3751C55.1971 57.3751 57.3752 55.1971 57.3752 52.5001ZM29.6668 15.0834H34.5002V19.9167H29.6668V15.0834ZM46.1668 19.9167H41.3335V15.0834H46.1668V19.9167ZM41.3335 26.7501H46.1668V31.5834H41.3335V26.7501ZM29.6668 26.7501H34.5002V31.5834H29.6668V26.7501ZM22.8335 43.2501H18.0002V38.4168H22.8335V43.2501ZM22.8335 31.5834H18.0002V26.7501H22.8335V31.5834ZM22.8335 19.9167H18.0002V15.0834H22.8335V19.9167ZM18.0002 50.0834H22.8335V54.9168H18.0002V50.0834ZM29.6668 38.4168H34.5002V41.8954C34.2484 42.3335 33.997 42.7897 33.7599 43.2501H29.6668V38.4168Z"
                    fill="#F17E60"
                    stroke="white"
                  />
                </svg>

                <h1
                  class="mt-4 text-xl font-semibold text-primary max-w-[160px] mx-auto"
                >
                  Yuk Lengkapi Data Anda!
                </h1>
                <p class="mt-2 text-xs text-grey-2 max-w-[222px] mx-auto">
                  Anda perlu melengkapi informasi akun bisnis Anda
                </p>
              </div>
              <div
                class="flex items-center border-t border-black border-opacity-10"
              >
                <button
                  class="!py-4 btn btn--block text-grey-2 font-medium"
                  @click="completionB2BData.popup = false"
                >
                  Nanti Saja
                </button>
                <NuxtLink
                  to="/account/change"
                  class="!py-4 font-bold btn btn--block text-primary"
                >
                  Lengkapi
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Popup Lengkapi Data -->

    <!-- Start Popup Confirm Logout -->
    <transition name="slide-popup">
      <div
        class="fixed bottom-0 flex items-center justify-center w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="confirmationLogout.popup"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="confirmationLogout.popup = false"
        ></div>
        <div
          class="z-10 content-center w-full p-4 transition-all duration-1000 top-14 content-popup"
        >
          <div class="w-full overflow-auto bg-white rounded-lg">
            <!-- content -->
            <div>
              <div class="px-3 pb-8 text-center pt-7">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <path
                    d="M42.5002 77.9166C62.0602 77.9166 77.9168 62.06 77.9168 42.4999C77.9168 22.9398 62.0602 7.08325 42.5002 7.08325C22.9401 7.08325 7.0835 22.9398 7.0835 42.4999C7.0835 62.06 22.9401 77.9166 42.5002 77.9166Z"
                    stroke="#DD9813"
                    stroke-width="4"
                  />
                  <path
                    d="M35.417 30.0473C37.1878 26.5411 38.9587 24.7915 42.5003 24.7915C46.9132 24.7915 49.5837 28.2942 49.5837 31.7969C49.5837 35.2996 47.8128 37.0492 42.5003 40.5555V46.0415M42.5003 58.4373V60.2082"
                    stroke="#DD9813"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
                <h1 class="mt-4 text-xl font-semibold text-primary">
                  Yakin Ingin Logout?
                </h1>
                <p class="mt-2 text-xs text-grey-2">
                  Anda akan keluar dari web app Daur
                </p>
              </div>
              <div
                class="flex items-center border-t border-black border-opacity-10"
              >
                <button
                  class="!py-4 btn btn--block text-grey-2 font-medium"
                  @click="confirmationLogout.popup = false"
                >
                  BATAL
                </button>
                <button
                  class="!py-4 font-bold btn btn--block text-primary"
                  @click="logout"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Popup Confirm Logout -->
    <!-- Start Popup Validate By Whatsapp -->
    <transition name="slide-popup">
      <div
        class="fixed bottom-0 flex items-center justify-center w-full h-full"
        style="
          max-width: 444px;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1111;
        "
        v-if="validateChangePhoneByWhatsapp"
      >
        <div
          class="absolute z-0 w-full h-full"
          @click="validateChangePhoneByWhatsapp = false"
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
                  height="74"
                  viewBox="0 0 79 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto"
                >
                  <g clip-path="url(#clip0_35_1247)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M50.7938 41.9476C49.9246 41.513 45.6633 39.4188 44.87 39.1272C44.0767 38.8384 43.4992 38.6955 42.9187 39.5647C42.3412 40.428 40.6817 42.3822 40.1771 42.9597C39.6696 43.5401 39.165 43.6101 38.2987 43.1784C37.4325 42.7409 34.6383 41.828 31.3279 38.8763C28.7525 36.578 27.0112 33.7401 26.5067 32.8709C26.0021 32.0047 26.4513 31.5351 26.8858 31.1034C27.2767 30.7155 27.7521 30.0913 28.1867 29.5867C28.6212 29.0792 28.7642 28.7176 29.0529 28.1372C29.3446 27.5597 29.1987 27.0551 28.98 26.6205C28.7642 26.1859 27.0317 21.9188 26.3083 20.1834C25.6054 18.4947 24.8908 18.7251 24.36 18.6959C23.8525 18.6726 23.275 18.6667 22.6975 18.6667C22.12 18.6667 21.1808 18.8826 20.3875 19.7517C19.5912 20.618 17.3542 22.7151 17.3542 26.9822C17.3542 31.2463 20.4575 35.3676 20.8921 35.948C21.3267 36.5255 27.0025 45.2813 35.6971 49.0351C37.7679 49.9276 39.3808 50.4613 40.6379 50.858C42.7146 51.5201 44.6046 51.4267 46.0979 51.2022C47.7604 50.9542 51.2254 49.1051 51.9487 47.0809C52.6692 45.0567 52.6692 43.3213 52.4533 42.9597C52.2375 42.598 51.66 42.3822 50.7908 41.9476H50.7938ZM34.9796 63.5396H34.9679C29.8038 63.5406 24.7344 62.1524 20.2912 59.5205L19.2412 58.8963L8.32708 61.7605L11.2408 51.1205L10.5554 50.0297C7.66832 45.434 6.14044 40.1153 6.14833 34.688C6.15417 18.7922 19.0867 5.85966 34.9912 5.85966C42.6912 5.85966 49.9304 8.86382 55.3729 14.3122C58.0574 16.9855 60.185 20.1646 61.6329 23.6656C63.0807 27.1666 63.82 30.9199 63.8079 34.7084C63.8021 50.6042 50.8696 63.5396 34.9796 63.5396ZM59.5146 10.1734C56.301 6.9386 52.4773 4.37372 48.2653 2.62741C44.0532 0.881093 39.5364 -0.0119348 34.9767 7.37415e-05C15.8608 7.37415e-05 0.2975 15.5605 0.291667 34.6851C0.282809 40.7714 1.87943 46.7524 4.92042 52.0247L0 70.0001L18.3867 65.1759C23.473 67.9471 29.1728 69.3991 34.965 69.3992H34.9796C54.0954 69.3992 69.6587 53.8388 69.6646 34.7113C69.6787 30.1534 68.7889 25.6379 67.0467 21.426C65.3044 17.2141 62.7444 13.3895 59.5146 10.1734Z"
                      fill="#2AC769"
                    />
                  </g>
                  <circle
                    cx="63.5"
                    cy="58.5"
                    r="14"
                    fill="#F17E60"
                    stroke="white"
                    stroke-width="3"
                  />
                  <path
                    d="M68.1877 53.3361C68.4166 53.1181 68.7212 52.9976 69.0372 53C69.3533 53.0024 69.656 53.1275 69.8816 53.3489C70.1072 53.5702 70.238 53.8706 70.2463 54.1865C70.2547 54.5025 70.14 54.8093 69.9264 55.0423L63.4427 63.1511C63.3312 63.2711 63.1966 63.3675 63.047 63.4344C62.8974 63.5013 62.7359 63.5373 62.5721 63.5404C62.4082 63.5434 62.2455 63.5134 62.0935 63.4521C61.9415 63.3907 61.8035 63.2994 61.6877 63.1836L57.3879 58.8838C57.2682 58.7722 57.1721 58.6377 57.1055 58.4882C57.0389 58.3387 57.0031 58.1773 57.0002 58.0137C56.9973 57.85 57.0274 57.6875 57.0887 57.5357C57.15 57.384 57.2412 57.2461 57.357 57.1304C57.4727 57.0146 57.6105 56.9234 57.7623 56.8621C57.9141 56.8008 58.0766 56.7707 58.2403 56.7736C58.4039 56.7765 58.5653 56.8123 58.7148 56.8789C58.8643 56.9455 58.9988 57.0416 59.1104 57.1613L62.5132 60.5624L68.1568 53.3718C68.1669 53.3593 68.1778 53.3474 68.1893 53.3361H68.1877Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_35_1247">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h1
                  class="mt-4 text-xl font-semibold text-primary max-w-[269px] mx-auto"
                >
                  Verifikasi melalui Whatsapp
                </h1>
                <p class="mt-2 text-xs text-grey-2 max-w-[193px] mx-auto">
                  Pastikan Nomor Anda memiliki Whatsapp yang aktif
                </p>
              </div>
              <div
                class="flex items-center border-t border-black border-opacity-10"
              >
                <NuxtLink
                  to="/account/change/phone"
                  class="!py-4 font-bold btn btn--block text-primary"
                  >OK</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Popup Validate By Whatsapp -->
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      validateChangePhoneByWhatsapp: false,
      completionB2BData: {
        popup: false,
      },
      confirmationLogout: {
        popup: false,
      },
      axiosCancelToken: null,
    }
  },
  computed: {
    user() {
      return this.$store.state.authentication.user
    },
  },
  mounted() {
    this.$axios.setToken(this.$store.state.authentication.token, 'Bearer')
    this.checkUser()
  },
  created() {
    this.axiosCancelToken = this.$axios.CancelToken.source()
  },
  destroyed() {
    this.axiosCancelToken.cancel()
  },
  methods: {
    checkUser() {
      let token = this.$store.state.authentication.token
      let callback = (response) => {
        this.$store.commit('authentication/setUser', response)
        if (this.user?.account_type && this.user.account_type == 'b2b') {
          if (!this.user?.industry_type) {
            this.completionB2BData.popup = true
          }
        }
      }

      this.$store.dispatch('authentication/user', { token, callback })
    },
    async logout() {
      try {
        this.$store.commit('app/setLoader', true)
        this.confirmationLogout.popup = false

        var response = await this.$axios.$post(
          '/api/v1/logout',
          {},
          {
            CancelToken: this.axiosCancelToken,
          }
        )

        this.$store.commit('app/setLoader', false)
        if (response.success) {
          this.$store.commit('authentication/logout')
          this.$router.push('/auth/login')
        }
      } catch (e) {
        this.$store.commit('app/setLoader', false)
        if (!this.$axios.isCancel(e)) {
        }
      }
    },
  },
}
</script>
