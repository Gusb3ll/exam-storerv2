<template>
  <div>
    <div :class="open" class="">
      <button class="m-4 text-2xl font-bold text-black outline-none dark:text-white" @click="tog()">
        &#9776;
      </button>
    </div>
    <div
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="
        absolute
        top-0
        z-20
        h-full
        bg-gray-100
        w-64
        navbar
      "
    >
      <div class="flex flex-col w-full h-full pt-5 pb-4 bg-gray-100">
        <div class="px-6 flex flex-row">
          <NuxtLink to="/">
            <p class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              EXS
            </p>
          </NuxtLink>
          <button class="absolute right-8 top-7" @click="tog()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        <div class="flex flex-col justify-between flex-1 h-0 overflow-y-auto">
          <nav class="px-3 mt-6">
            <div class="flex flex-col justify-between">
              <div>
                <h3
                  class="px-3 mb-2 text-xs font-semibold leading-4 tracking-wider text-gray-500 uppercase dark:text-gray-200"
                >
                  Page
                </h3>

                <div class="buttons">
                  <nuxt-link to="/">
                    <a class="nav-button"> <HomeIcon class="icon" /> Home</a>
                  </nuxt-link>

                  <template v-if="$store.state.auth.user">
                    <nuxt-link to="/exam/">
                      <a class="nav-button">
                        <ArchiveIcon class="icon" /> Exams</a>
                    </nuxt-link>
                    <nuxt-link to="/log">
                      <a class="nav-button">
                        <CheckIcon class="icon" /> Updates</a>
                    </nuxt-link>
                  </template>
                </div>
              </div>
            </div>
          </nav>
          <div class="px-3">
            <NavEleUsercard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  HomeIcon,
  ArchiveIcon,
  CheckIcon
} from '@vue-hero-icons/outline'
export default {
  components: {
    HomeIcon,
    CheckIcon,
    ArchiveIcon
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    tog () {
      this.open = !this.open
    }
  }
}
</script>

<style>
input.checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
.navbar {
  transition: all 0.3s ease;
  left: 0;
}
.navbar-close {
  transform: translateX(-30rem);
}
input.checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
.icon {
  @apply w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out dark:text-gray-100 group-hover:text-gray-500 group-focus:text-gray-600;
}
.nav-button {
  @apply mb-2 flex justify-between items-center px-4 py-2.5 text-sm font-medium leading-5
  text-gray-700 transition duration-150 ease-in-out rounded-md cursor-pointer dark:text-gray-100
  group focus:outline-none focus:bg-gray-50 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-dark-900 dark:hover:bg-opacity-50;
}
.blacklight {
  position: absolute;
  background: rgb(255, 255, 255);
  width: 20000px;
  height: 20000px;
  top: -8000px;
  right: -8000px;
  z-index: 5;
}
a.nuxt-link-exact-active .nav-button {
  @apply bg-gray-300 dark:bg-dark-900 dark:bg-opacity-30;
}
</style>
