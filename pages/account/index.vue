<template>
    <div>
        <Header title="Akun Saya"/>
        <div class="with-header with-bottom-navbar">
            <div>
                <div class="px-6 pt-3 pb-5">
                    <div class="text-center">
                        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="Foto Profil" class="w-24 h-24 mx-auto rounded-full">
                        <div class="mt-2">
                            <h2 class="text-sm font-bold text-black">Nancy Smith</h2>
                            <p class="mt-2 text-sm text-grey-2">Pengguna Bisnis</p>
                            <p class="mt-2 text-sm text-grey-2">+6285-649-304-893</p>
                            <p class="mt-1 text-sm text-grey-2">nancy.smith@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col py-2 border-t border-black border-opacity-10">
                        <NuxtLink to="/account/change" class="flex items-center justify-start px-4 py-3">
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.579 2 2 6.579 2 12C2 17.421 6.579 22 12 22C17.421 22 22 17.421 22 12C22 6.579 17.421 2 12 2ZM12 7C13.727 7 15 8.272 15 10C15 11.728 13.727 13 12 13C10.274 13 9 11.728 9 10C9 8.272 10.274 7 12 7ZM6.894 16.772C7.791 15.452 9.287 14.572 11 14.572H13C14.714 14.572 16.209 15.452 17.106 16.772C15.828 18.14 14.015 19 12 19C9.985 19 8.172 18.14 6.894 16.772Z" fill="#CACACA"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Edit Profil</p>
                        </NuxtLink>
                        <NuxtLink to="/account/change/phone" class="flex items-center justify-start px-4 py-3">
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#CACACA"/><path d="M11.6239 12.055L12.4639 11.215C12.577 11.1033 12.7201 11.0268 12.8759 10.9948C13.0317 10.9629 13.1934 10.9768 13.3414 11.035L14.3651 11.4438C14.5147 11.5045 14.6429 11.6081 14.7337 11.7416C14.8244 11.875 14.8736 12.0324 14.8751 12.1938V14.0688C14.8742 14.1786 14.8512 14.287 14.8073 14.3877C14.7634 14.4883 14.6995 14.579 14.6197 14.6544C14.5398 14.7297 14.4455 14.7881 14.3425 14.826C14.2394 14.8639 14.1298 14.8806 14.0201 14.875C6.84636 14.4288 5.39886 8.35377 5.12511 6.02877C5.1124 5.91459 5.12401 5.79902 5.15918 5.68966C5.19434 5.58029 5.25227 5.47961 5.32914 5.39424C5.40601 5.30887 5.50008 5.24074 5.60517 5.19434C5.71026 5.14794 5.82398 5.12431 5.93886 5.12502H7.75011C7.91174 5.12549 8.06953 5.17432 8.20318 5.2652C8.33684 5.35609 8.44025 5.48488 8.50011 5.63502L8.90886 6.65877C8.96896 6.80617 8.98429 6.96801 8.95294 7.12407C8.9216 7.28013 8.84496 7.4235 8.73261 7.53627L7.89261 8.37627C7.89261 8.37627 8.37636 11.65 11.6239 12.055Z" fill="white"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Ubah Nomor Telepon</p>
                        </NuxtLink>
                        <NuxtLink to="/account/change/email" class="flex items-center justify-start px-4 py-3">
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#CACACA"/><path d="M13.5 6H6.5C6.10218 6 5.72064 6.15804 5.43934 6.43934C5.15804 6.72064 5 7.10218 5 7.5V12.5C5 12.8978 5.15804 13.2794 5.43934 13.5607C5.72064 13.842 6.10218 14 6.5 14H13.5C13.8978 14 14.2794 13.842 14.5607 13.5607C14.842 13.2794 15 12.8978 15 12.5V7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6ZM13.5 7L10.25 9.235C10.174 9.27888 10.0878 9.30199 10 9.30199C9.91223 9.30199 9.82601 9.27888 9.75 9.235L6.5 7H13.5Z" fill="white"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Ubah Email</p>
                        </NuxtLink>
                        <NuxtLink to="/trash" class="flex items-center justify-start px-4 py-3">
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#CACACA"/><path d="M13.7812 10.0485L14.5467 11.375C14.7003 11.641 14.7811 11.9427 14.7812 12.2499C14.7812 12.557 14.7004 12.8588 14.5469 13.1248C14.3933 13.3908 14.1725 13.6117 13.9065 13.7654C13.6406 13.919 13.3389 13.9999 13.0317 14H12.0002V15.25L9.50022 13.5L12.0002 11.75V13H13.0312C13.1629 13.0001 13.2923 12.9655 13.4064 12.8997C13.5205 12.8339 13.6152 12.7392 13.6811 12.6252C13.747 12.5112 13.7817 12.3818 13.7817 12.2501C13.7817 12.1184 13.7471 11.9891 13.6812 11.875L12.9152 10.5485L13.7812 10.0485ZM7.65222 8.56701L7.91722 11.607L6.83522 10.982L6.31972 11.875C6.25389 11.989 6.21924 12.1184 6.21924 12.25C6.21924 12.3817 6.25389 12.511 6.31971 12.625C6.38554 12.739 6.48021 12.8337 6.59423 12.8995C6.70824 12.9654 6.83757 13 6.96922 13H8.50022V14H6.96922C6.66203 14 6.36026 13.9191 6.09423 13.7655C5.82821 13.6119 5.6073 13.391 5.45371 13.125C5.30012 12.859 5.21926 12.5572 5.21926 12.25C5.21927 11.9428 5.30013 11.641 5.45372 11.375L5.96872 10.4815L4.88672 9.85701L7.65172 8.56701H7.65222ZM10.8752 5.48451C11.1412 5.63801 11.3622 5.85901 11.5157 6.12501L12.0307 7.01751L13.1137 6.39251L12.8487 9.43301L10.0827 8.14301L11.1652 7.51801L10.6497 6.62501C10.5839 6.51101 10.4892 6.41634 10.3752 6.35052C10.2612 6.2847 10.1319 6.25005 10.0002 6.25005C9.86857 6.25005 9.73925 6.2847 9.62524 6.35052C9.51123 6.41634 9.41655 6.51101 9.35072 6.62501L8.58472 7.95151L7.71872 7.45151L8.48522 6.12501C8.71729 5.72309 9.09952 5.42981 9.54782 5.30969C9.99612 5.18957 10.4738 5.25246 10.8757 5.48451H10.8752Z" fill="white"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Informasi Jenis Sampah</p>
                        </NuxtLink>
                        <div class="flex items-center justify-start px-4 py-3">
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 1.4375C5.94316 1.4375 1.4375 5.94316 1.4375 11.5C1.4375 17.0568 5.94316 21.5625 11.5 21.5625C17.0568 21.5625 21.5625 17.0568 21.5625 11.5C21.5625 5.94316 17.0568 1.4375 11.5 1.4375ZM11.5 17.3398C11.0036 17.3398 10.6016 16.9378 10.6016 16.4414C10.6016 15.945 11.0036 15.543 11.5 15.543C11.9964 15.543 12.3984 15.945 12.3984 16.4414C12.3984 16.9378 11.9964 17.3398 11.5 17.3398ZM12.9128 12.4097C12.7094 12.4882 12.5344 12.6262 12.4106 12.8057C12.2868 12.9852 12.2199 13.1979 12.2188 13.4159V13.9258C12.2188 14.0246 12.1379 14.1055 12.0391 14.1055H10.9609C10.8621 14.1055 10.7812 14.0246 10.7812 13.9258V13.4429C10.7812 12.924 10.9317 12.4119 11.2282 11.9852C11.518 11.5674 11.9223 11.2484 12.3984 11.0665C13.1621 10.7723 13.6562 10.1321 13.6562 9.43359C13.6562 8.44307 12.6882 7.63672 11.5 7.63672C10.3118 7.63672 9.34375 8.44307 9.34375 9.43359V9.6043C9.34375 9.70312 9.26289 9.78398 9.16406 9.78398H8.08594C7.98711 9.78398 7.90625 9.70312 7.90625 9.6043V9.43359C7.90625 8.55088 8.29258 7.72656 8.99336 7.11338C9.66719 6.52266 10.5566 6.19922 11.5 6.19922C12.4434 6.19922 13.3328 6.5249 14.0066 7.11338C14.7074 7.72656 15.0938 8.55088 15.0938 9.43359C15.0938 10.7318 14.238 11.8998 12.9128 12.4097Z" fill="#CACACA"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Bantuan</p>
                        </div>
                        <div class="flex items-center justify-start px-4 py-3">
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 1.4375C5.94316 1.4375 1.4375 5.94316 1.4375 11.5C1.4375 17.0568 5.94316 21.5625 11.5 21.5625C17.0568 21.5625 21.5625 17.0568 21.5625 11.5C21.5625 5.94316 17.0568 1.4375 11.5 1.4375ZM12.2188 16.3516C12.2188 16.4504 12.1379 16.5312 12.0391 16.5312H10.9609C10.8621 16.5312 10.7812 16.4504 10.7812 16.3516V10.2422C10.7812 10.1434 10.8621 10.0625 10.9609 10.0625H12.0391C12.1379 10.0625 12.2188 10.1434 12.2188 10.2422V16.3516ZM11.5 8.625C11.2179 8.61924 10.9492 8.50312 10.7518 8.30156C10.5543 8.1 10.4437 7.82906 10.4437 7.54688C10.4437 7.26469 10.5543 6.99375 10.7518 6.79219C10.9492 6.59063 11.2179 6.47451 11.5 6.46875C11.7821 6.47451 12.0508 6.59063 12.2482 6.79219C12.4457 6.99375 12.5563 7.26469 12.5563 7.54688C12.5563 7.82906 12.4457 8.1 12.2482 8.30156C12.0508 8.50312 11.7821 8.61924 11.5 8.625Z" fill="#CACACA"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Syarat & Ketentuan</p>
                        </div>
                    </div>
                    <div class="flex flex-col py-2 border-t border-black border-opacity-10">
                        <div class="flex items-center justify-start px-4 py-3 cursor-pointer" >
                            <div class="flex items-center justify-center min-w-[24px]  min-h-[24px] max-w-[24px] max-h-[24px] w-6 h-6">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5002 22.9167C6.74704 22.9167 2.0835 18.2532 2.0835 12.5C2.0835 6.74692 6.74704 2.08337 12.5002 2.08337C18.2533 2.08337 22.9168 6.74692 22.9168 12.5C22.9168 18.2532 18.2533 22.9167 12.5002 22.9167ZM7.29183 11.4584V8.33337L2.0835 12.5L7.29183 16.6667V13.5417H15.6252V11.4584H7.29183Z" fill="#FF9595"/></svg>
                            </div>
                            <p class="ml-4 text-sm text-black">Keluar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNavbar/>

        <!-- Popup Section -->
        <!-- Start Popup Confirm Logout -->
        <transition name="slide-popup">
            <div class="fixed bottom-0 flex items-center justify-center w-full h-full" style="max-width: 444px;background-color: rgba(0, 0, 0, 0.5);z-index: 1111;">
                <div class="absolute z-0 w-full h-full"></div>
                <div class="z-10 content-center w-full p-4 transition-all duration-1000 top-14">
                    <div class="w-full overflow-auto bg-white rounded-lg">
                        <!-- content -->
                        <div>
                            <div class="px-3 pb-8 text-center pt-7">
                                <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path d="M42.5002 77.9166C62.0602 77.9166 77.9168 62.06 77.9168 42.4999C77.9168 22.9398 62.0602 7.08325 42.5002 7.08325C22.9401 7.08325 7.0835 22.9398 7.0835 42.4999C7.0835 62.06 22.9401 77.9166 42.5002 77.9166Z" stroke="#DD9813" stroke-width="4"/><path d="M35.417 30.0473C37.1878 26.5411 38.9587 24.7915 42.5003 24.7915C46.9132 24.7915 49.5837 28.2942 49.5837 31.7969C49.5837 35.2996 47.8128 37.0492 42.5003 40.5555V46.0415M42.5003 58.4373V60.2082" stroke="#DD9813" stroke-width="4" stroke-linecap="round"/></svg>
                                <h1 class="mt-4 text-xl font-semibold text-primary">Yakin Ingin Logout?</h1>
                                <p class="mt-2 text-xs text-grey-2">Anda akan keluar dari web app Daur</p>
                            </div>
                            <div class="flex items-center border-t border-black border-opacity-10">
                                <button class="!py-4 uppercase btn btn--block text-grey-2 font-medium">Batal</button>
                                <button class="!py-4 font-bold uppercase btn btn--block text-primary">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!-- End Popup Confirm Logout -->
    </div>
</template>
<style>
.slide-popup-enter-active,
.slide-popup-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-popup-enter,
.slide-popup-leave-to {
  opacity: 0;
  transform: translate3d(0, -15px, 0);
}
</style>
