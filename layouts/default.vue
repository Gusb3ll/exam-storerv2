<template>
  <div class="flex h-screen overflow-hidden bg-gray-50 dark:bg-hsl-back">
    <div class="flex">
      <NavMain />
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

      <footer class="py-1 text-center bottom-1">
        <h1 class="text-gray-500 text-md">
          © 2021 Varkaria & Gusbell
        </h1>
      </footer>
    </div>
  </div>
</template>
