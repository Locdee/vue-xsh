<template>
  <div id="app">
    <router-view  v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>

export default {
    name: 'app'
}
</script>

<style>
body{
   background:#fbfbfb;
   margin:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0 auto;
  max-width: 100%;
}
</style>
