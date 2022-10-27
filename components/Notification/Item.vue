<template>
    <div
        @click="hideNotificationAction"
        class="flex items-center justify-start shadow p-4 rounded-lg max-w-[412px] mx-auto my-4"
        style="background-color: #242424"
    >
        <svg
            v-if="success"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9792 21.8785C14.6159 21.8785 17.1446 20.831 19.0091 18.9666C20.8735 17.1022 21.921 14.5734 21.921 11.9367C21.921 9.3 20.8735 6.77127 19.0091 4.90683C17.1446 3.04239 14.6159 1.99496 11.9792 1.99496C9.34248 1.99496 6.81375 3.04239 4.94931 4.90683C3.08487 6.77127 2.03744 9.3 2.03744 11.9367C2.03744 14.5734 3.08487 17.1022 4.94931 18.9666C6.81375 20.831 9.34248 21.8785 11.9792 21.8785ZM11.9792 23.2987C14.9926 23.2987 17.8826 22.1017 20.0133 19.9709C22.1441 17.8401 23.3412 14.9501 23.3412 11.9367C23.3412 8.92332 22.1441 6.03335 20.0133 3.90256C17.8826 1.77177 14.9926 0.574707 11.9792 0.574707C8.9658 0.574707 6.07583 1.77177 3.94504 3.90256C1.81425 6.03335 0.617188 8.92332 0.617188 11.9367C0.617188 14.9501 1.81425 17.8401 3.94504 19.9709C6.07583 22.1017 8.9658 23.2987 11.9792 23.2987Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1974 7.6334C16.3962 7.43637 16.6645 7.32548 16.9444 7.32471C17.2243 7.32394 17.4932 7.43334 17.693 7.62927C17.8929 7.8252 18.0076 8.09191 18.0124 8.37174C18.0171 8.65157 17.9116 8.92204 17.7185 9.12466L12.0489 16.2117C11.9515 16.3167 11.8338 16.4009 11.7031 16.4594C11.5724 16.5178 11.4312 16.5493 11.288 16.552C11.1448 16.5546 11.0026 16.5284 10.8697 16.4748C10.7369 16.4212 10.6163 16.3414 10.515 16.2401L6.75846 12.4821C6.65381 12.3846 6.56987 12.267 6.51165 12.1364C6.45343 12.0057 6.42212 11.8646 6.4196 11.7216C6.41708 11.5786 6.44339 11.4365 6.49696 11.3039C6.55053 11.1713 6.63027 11.0508 6.73142 10.9496C6.83257 10.8485 6.95305 10.7687 7.08569 10.7152C7.21832 10.6616 7.36039 10.6353 7.50341 10.6378C7.64644 10.6403 7.78749 10.6716 7.91815 10.7299C8.04881 10.7881 8.16641 10.872 8.26393 10.9767L11.2379 13.9493L16.1705 7.66465C16.1793 7.65364 16.1888 7.64321 16.1989 7.6334H16.1974Z"
                fill="white"
            />
        </svg>
        <svg
            v-else-if="error"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9.17188 9.17139L14.8287 14.8282"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9.17188 14.8286L14.8287 9.17176"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <span class="ml-2 text-sm">{{ notification.message }}</span>
    </div>
</template>
<script>
export default {
    props: {
        notification: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            notifTimeOut: '',
        }
    },
    computed: {
        success() {
            this.$props.notification.type == 'success'
        },
        info() {
            this.$props.notification.type == 'info'
        },
        error() {
            this.$props.notification.type == 'error'
        },
    },
    mounted() {
        this.setNotificationTimeOut()
    },
    methods: {
        setNotificationTimeOut() {
            this.notifTimeOut = setTimeout(() => {
                this.$store.commit(
                    'notification/hideNotification',
                    this.$props.notification
                )
            }, this.$props.notification.time || 3000)
        },
        hideNotificationAction() {
            this.$store.commit(
                'notification/hideNotification',
                this.$props.notification
            )
        },
    },
}
</script>
