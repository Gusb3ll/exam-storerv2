export const state = () => ({
  routeloading: false,
  flash: {
    active: false,
    color: '',
    title: ''
  }
})
export const mutations = {
  setroute (state, payload) {
    if (payload === false || payload === true) {
      state.routeloading = payload
    }
  },
  success (state, payload) {
    state.flash.active = true
    state.flash.color = 'bg-green-600'
    state.flash.title = payload
  },
  error (state, payload) {
    state.flash.active = true
    state.flash.color = 'bg-red-600'
    state.flash.title = payload
  },
  warning (state, payload) {
    state.flash.active = true
    state.flash.color = 'bg-yellow-600'
    state.flash.title = payload
  },
  closeflash (state) {
    state.flash.active = false
  }
}
