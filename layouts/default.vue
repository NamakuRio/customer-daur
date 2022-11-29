<template>
  <div class="app" :class="[appBackground]">
    <transition name="fade">
      <div
        v-if="isLoader"
        class="fixed inset-0 w-full h-full bg-[#0000006e] z-[10000]"
      >
        <div class="relative flex m-auto max-w-[330px] min-h-screen">
          <div class="relative flex p-4 m-auto bg-white rounded-xl">
            <Loader classList="inline-block" />
          </div>
        </div>
      </div>
    </transition>
    <Notification />

    <Nuxt v-if="isAppLoaded" />
    <Welcome v-else />
  </div>
</template>
<script>
export default {
  computed: {
    appBackground() {
      return 'bg-white'
    },
    isLoader() {
      return this.$store.state.app.loader
    },
    user() {
      return this.$store.state.authentication.user
    },
    isAppLoaded() {
      return this.$store.state.app.isAppLoaded
    },
  },
}
</script>
