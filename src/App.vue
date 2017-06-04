<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tab></tab>

    <div class="linkMain">
      <router-link to="/home" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/list" class="link">List</router-link>
      <router-view></router-view>
    </div>
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
.linkMain .link{
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid #e5e5e5;
  color: #000;
  text-decoration: none;
  margin: 5px;
}
.router-link-active{
  background: #0009e5;
  color: #fff!important;
}
</style>
