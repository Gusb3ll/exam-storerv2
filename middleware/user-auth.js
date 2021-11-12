export default async function ({ $axios, $supabase, store }) {
  const data = await $axios.$post('/api/rest/user')
  let data2 = null
  const { user = null } = data
  if (user) {
    const res = await $supabase
      .from('profile')
      .select('*')
      .eq('id', user.id)
      .single()
    data2 = res.data
  }

  if (!store.state.auth.user !== user) {
    store.commit('auth/setUserInfo', data2)
    store.commit('auth/setUser', user)
  }
}
