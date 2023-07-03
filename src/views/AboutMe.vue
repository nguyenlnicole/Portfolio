<template>
  <div class="container">
    <div class="aboutMe">
      <h1 class="aboutMeName">About Me</h1>
    </div>

    <div class="imageContainer">
      <img :src="require('@/views/nicolesHeadshot.png')" alt="Nicole's Headshot" class="headshotImage" />
    </div>



    <div class="aboutMeTitle">
      <p>
        Hello, I'm Nicole Nguyen. My passion for coding blossomed during my early encounters <br>
        with Xanga, where I discovered the joy of customizing backgrounds using HTML and CSS. <br>
        This led me to further explore HTML and CSS through platforms like MySpace. Initially,<br>
        I didn't realize that coding could be a viable career path. Instead, I embarked on a <br>
        journey in veterinary medicine and healthcare, honing my skills in relationship building,<br> 
        problem-solving, and cross-team collaboration. Known for my friendly and easy-going <br>
        nature, I thrive in collaborative environments.<br>

      <br>
        Recently, I successfully completed a 14-week full stack software development bootcamp,<br> 
        at Tech Elevator, equipping me with a comprehensive skill set. I am currently undergoing <br>
        technical mentorship with Hanawilo, to accelerate and better my software development skill  <br> 
        sets in full stack technologies. I'm eager to channel my love for coding and leverage my <br> 
        abilities within avtechnology team. I aspire to contribute to the creation of customized <br> 
        products and foster continuous growth.<br>
        <br>

        If you're seeking a passionate and skilled addition to your team, I'm excited to explore <br>
        opportunities with you!<br>
      </p>
    </div>

    <div class="techSkills">
      <h3>TECHNICAL SKILLS</h3>
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
  margin-top:20px;
}

.aboutMe {
  margin-top: -60px;
}

.aboutMeName {
  font-family: DM Serif Text, sans-serif;
  font-size: 35px;
  margin-right: 500px;
}

.aboutMeTitle {
  margin-top: -5px;
  margin-right: 500px;
}

.imageContainer {
  margin-top: -5px;
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
  margin-top: 0px;
  font-size: 16px;
  margin-right: 500px;
  text-align: left;
}
.aboutMeTitle {
font-size: .95vw;
text-align: left;
}

@media (max-width: 768px) {
  .aboutMeName {
    margin-right: 0;
    font-size: 30px;
  }

  .aboutMeTitle {
    margin-right: 0;
    font-size: 2vw;
    text-align: left;
  }

  .headshotImage {
    margin-right: 0;
    width: 140px; 
    height: 190px; 
    border-width: 3px;
  }

  .techSkills {
    margin-right: 0;
    font-size: 1.5vw;
    text-align: left;
  }
}
</style>