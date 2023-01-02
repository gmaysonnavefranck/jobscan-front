<template>
  <v-app>
    <v-main>
      <v-row class="ml-3">
        <v-col align="center" cols="12">
          <skill-form @newSkill="(skill) => addSkill(skill)"/>
        </v-col>
        <v-col align="center" cols="12">
          <skill-list :loading="loading" @searchJobs="(skills) => searchJobs(skills)"/>
        </v-col>
        <v-col align="center" cols="12">
          <v-progress-circular
            v-if="loading"
            color="primary"
            indeterminate
            size="70"
          />
          <job-posts v-if="!loading" :jobs="jobs" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
import Service from '@/service/service'
import JobPosts from './components/job-posts'
import SkillForm from './components/form/skill-form'
import SkillList from './components/list/skill-list.vue'

export default {
  name: 'App',
  components: {
    JobPosts,
    SkillForm,
    SkillList,
  },
  data() {
    return {
      loading: false,
      jobs: []
    }
  },
  methods: {
    addSkill(skill) {
      this.$store.dispatch('skill/addSkill', skill, {root: true})
    },
    async searchJobs(skills) {
      try {
        this.loading = true;
        this.jobs = await Service.getJobPostings(skills)
      } finally {
        this.loading = false;
      }
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
