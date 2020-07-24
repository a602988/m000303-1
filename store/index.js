export const state = () => ({
  userLogin: false
})

export const getters = {

}

export const mutations = {
  detectLogin(state, boolean) {
    state.userLogin = boolean
  }
}

export const actions = {
  // example
  login() {
    commit('detectLogin', true)
  },
  logout() {
    commit('detectLogin', false)
  }
}