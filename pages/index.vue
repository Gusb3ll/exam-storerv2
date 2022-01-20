<template>
  <div class="flex items-center justify-center w-full h-full overflow-hidden">
    <div class="relative z-20 grid grid-cols-2 gap-4">
      <div
        class="font-bold text-right text-gray-800 text-9xl"
      >
        EXS
      </div>
      <div class="my-auto">
        <h1 class="text-xl font-semibold text-gray-600 lg:flex hidden">
          Exam storage
        </h1>
        <h1 class="text-sm font-medium text-gray-500 lg:flex hidden">
          By Gusbell <br> Update 1.2
        </h1>
      </div>
    </div>

    <div
      class="absolute flex items-center justify-center opacity-15"
    >
      <img src="~/assets/hina.png" class="w-256">
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home'
  },
  created () {
    this.handleAuth()
  },
  methods: {
    async handleAuth () {
      this.loading = true
      await this.showFlash()
      this.loading = false
    },
    async showFlash () {}
  }
}
</script>
