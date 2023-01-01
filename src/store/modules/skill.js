export const namespaced = true;

export const state = {
  skills: []
};

export const mutations = {
  ADDSKILL(state, skill) {
    state.skills.push(skill);
  },
  DELETESKILL(state, skillToRemove) {
    state.skills = state.skills.filter(skill => skill.id !== skillToRemove.id);
  },
  UPDATESKILL(state, skillToUpdate) {
    const index  = state.skills.findIndex(skill => skill.id === skillToUpdate.id);
    state.skills.splice(index, 1, skillToUpdate);
  }
};

export const actions = {
    addSkill({ commit }, skill) {
      commit('ADDSKILL', skill);
    },
    deleteSkill({ commit }, skillToRemove) {
      commit('DELETESKILL', skillToRemove);
    },
    updateSkill({ commit }, skillToUpdate) {
      commit('UPDATESKILL', skillToUpdate);
    }
}

export const getters = {
  getSkillsCount() {
    return state.skills.length;
  },
  getSkills() {
    return state.skills;
  },
  getSkillById: (state) => (id) => {
    const foundSkill = state.skills.find(skill => skill.id === id);
    return foundSkill;
  }
}
