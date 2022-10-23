<template>
  <div class="app" :class="appBackground">
        <Notification />

        <Nuxt/>
  </div>
</template>
<script>
export default {
  computed: {
    appBackground() {
      return 'bg-white'
    },
  },
}
// const appBackground = ref("bg-white");
</script>
