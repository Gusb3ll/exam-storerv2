<template>
  <h1 class="text-center">
    Logging out...
  </h1>
</template>

<script>
export default {
  middleware: ['pageGuard'],
  created () {
    this.$supabase.auth.onAuthStateChange(async (event, session) => {
      await this.request({ event, session })
    })
  },
  async mounted () {
    await this.signOut()
  },
  methods: {
    async signOut () {
      const { error } = await this.$supabase.auth.signOut()
      if (error) {
        this.$store.commit('main/error', error.message)
      }
    },
    handleRedirect (event) {
      switch (event) {
        case 'SIGNED_OUT':
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
