<template>
  <v-app>
    <v-main>
      <job-posts />
    </v-main>
  </v-app>
</template>
<script>
import JobPosts from './components/job-posts'

export default {
  name: 'App',
  components: {
    JobPosts
  }
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
