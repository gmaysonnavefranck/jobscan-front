<template>
  <v-chip class="chip" outlined close @click:close="deleteSkill()">
    <h4 class="chip__rating">
      {{skill.rating}}
    </h4>
    <v-icon class="mr-1" color="primary">mdi-star</v-icon>
    <h4>
      {{skill.name}}
    </h4>
  </v-chip>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteSkill() {
      this.$store.dispatch('skill/deleteSkill', this.skill)
    }
  },
}
</script>

<style scoped lang="scss">
  .chip {
    margin-right: 5px;
    margin-top: 5px;
    &__rating {
      margin-top: 2px;
    }
  }
</style>
