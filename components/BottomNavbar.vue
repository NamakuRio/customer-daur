<template>
  <div class="w-full">
    <section
      id="bottom-navigation"
      class="fixed inset-x-0 bottom-0 z-10 block m-auto bg-white border-t shadow"
      style="max-width: 444px"
    >
      <div id="tabs" class="flex justify-between">
        <NuxtLink
          to="/"
          exact
          class="justify-center inline-block w-full py-3 text-center transition duration-300 text-grey-2 focus:text-primary hover:text-primary"
        >
          <img
            src="~/assets/images/bottomnavbar-icon/home-default.png"
            class="default-img"
            alt="icon home default"
          />
          <img
            src="~/assets/images/bottomnavbar-icon/home-filled.png"
            class="filled-img"
            alt="icon home filled"
          />
          <span
            style="margin-top: 2px"
            class="relative inline-block text-xs tab tab-home"
          >
            Home
          </span>
        </NuxtLink>
        <NuxtLink
          to="/order"
          class="justify-center inline-block w-full py-3 text-center transition duration-300 text-grey-2 focus:text-primary hover:text-primary"
        >
          <img
            src="~/assets/images/bottomnavbar-icon/order-default.png"
            class="default-img"
            alt="icon order default"
          />
          <img
            src="~/assets/images/bottomnavbar-icon/order-filled.png"
            class="filled-img"
            alt="icon order filled"
          />
          <span
            style="margin-top: 2px"
            class="relative inline-block text-xs tab tab-collect"
          >
            Order
          </span>
        </NuxtLink>
        <NuxtLink
          to="/collect"
          class="justify-center inline-block w-full py-3 text-center transition duration-300 text-grey-2 focus:text-primary hover:text-primary"
        >
          <img
            src="~/assets/images/bottomnavbar-icon/collect-default.png"
            class="default-img"
            alt="icon collect default"
          />
          <img
            src="~/assets/images/bottomnavbar-icon/collect-filled.png"
            class="filled-img"
            alt="icon collect filled"
          />
          <span
            style="margin-top: 2px"
            class="relative inline-block text-xs tab tab-material"
          >
            Pickup
          </span>
        </NuxtLink>
        <NuxtLink
          to="/account"
          class="justify-center inline-block w-full py-3 text-center transition duration-300 text-grey-2 focus:text-primary hover:text-primary"
        >
          <img
            src="~/assets/images/bottomnavbar-icon/account-default.png"
            class="default-img"
            alt="icon account default"
          />
          <img
            src="~/assets/images/bottomnavbar-icon/account-filled.png"
            class="filled-img"
            alt="icon account filled"
          />
          <span
            style="margin-top: 2px"
            class="relative inline-block text-xs tab tab-account"
            >Akun</span
          >
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<style>
#bottom-navigation .nuxt-link-active {
  @apply text-primary;
}

#bottom-navigation #tabs a img.default-img {
  @apply block mx-auto w-8 h-8;
}

#bottom-navigation #tabs a img.filled-img {
  @apply hidden;
}

#bottom-navigation #tabs a.nuxt-link-active img.default-img {
  @apply hidden;
}

#bottom-navigation #tabs a.nuxt-link-active img.filled-img {
  @apply block mx-auto w-8 h-8;
}

#bottom-navigation #tabs a.nuxt-link-active span {
  @apply font-bold;
}
</style>
