<template>
  <div class="h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500">
          Add answer for Thai
        </h1>
      </div>
      <div class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="Key" class="sr-only">Key</label>
            <input
              id="key"
              v-model="key"
              type="text"
              name="key"
              class="input"
              placeholder="Exam key"
            >
          </div>
          <div>
            <label for="Answer" class="sr-only">Answer</label>
            <input
              id="answer"
              v-model="answer"
              type="text"
              name="answer"
              class="input"
              placeholder="Answer"
            >
          </div>
          <div class="pt-4">
            <button
              class="add-button"
              :class="{
                'transition-all opacity-80 pointer-events-none': loading
              }"
              @click="handleAdd"
            >
              <template v-if="loading">
                Loading
              </template>
              <template v-else>
                Add
              </template>
            </button>
          </div>
          <div class="pt-4">
            <nuxt-link to="/exam/subj/tha">
              <button
                class="back-button"
                :class="{
                  'transition-all opacity-80 pointer-events-none': loading
                }"
              >
                <template v-if="loading">
                  Loading
                </template>
                <template v-else>
                  Back
                </template>
              </button>
            </nuxt-link>
          </div>
        </div>
        <template v-if="complete">
          <h1 class="text-center text-3xl font-500">
            Added items to the database
          </h1>
        </template>
        <template v-else>
          <h1 class="text-center text-3xl font-500">
            Waiting input
          </h1>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['pageGuard'],
  data () {
    return {
      key: '',
      answer: '',
      result: null,
      loading: false,
      complete: false
    }
  },
  head: {
    title: 'Tha'
  },
  methods: {
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async handleAdd () {
      this.complete = true
      await this.$supabase.from('tha').insert([{ key: this.key, ans: this.answer }], { onConflict: 'key' })
      await this.sleep(1000)
      this.complete = false
    }
  }
}
</script>

<style>
.back-button {
  @apply relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
