<template>
  <div class="container">
    <div class="aboutMe">
      <h1 class="aboutMeName">About Me.</h1>
    </div>

    <div class="imageContainer">
      <img :src="require('@/views/nicolesHeadshot.png')" alt="Nicole's Headshot" class="headshotImage" />
    </div>

    <div class="aboutMeTitle">
      <h2>
        My name is Nicole Nguyen. My love for coding started when I was introduced to Xanga, which allowed me to customize <br>
        my background using HTML and CSS. I was then able to continue gaining more experience in HTML and CSS through <br>
        MySpace. I didn't realize that coding was a career choice; instead, I ventured into veterinarian medicine and <br>
        healthcare. I developed skills in relationship building, creating solutions, and working across teams. I am very <br>
        friendly, easy to work with, and easy going. I just completed a 14-week full stack software development boot camp. <br>
        I’m ready to bring my love of code and my skills to a technology team, where I can continue creating customized
        products and grow. <br>
      </h2>
    </div>

    <div class="techSkills">
      <h3><u>TECHNICAL SKILLS:</u></h3>
      <p>
        Web Application Development: Java, HTML, CSS, JavaScript, Spring Boot, Vue.js
        <br />
        Database Programming: JDBC, Table Design, SQL, PostgreSQL, E/R diagrams
        <br />
        Development tools and techniques: Agile, Unit Testing (JUnit), Integration Testing, Git, IntelliJ
      </p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.aboutMe {
  margin-top: 10px;
}

.aboutMeName {
  font-family: DM Serif Text, sans-serif;
  font-size: 45px;
  margin-right: 500px;
}

.aboutMeTitle {
  font-size: 20px;
  margin-top: 10px;
  font-size: 12px;
  margin-right: 500px;
}

.imageContainer {
  margin-top: 20px;
}

.headshotImage {
  border-radius: 50%;
  width: 200px;
  height: 280px;
  border: 5px solid hsl(34, 50%, 60%);
  display: block;
  margin: 0 auto;
  margin-right: 500px;
}

.techSkills {
  margin-top: 10px;
  font-size: 20px;
  margin-right: 500px;
}
</style>