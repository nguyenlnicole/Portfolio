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
  margin-top: 400px; 
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
    margin-top: 0;
    margin-right: 0;
    text-align: center;
    font-size: 30px;
  }

  .homeTitle {
    margin-top: 10px;
    margin-right: 0;
    text-align: center;
    font-size: 20px;
  }
}
</style>