<template>
  <body>
    <h1 class="homeName">NICOLE NGUYEN</h1>
    <h2 class="homeTitle">Software Engineer</h2>
  </body>
</template>

<script>
export default {

}
</script>

<style>
.homeName {
  font-family:  Alegreya Sans Regular, sans-serif; 
  font-size: 45px;
  margin-top: 250px; 
  margin-right: 500px;
  
}

.homeTitle {
  font-family:Source Sans Pro , sans-serif; 
  margin-top: 10px; 
  font-size: 30px;
  margin-right: 500px
}

@media (max-width: 768px) {
  .homeName {
    margin-top: -280px;
    margin-right: 90px;
    text-align: center;
    font-size: 20px;
  }

  .homeTitle {
    margin-top: 30px;
    margin-right: 90px;
    text-align: center;
    font-size: 15px;
  }
}
</style>