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
            Register
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
            <div>
              <label for="password" class="sr-only">Confirm Password</label>
              <input
                id="passwordConfirm"
                v-model="passwordConfirm"
                name="passwordConfirm"
                type="password"
                autocomplete="current-password"
                required=""
                class="auth-input"
                placeholder="Password Confirm"
              >
            </div>
            <div class="pt-4">
              <label for="code" class="sr-only">Invite Code</label>
              <input
                id="inviteCode"
                v-model="inviteCode"
                name="inviteCode"
                type="string"
                autocomplete="inviteCode"
                required=""
                class="auth-input"
                placeholder="Invite Code"
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
                Signup
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
      passwordConfirm: null,
      inviteCode: null
    }
  },
  created () {
    this.$supabase.auth.onAuthStateChange(async (event, session) => {
      await this.request({ event, session })
    })
  },
  methods: {
    async handleAuth () {
      this.loading = true
      await this.signUp()
      this.loading = false
    },
    async signUp () {
      const { email, password, passwordConfirm, inviteCode } = this
      if (inviteCode !== 'ChangeTheWorld') {
        this.$store.commit('main/error', 'Invalid invite code')
        return
      }
      if (password !== passwordConfirm) {
        this.$store.commit('main/error', 'Password do not match')
        return
      }
      const { error } = await this.$supabase.auth.signUp({ email, password })
      if (error) {
        this.$store.commit('main/error', error.message)
      }
    },
    handleRedirect (event) {
      switch (event) {
        default:
          this.$router.push('/')
          break
      }
    },
    async request ({ event, session }) {
      if (!event) {
        this.$store.commit('main/error', 'Missing Event')
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

<style scoped>
.fixed-width-button {
  width: 100px;
}
</style>
