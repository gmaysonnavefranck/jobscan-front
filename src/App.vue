<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col align="center">
          <skill-form @newSkill="(skill) => addSkill(skill)"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <skill-list />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
import JobPosts from './components/job-posts'
import SkillForm from './components/skill-form'
import SkillList from './components/skill-list.vue'

export default {
  name: 'App',
  components: {
    JobPosts,
    SkillForm,
    SkillList,
  },
  methods: {
    addSkill(skill) {
      this.$store.dispatch('skill/addSkill', skill, {root: true})
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
