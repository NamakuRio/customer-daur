<template>
  <div>
    <div
      class="inset-0 flex items-center w-full"
      :class="classList"
      :style="styleList"
    >
      <div
        class="relative p-0 m-auto rounded-full loader-app-data"
        :class="classLoaderList"
        :style="styleLoaderList"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    classList: {
      type: String,
      default: 'absolute',
    },
    styleList: {
      type: String,
      default: '',
    },
    classLoaderList: {
      type: String,
      default: '',
    },
    styleLoaderList: {
      type: String,
      default: 'width: 40px;height: 40px;',
    },
  },
}
</script>
<style>
.loader-app-data::before,
.loader-app-data::after {
  @apply absolute inset-0 rounded-full border-[5px] border-solid border-primary;
  content: '';
}

.loader-app-data::before {
  @apply opacity-[0.3];
}

.loader-app-data::after {
  @apply opacity-[0.75] border-transparent border-l-primary;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
