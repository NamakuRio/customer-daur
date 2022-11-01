<template>
  <div>
    <div
      v-if="error.statusCode === 404"
      class="flex flex-col items-center justify-center h-screen p-4 bg-white"
    >
      <img
        src="~/assets/images/error/logo.png"
        alt="error logo"
        class="w-auto max-w-[300px]"
      />
      <p
        class="text-sm font-medium max-w-[169px] text-grey-2 text-center mx-auto mt-7"
      >
        Halaman yang Anda cari tidak ditemukan
      </p>
      <NuxtLink to="/" class="mt-5 text-sm font-medium underline text-primary"
        >Ke Beranda</NuxtLink
      >
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center h-screen p-4 bg-white"
    >
      <p
        class="text-sm font-medium max-w-[169px] text-grey-2 text-center mx-auto mt-7"
      >
        Hulala
      </p>
      <NuxtLink to="/" class="mt-5 text-sm font-medium underline text-primary"
        >Ke Beranda</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>
