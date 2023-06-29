<template>
  <div id="app">
    <img :src="require('./flowerLogoNew.png')" alt="Flower Logo" class="flower-logo">
    <nav class="nav-container">
      <router-link :to="{ name: 'homePage' }" class="nav-link">Home</router-link><br>
      <router-link :to="{ name: 'aboutMe' }" class="nav-link">About</router-link><br>
      <router-link :to="{ name: 'projectsPage' }" class="nav-link">Projects</router-link><br>
      <router-link :to="{ name: 'contactInfo' }" class="nav-link">Contact</router-link><br>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: #eee1c5;
}

#app {
  font-family: DM Serif Text, Alegreya Sans Regular, Alegreya Sans Medium, Alegreya Sans Light, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080c0f;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  min-height: 100vh;
}

.flower-logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 160px;
  height: auto;
}

.nav-container {
  position: absolute;
  top: 250px;
  right: 30px;
  max-width: 300px;
  text-align: left;
}

.nav-link {
  margin-bottom: 10px;
  text-decoration: none;
  color: #ac774f;
  display: block;
  transition: transform 0.3s ease;
  font-size: 50px;
}

.nav-link:hover {
  transform: translateX(10px);
}

.home-page {
  font-family: "DM Serif Text Italic", sans-serif;
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

@media (max-width: 768px) {
  #app {
    align-items: center; 
  }

  .nav-container {
    position: absolute;
    top: 250px;
    right: -10;
    margin-top: -60px;
    text-align: left; 
  }

  .nav-link {
    margin-left: 0; 
    font-size: 16px;
  }
.flower-logo {
  width: 120px;
}

}
</style>







