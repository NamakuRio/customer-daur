<template>
  <nav
    class="text-white transition duration-300 fixed inset-x-0 top-0 z-50 flex flex-wrap justify-between items-center py-2 min-h-[56px] max-h-[56px] bg-primary"
    :class="{ 'shadow-lg': !view.atTopOfPage }"
  >
    <div
      class="flex flex-wrap items-center justify-between mx-auto w-full px-4 max-w-[444px]"
    >
      <div>
        <template v-if="leftAction">
          <slot name="left-action" />
        </template>
        <div v-else class="min-w-[37px] min-h-[40px]"></div>
      </div>
      <h6 class="navbar-title">{{ title }}</h6>
      <div>
        <template v-if="rightAction">
          <slot name="right-action" />
        </template>
        <div v-else class="min-w-[37px] min-h-[40px]"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['title', 'leftAction', 'rightAction'],
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
  },
}
</script>

<style>
.navbar-title {
  @apply text-sm inline-block text-center text-white;
}
</style>
