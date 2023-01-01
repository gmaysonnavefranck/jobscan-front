<template>
  <v-card class="skill-list" outlined>
    <div v-if="cHasSkillsRegistered">
      <v-row>
        <v-col align="start" class="skill-list__title">
          <h3>
            Your Skills
          </h3>
        </v-col>
      </v-row>
    </div>
    <v-row v-if="!cHasSkillsRegistered">
      <v-col>
        <h1 class="mt-5 grey--text">Please Add Skills!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="my-2 ml-2" align="start">
        <skill-chip v-for="skill in cSkills" :key="skill.id" :skill="skill"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SkillChip from './skill-chip.vue'
export default {
  components: {
    SkillChip,
  },
  data() {
    return {
      skills: []
    }
  },
  computed: {
    cHasSkillsRegistered() {
      return this.$store.getters['skill/getSkillsCount'] > 0
    },
    cSkills() {
      return this.$store.getters['skill/getSkills']
    }
  },
}
</script>

<style scoped lang="scss">
  .skill-list {
    margin: 15px;
    max-width: 1000px;
    &__title {
      margin-top: 5px;
      margin-left: 10px
    }
  }
</style>
