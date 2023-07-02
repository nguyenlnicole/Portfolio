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
        Hello, I'm Nicole Nguyen. My passion for coding blossomed <br>
        during my early encounters with Xanga, where I discovered <br>
        the joy of customizing backgrounds using HTML and CSS.<br> 
        This led me to further explore HTML and CSS through platforms <br>
        like MySpace. Initially, I didn't realize that coding could be <br>
        a viable career path. Instead,I embarked on a journey in <br>
        veterinary medicine and healthcare, honing my skills in <br>
        relationship building,problem-solving, and cross-team <br>
        collaboration. Known for my friendly and easy-going nature,  <br>
        I thrive in collaborative environments.<br>

      <br>
        Recently, I successfully completed a 14-week full stack <br>
        software development bootcamp,at Tech Elevator, equipping <br>
        me with a comprehensive skill set. I am currently undergoing <br>
        technical mentorship with Hanawilo, to accelerate and better<br>
        my software development skill sets in full stack technologies.<br>
         I'm eager to channel my love for coding and leverage my <br> 
        abilities within avtechnology team. I aspire to contribute <br>
        to the creation of customized products and foster continuous growth.<br>
        <br>

        If you're seeking a passionate and skilled addition to your <br>
        team, I'm excited to explore opportunities with you!<br>
      </p>
    </div>

    <div class="techSkills">
      <h3>TECHNICAL SKILLS</h3>
      <p>
        Web Application Development: Java, HTML, CSS, JavaScript, <br>
        Spring Boot, Vue.js <br>
        <br />
        Database Programming: JDBC, Table Design, SQL, PostgreSQL, E/R diagrams <br>
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
  margin-top: -150px;
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
  margin-right: 450px;
  text-align: left;
}
.aboutMeTitle {
font-size: .85vw;
text-align: left;
}

@media (max-width: 768px) {
  .aboutMeName {
    margin-right: 0;
    font-size: 30px;
  }

  .aboutMeTitle {
    margin-right: 0;
    font-size: 3vw;
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
    font-size: 2.5vw;
    text-align: left;
  }
}
</style>