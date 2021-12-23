<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64 pt-5 pb-4 bg-gray-100 dark:bg-hsl-bg">
      <div class="px-6">
        <NuxtLink to="/">
          <p class="text-3xl font-bold text-gray-800 dark:text-gray-100">
            EXS
          </p>
          <p class="mt-1 text-xs font-medium text-gray-800 dark:text-gray-100">
            Exam storage
          </p>
        </NuxtLink>
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
                <nuxt-link to="/liveex/">
                  <a class="nav-button">
                    <AnnotationIcon class="icon" /> LiveExam</a>
                </nuxt-link>
                <template v-if="$store.state.auth.user">
                  <nuxt-link to="/exam/">
                    <a class="nav-button">
                      <ArchiveIcon class="icon" /> Exams</a>
                  </nuxt-link>
                </template>
              </div>

              <h3
                class="px-3 mt-2 mb-2 text-xs font-semibold leading-4 tracking-wider text-gray-500 uppercase dark:text-gray-200"
              >
                Midterm exam
              </h3>

              <div class="buttons">
                <nuxt-link to="/ggex/eng/">
                  <a class="nav-button">
                    <ArchiveIcon class="icon" /> English</a>
                </nuxt-link>
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
</template>

<script>
import {
  HomeIcon,
  ArchiveIcon,
  AnnotationIcon
} from '@vue-hero-icons/outline'
export default {
  components: {
    HomeIcon,
    ArchiveIcon,
    AnnotationIcon
  },
  computed: {
    user () {
      return this.$store.state.auth.user
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
  right: 0;
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
