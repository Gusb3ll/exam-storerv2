export default function ({ redirect, store }) {
  if (store.state.auth.isAuthenticated !== true) {
    redirect('/user/signin')
  }
}
