<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tab></tab>
  </div>
</template>

<script>
import tab from './components/tab'

export default {
  name: 'app',
  components: {
    tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
