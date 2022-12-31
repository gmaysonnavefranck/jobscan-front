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
          :value="cValue"
          size="32"
          dense
          small
          />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: 3
    },
  },
  computed: {
    cValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.cValue = newValue
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
