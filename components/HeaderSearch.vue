<template>
  <nav
    class="text-black transition duration-300 fixed inset-x-0 top-0 z-50 flex flex-wrap border-b border-black border-opacity-10 justify-between items-center py-2 min-h-[56px] max-h-[56px] bg-white"
    :class="{ 'shadow-lg': !view.atTopOfPage }"
  >
    <div
      class="flex items-center justify-start mx-auto w-full px-4 max-w-[444px]"
    >
      <slot name="left-action" />
      <div class="w-full text-black search-box">
        <input
          type="search"
          :placeholder="placeholder"
          class="block w-full p-4 text-sm text-black bg-white rounded focus:outline-none max-h-[40px]"
          @keyup="search($event.target.value)"
          @change="search($event.target.value)"
          autofocus
        />
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Cari',
    },
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    search(value) {
      this.$emit('search', value)
    },
  },
}
</script>

<style></style>
