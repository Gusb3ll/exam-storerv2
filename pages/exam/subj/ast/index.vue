<template>
  <div class="h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500">
          Astronomy
        </h1>
      </div>
      <div class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="Key" class="sr-only">Key</label>
            <input
              id="search"
              v-model="search"
              type="text"
              name="search"
              class="input"
              placeholder="Exam key"
            >
          </div>
          <div class="pt-4">
            <button
              class="search-button"
              :class="{
                'transition-all opacity-80 pointer-events-none': loading
              }"
              @click="handleSearch"
            >
              <template v-if="loading">
                Loading
              </template>
              <template v-else>
                Search
              </template>
            </button>
          </div>
          <div class="pt-4">
            <nuxt-link to="/exam/subj/ast/add">
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
      <div v-if="result" class="mt-8">
        <h1 class="text-3xl text-center font-500">
          Answer
        </h1>
        <h1 class="text-3xl text-center font-500 mt-4">
          <div v-for="i in result" :key="i.ans">
            {{ i.ans }}
          </div>
        </h1>
        <h1 class="text-2xl text-center font-500 mt-6">
          ถ้ามีหลายคำตอบให้ยึดอันล่างสุด
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
      result: null,
      loading: false
    }
  },
  head: {
    title: 'Astronomy'
  },
  methods: {
    async handleSearch () {
      this.loading = true
      const { data } = await this.$supabase
        .from('ast')
        .select('ans')
        .range(0, 5)
        .eq('key', this.search)
      this.result = data
      this.loading = false
    }
  }
}
</script>

<style>
.search-button {
  @apply relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
.add-button {
  @apply relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
.input {
  @apply relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 bg-gray-200 rounded-sm appearance-none dark:bg-black dark:bg-opacity-20 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm;
}
</style>
