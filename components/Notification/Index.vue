<template>
    <div
        class="fixed left-0 w-full px-4 text-white transition duration-300 bottom-4"
        style="z-index: 1112"
    >
        <transition-group name="slide-alert">
            <NotificationItem
                v-for="notification in notifications"
                :key="notification.id"
                :notification="notification"
            />
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
