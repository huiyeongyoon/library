const state = {
  reload: false,
}

const mutations = {
  SET_RELOAD: (state, reload) => {
    state.reload = reload
  },
}

const actions = {
  setReload({ commit }) {
    commit("SET_RELOAD", true)
    setTimeout(() => {
      commit("SET_RELOAD", false)
    }, 1000)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
