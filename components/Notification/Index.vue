<template>
<div class="fixed left-0 w-full p-4 text-white transition duration-300 bottom-4" style="z-index:1112;">
    <transition-group name="slide-alert">
        <NotificationItem v-for="notification in notifications" :key="notification.id" :notification="notification" />
    </transition-group>
</div>
</template>
<script>
export default {
  computed: {
    notifications() {
      return this.$store.state.notification.notifications
    },
  },
}
</script>
<style>
.slide-alert-enter-active,
.slide-alert-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-alert-enter,
.slide-alert-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
