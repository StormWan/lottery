
const state = {
  activeTab: 0,
  goodsActiveTab: 0
}

// mutations
const mutations = {
  setActiveTab (state, index) {
    state.activeTab = index
  },
  setgoodsActiveTab (state, index) {
    state.goodsActiveTab = index
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
