<template>
  <div :class="`mb-4 ${$store.state.main.flash.color} rounded-lg`">
    <div class="px-3 py-3 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center flex-1 w-0">
          <span class="flex p-2 bg-gray-800 bg-opacity-60 rounded-lg">
            <SpeakerphoneIcon class="w-6 h-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            {{ $store.state.main.flash.title }}
          </p>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md  hover:bg-gray-800 hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            @click="close"
          >
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon } from '@vue-hero-icons/outline'
export default {
  components: {
    SpeakerphoneIcon
  },
  methods: {
    close () {
      this.$store.commit('main/closeflash')
    }
  }
}
</script>
