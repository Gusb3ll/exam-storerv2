<template>
  <div class="h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500">
          Math
        </h1>
      </div>
      <div class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="Key" class="sr-only">Key</label>
            <input
              id="seearch"
              v-model="search"
              type="text"
              name="search"
              class="search-input"
              placeholder="Exam key"
              @change="handleSearch"
            >
          </div>
          <div class="pt-4">
            <nuxt-link to="/exam/subj/mth/add">
              <button
                class="add-button"
                :class="{
                  'transition-all opacity-80 pointer-events-none': loading
                }"
              >
                <template v-if="loading">
                  Loading
                </template>
                <template v-else>
                  Add
                </template>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <h1 class="text-3xl text-center font-500">
          Output
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['pageGuard'],
  data () {
    return {
      search: '',
      exam: null,
      loading: false
    }
  },
  head: {
    title: 'Mth'
  },
  async created () {
    await this.fetchDB
  },
  methods: {
    handleSearch () {
      if (this.search !== '') {
        return true
      }
    }
  },
  async fetchDB () {
    this.load = true
    const { data } = await this.$supabase
      .from('mth')
      .select()
      .eq('key', '0')
    this.exam = data
    this.handleSearch()
    this.load = false
  }
}
</script>

<style>
.search-button {
  @apply relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
.add-button {
  @apply relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
.search-input {
  @apply relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 bg-gray-200 rounded-sm appearance-none dark:bg-black dark:bg-opacity-20 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm;
}
.auth-title {
  @apply mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white;
}
</style>
