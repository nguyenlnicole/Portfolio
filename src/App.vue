<template>
  <div>
    <nav>
      <router-link :to="{ name: 'homePage' }" class="nav-link">Home.</router-link><br>
      <router-link :to="{ name: 'aboutMe' }" class="nav-link">About.</router-link> <br>
      <router-link :to="{ name: 'projectsPage' }" class="nav-link">Projects.</router-link><br>
      <router-link :to="{ name: 'contactInfo' }" class="nav-link">Contact.</router-link> <br>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  background-color: #eee1c5;
  font-family: DM Serif Text, Alegreya Sans Regular, Alegreya Sans Medium, Alegreya Sans Light, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080c0f;
  margin-top: 60px; 
  display: flex;
  justify-content: flex
}

nav {
  text-align: center;
  margin-top: 200px;
  margin-left: 500px;
  margin-right: 5px;
  max-width: 300px;
}

.nav-link {
  margin-left: 750px;
  font-size: 90px;
  text-decoration: none;
  color: #0a0a0a;
  display: inline-block;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  transform: translateX(10px);
}

.home-page {
  font-family: "Dm Serif Text Italic", sans-serif;
}

.about-page {
  font-family: "Font2", sans-serif;
}

.projects-page {
  font-family: "Font3", sans-serif;
}

.contact-page {
  font-family: "Font4", sans-serif;
}
</style>