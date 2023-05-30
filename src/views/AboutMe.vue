<template>
  <div class="aboutMe">
    <h1 class="aboutMeName">About Me.</h1>
    </div>
    <div class="imageContainer">
      <img :src="require('@/views/nicolesHeadshot.png')" alt="Nicole's Headshot" class="headshotImage" />
    </div>

<div>
    <h2 class="aboutMeTitle">
      My name is Nicole Nguyen, and my love for coding started when I was introduced <br>
      to Xanga. I was able to continue gaining more experiencewith MySpace. I didn't <br>
      realize that coding was a career choice, instead ventured into veterinarian medicine <br>
      and healthcare. I developed skills in relationship building, creating solutions, and<br>
      working across teams. I am very friendly and easy to work with. I just completed a 14 <br>
      weeks full stack software develpoment bootcamp. I’m ready to bring my love of code <br>
      and my skills to a technology team, where I can continue creating customized products and grow. <br>
    </h2>
</div>
<h3> <u>TECHNICAL SKILLS: </u><br>
 Web Application Development: Java, HTML, CSS, JavaScript, Spring Boot, Vue.js <br>
Database Programming: JDBC, Table Design, SQL, PostgreSQL, E/R diagrams <br>
Development tools and techniques: Agile, Unit Testing (JUnit), Integration Testing, Git, IntelliJ <br> </h3>

<div>

</div>

  
</template>

<script>
export default {

}
</script>

<style>
.aboutMeName {
  font-family: DM Serif Text, sans-serif;
  font-size: 45px;
  margin-top: -600px;
}

.aboutMeTitle {
  font-family: Source Sans Pro, sans-serif;
  margin-top: -10px;
  font-size: 20px;
}

.imageContainer {
  display: flex;
  justify-content: center;
  margin-top: -35px;
  margin-bottom: 10px;
}

.headshotImage {
  border-radius: 50%;
  width: 200px;
  height: 300px;
  border: 5px solid hsl(34, 50%, 60%);
}
</style>