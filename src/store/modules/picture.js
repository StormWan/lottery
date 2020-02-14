import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  p1: ''
}

const mutations = {
  addP1 (a, b) {
    a.p1 = b
    console.log('----------------' + a.p1)
  }
}

export default new Vuex.Store({ state, mutations })
