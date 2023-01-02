<template>
  <v-row class="ma-1">
    <v-col cols="12" sm="4" v-for="job in jobs" :key="job.id">
      <v-card outlined>
        <v-card-title class="text-wrap title">
          {{ job.title }} @ {{job.company.name}}
        </v-card-title>
        <v-card-subtitle>
          Your score: {{job.userScore}}
        </v-card-subtitle>
        <v-card-text>
          Required skills: {{job.requiredSkills}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
      required: true
    },
  },
  created(){
    this.jobs.forEach(job => {
      job.userScore = this.findUserScore(job)
      job.requiredSkills = job.skill_list.join(', ')
    })
    this.jobs.sort((a, b) => b.userScore - a.userScore)
  },
  methods: {
    findUserScore(job) {
      const registeredSkills = this.$store.getters['skill/getSkills'];
      let score = 0;
      registeredSkills.forEach(registeredSkill => {
        if(job.skill_list.includes(registeredSkill.name))
          score += registeredSkill.rating
      })
      return score;
    }
  },
}
</script>

<style>
  .title {
    word-break: break-word;
  }
</style>
