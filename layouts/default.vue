<template>
    <div class="app" :class="appBackground">
        <div
            v-if="isLoader"
            class="fixed inset-0 w-full h-full"
            style="background-color: #0000006e; z-index: 10000"
        >
            <div
                class="relative flex m-auto"
                style="max-width: 330px; min-height: calc(100% - 1rem)"
            >
                <div class="relative flex p-4 m-auto bg-white rounded-xl">
                    <Loader classList="inline-block" />
                </div>
            </div>
        </div>
        <Notification />

        <Nuxt />
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
    },
}
</script>
