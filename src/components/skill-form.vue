<template>
  <v-card class="skill-form" outlined>
    <v-row class="ma-3" dense>
      <v-col cols="12" sm="6">
        <v-autocomplete
          class="skill-form__autocomplete"
          clearable
          label="Skill"
          placeholder="Select a skill"
          :loading="loadingSkills"
          :items="skills"
          item-text="name"
          item-value="name"
          dense
        />
      </v-col>
      <v-col cols="12" sm="3" class="skill-form__rating">
        <rating :value="ratingValue" />
      </v-col>
      <v-col cols="12" sm="3" class="mt-4" align="end">
        <v-btn
          outlined
          @click="emitSkill()"
          color="primary"
        >
          Add Skill
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Service from '@/service/service'
import Rating from '@/components/rating.vue'
export default {
  components: {
    Rating,
  },
  data() {
    return {
      skills: [],
      loadingSkills: false,
      selectedSkill: null,
      ratingValue: 3
    }
  },
  mounted () {
    this.getSkills();
  },
  methods: {
    async getSkills() {
      this.loadingSkills = true;
      this.skills = await Service.getSkills();
      this.loadingSkills = false;
    },
    emitSkill(){
      const data = {
        skill: this.selectedSkill,
        rating: this.ratingValue
      }
      this.$emit('newSkill', data)
    }
  },
}
</script>

<style scoped lang="scss">
  .skill-form {
    margin: 15px;
    max-width: 1000px;
    &__autocomplete {
      margin-top: 20px;
      padding-right: 40px
    }
    &__rating {
      display: flex;
    }
  }
</style>
