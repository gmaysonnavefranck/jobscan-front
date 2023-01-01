import Vue from 'vue'
import Vuex from 'vuex'
import * as skill from '@/store/modules/skill.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    skill
  }
})
