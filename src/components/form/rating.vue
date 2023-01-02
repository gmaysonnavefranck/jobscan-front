<template>
  <div>
    <v-row class="ratingPaddingMargin">
      <v-col class="ratingPaddingMargin">
        <p class="ratingPaddingMargin">
          Select your skill Level
        </p>
      </v-col>
    </v-row>
    <v-row class="ratingPaddingMargin">
      <v-col class="ratingPaddingMargin">
        <v-rating
          length="5"
          v-model="cValue"
          size="32"
          dense
          small
          v-bind="$attrs"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
  },
  computed: {
    cValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
}
</script>
<style scoped>
  .ratingPaddingMargin {
    margin: 0;
    padding: 0;
  }
</style>
