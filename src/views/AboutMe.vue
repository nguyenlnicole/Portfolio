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
        Hello, I'm Nicole Nguyen. My passion for coding blossomed during my early encounters with Xanga, where <br>
        I discovered the joy of customizing backgrounds using HTML and CSS. This led me to further explore HTML <br>
        and CSS through platforms like MySpace. Initially, I didn't realize that coding could be a viable career <br>
        path. Instead, I embarked on a journey in veterinary medicine and healthcare, honing my skills in<br>
        relationship building, problem-solving, and cross-team collaboration. Known for my friendly and easy-going <br>
        nature, I thrive in collaborative environments.<br>

      <br>
        Recently, I successfully completed a 14-week full stack software development boot camp, equipping me with a <br>
        comprehensive skill set. Now, I'm eager to channel my love for coding and leverage my abilities within a <br>
        technology team. I aspire to contribute to the creation of customized products and foster continuous growth.<br>
        <br>

        If you're seeking a passionate and skilled addition to your team, I'm excited to explore opportunities with you."<br>
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
   margin-top:60px;
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