<template>
  <div>
    <div
      v-if="error.statusCode === 404"
      class="flex flex-col items-center justify-center h-screen p-4 bg-white"
    >
      <img
        src="~/assets/images/error/logo-2.png"
        alt="error logo"
        class="w-auto max-w-[300px]"
      />
      <p
        class="text-sm font-medium max-w-[169px] text-grey-2 text-center mx-auto mt-4"
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
      <img
        src="~/assets/images/error/logo.png"
        alt="error logo"
        class="w-auto max-w-[300px]"
      />
      <p
        class="text-sm font-medium max-w-[200px] text-grey-2 text-center mx-auto mt-7"
      >
        Error :
        <span class="text-secondary"
          >{{ error.message }} ({{ error.statusCode }})</span
        >
      </p>
      <button
        class="mt-5 text-sm font-medium underline text-primary"
        onclick="window.location.reload()"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>
