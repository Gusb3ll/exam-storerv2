<template>
  <div class="flex h-screen overflow-hidden">
    <div class="hidden xl:flex">
      <NavDesktopMain />
    </div>
    <div class="xl:hidden flex">
      <NavMobileMain />
    </div>
    <div class="relative flex flex-col flex-1 w-0 overflow-hidden">
      <main
        class="relative z-0 flex-1 p-10 pb-6 overflow-y-auto transition-all transform-gpu focus:outline-none"
        :class="{
          'opacity-60 pointer-events-all scale-99':
            $store.state.main.routeloading
        }"
      >
        <EleLayoutNotification v-if="$store.state.main.flash.active" />
        <Nuxt />
      </main>

      <footer class="footer relative py-1 bottom-1">
        <h1 class="text-gray-500 text-md text-center">
          © 2022 | Gusbell
        </h1>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.footer {
  left: 50%;
  transform: translateX(-55%);
}
</style>
