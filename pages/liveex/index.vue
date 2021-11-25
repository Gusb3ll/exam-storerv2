<template>
  <div>
    <div
      class="
        flex
        items-center
        justify-center
        min-h-full
        px-4
        py-12
        sm:px-6
        lg:px-32
      "
    >
      <div class="w-full p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 class="auth-title">
            LiveExam
          </h2>
        </div>
        <div class="mt-8 space-y-6">
          <div v-for="i in exam" :key="i.id">
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                {{ i.qe }}
              </div>
              <div class="pt-2">
                Ans : {{ i.ans }}
              </div>
            </div>
          </div>

          <div>
            <template v-if="$store.state.auth.user">
              <div class="pt-4">
                <nuxt-link to="/liveex/add">
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
            </template>
            <div class="pt-4">
              <button
                class="search-button"
                :class="{
                  'transition-all opacity-80 pointer-events-none': loading
                }"
                @click="FetchDB"
              >
                <template v-if="loading">
                  Loading
                </template>
                <template v-else>
                  Refresh
                </template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      exam: null,
      loading: false
    }
  },
  head: {
    title: 'Liveex'
  },
  created () {
    this.handleFlash()
    this.FetchDB()
  },
  methods: {
    async handleFlash () {
      this.loading = true
      await this.showFlash()
      this.loading = false
    },
    async FetchDB () {
      this.loading = true
      const { data } = await this.$supabase.from('liveex').select('*')
      this.exam = data
      this.loading = false
    },
    async showFlash () {
      await this.$store.commit('main/notice', 'Current subject : None')
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
