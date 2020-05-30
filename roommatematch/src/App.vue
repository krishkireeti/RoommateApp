<template>
  <div id="app">
    <img src = "https://www.zikoko.com/wp-content/uploads/zikoko/2019/09/Living-with-a-roommate.jpg" alt="Roommate image">
    <AppHeader></AppHeader>
<div class = "ui container">
<router-view></router-view>
</div>
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
   AppHeader
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
  margin-top: 60px;
}
.header{
  width : 100%;
  height : 10%;
}
</style>
