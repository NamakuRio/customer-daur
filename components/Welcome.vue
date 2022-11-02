<template>
  <div class="flex items-center justify-center h-screen welcome-screen">
    <div class="z-10 flex flex-col items-center">
      <img
        src="~/assets/images/logo-daur-white.png"
        alt="logo-daur-white"
        class="max-w-[115px]"
      />
      <p class="text-xs text-[#BBDBE2] mt-4">Your Trusted Recycling Partner</p>
      <Loader
        classList="inline-block mt-10"
        classLoaderList="before:!border-white before:!opacity-90 after:!border-white after:!border-l-primary"
      />
    </div>
  </div>
</template>
<style>
.welcome-screen::before {
  @apply absolute inset-0 bg-inherit;
  content: ' ';
}
.welcome-screen {
  background: url('~/assets/images/background-welcome-screen.png');
  background-color: rgba(41, 97, 111, 0.78);
  background-size: contain;
  background-repeat: repeat;
}
</style>
