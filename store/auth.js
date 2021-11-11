export const state = () => ({
  user: null,
  userprofile: null,
  isAuthenticated: false
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
    state.isAuthenticated = !!payload
  },
  setUserInfo (state, payload) {
    state.userprofile = payload
  }
}
