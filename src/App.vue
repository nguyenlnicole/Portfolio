<template>
  <div>
    <nav>
      <router-link :to="{ name: 'homePage' }">Home</router-link>||
      <router-link :to="{ name: 'aboutMe' }">About</router-link> ||
      <router-link :to="{ name: 'projectsPage' }">Projects</router-link>
    </nav>
 <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}
</style>