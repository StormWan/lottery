
const state = {
  goodsNumber: undefined,
  sponsor1: undefined,
  goodsTitle: undefined,
  lotterAway: undefined,
  lotteryTime: undefined,
  personNumber: undefined,
  imgGood: undefined
}

// mutations
const mutations = {
  setSaveState (state, goodsNumber, sponsor1, goodsTitle, lotterAway, lotteryTime, personNumber, imgGood) {
    state.goodsTitle = goodsTitle
    state.lotterAway = lotterAway
    state.lotteryTime = lotteryTime
    state.personNumber = personNumber
    state.imgGood = imgGood
  },
  setSaveGoodsNumber (state, goodsNumber) {
    state.goodsNumber = goodsNumber
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
