<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <About/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import About from './components/about'

export default {
  name: 'app',
  // components: {
  //   About
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
