<template>
  <div class="h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500">
          English
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
            <nuxt-link to="/exam/subj/eng/add">
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
    title: 'English'
  },
  methods: {
    async handleSearch () {
      this.loading = true
      const { data } = await this.$supabase
        .from('eng')
        .select('ans')
        .range(0, 5)
        .eq('key', this.search)
      this.result = data
      this.loading = false
    }
  }
}
</script>
