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
  login(context) {
    context.commit('detectLogin', true)
  },
  logout(context) {
    context.commit('detectLogin', false)
  }
}