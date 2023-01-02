<template>
  <v-card class="skill-form" outlined>
    <v-form v-model="validForm" ref="form">
      <v-row>
        <v-col align="start" class="skill-form__title">
          <h3>
            Add Your Skills
          </h3>
          <h5 class="red--text" v-if="cFormDisabled">You can only have 10 skills registered!</h5>
        </v-col>
      </v-row>
      <v-row class="ma-3" dense>
        <v-col cols="12" sm="6">
          <v-autocomplete
            class="skill-form__autocomplete"
            clearable
            label="Skill"
            placeholder="Select a skill"
            v-model="selectedSkill"
            :loading="loadingSkills"
            :items="skills"
            item-text="name"
            item-value="name"
            return-object
            dense
            required
            :rules="rules.required"
            :disabled="cFormDisabled"
          />
        </v-col>
        <v-col cols="12" sm="3" class="skill-form__rating">
          <rating
            v-model="ratingValue"
            :readonly="cFormDisabled"
            :color="cFormDisabled ? 'disabled' : 'primary'"
            :background-color="cFormDisabled ? 'disabled' : 'primary'"
          />
        </v-col>
        <v-col cols="12" sm="3" class="mt-4" align="end">
          <v-btn
            outlined
            @click="emitSkill()"
            color="primary"
            :disabled="cFormDisabled"
          >
            Add Skill
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
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
      validForm: false,
      selectedSkill: null,
      ratingValue: 3,
      rules: {
        required: [
          (value) => !!value || 'Required fileld!'
        ]
      }
    }
  },
  computed: {
    cFormDisabled() {
      return this.$store.getters['skill/getSkillsCount'] >= 10;
    },
    cSkills() {
      return this.$store.getters['skill/getSkills'];
    }
  },
  watch: {
    cSkills() {
      this.getSkills();
    }
  },
  mounted () {
    this.getSkills();
  },
  methods: {
    async getSkills() {
      try {
        this.loadingSkills = true;
        this.skills = await Service.getSkills();
        if(this.cSkills.length) {
          this.skills = this.skills.filter(skill => {
            return !this.cSkills.map(selectedSkill=> selectedSkill.id).includes(skill.id);
          })
        }
      } finally {
        this.loadingSkills = false;
      }
    },
    emitSkill(){
      if(!this.$refs.form.validate()) return;
      const data = {
        ...this.selectedSkill,
        rating: this.ratingValue
      }
      this.$emit('newSkill', data)
      this.$refs.form.reset()
      this.ratingValue = 3;
    }
  },
}
</script>

<style scoped lang="scss">
  .skill-form {
    margin: 15px;
    max-width: 1000px;
    &__title {
      margin-top: 5px;
      margin-left: 10px
    }
    &__autocomplete {
      margin-top: 20px;
      padding-right: 40px
    }
    &__rating {
      display: flex;
    }
  }
</style>
