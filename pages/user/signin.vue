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
      <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 class="auth-title">
            Login
          </h2>
        </div>
        <div class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true">
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="auth-input"
                placeholder="Email address"
              >
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="auth-input"
                placeholder="Password"
              >
            </div>
          </div>

          <div>
            <button
              class="auth-button"
              :class="{
                'transition-all opacity-80 pointer-events-none': loading
              }"
              @click="handleAuth"
            >
              <template v-if="loading">
                Loading
              </template>
              <template v-else>
                Login
              </template>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['pagePrevent'],
  data () {
    return {
      email: null,
      password: null,
      loading: false
    }
  },
  head: {
    title: 'Login'
  },
  created () {
    this.$supabase.auth.onAuthStateChange(async (event, session) => {
      await this.request({ event, session })
    })
  },
  methods: {
    async handleAuth () {
      this.loading = true
      await this.signIn()
      this.loading = false
    },
    async signIn () {
      const { email, password } = this
      const { error } = await this.$supabase.auth.signIn({ email, password })
      if (error) {
        this.$store.commit('main/error', error.message)
      }
    },
    handleRedirect (event) {
      switch (event) {
        case 'SIGNED_IN':
          this.$router.push('/')
          break
      }
    },
    async request ({ event, session }) {
      if (!event) {
        throw new Error('Missing event')
      }
      await this.$axios
        .post('/api/rest/auth', { event, session })
        .then(() => {
          this.handleRedirect(event)
        })
        .catch(error => this.$store.commit('main/error', error))
    }
  }
}
</script>

<style>
.auth-button {
  @apply relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
.auth-input {
  @apply relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 bg-gray-200 rounded-sm appearance-none dark:bg-black dark:bg-opacity-20 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm;
}
.auth-title {
  @apply mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white;
}
</style>
