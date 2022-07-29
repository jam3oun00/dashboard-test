export const state = () => ({
  loader: false
})

export const mutations = {
  load(state, payload) {
    state.loader = payload
  }
}
