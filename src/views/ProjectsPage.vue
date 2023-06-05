<template>
  <div>
    <h1 class="projectTitle">Projects</h1>

    <div class="scrollableSection">

<div class="scrollBox">
    <div class="chatRHN">
      <a href="https://github.com/raulharo/ChatRHN" target="_blank">ChatRHN (In progress)</a><br>
      Paired-programming application. Application that is the sassy version of ChatGpt where users <br>
      can ask questions, only to receive sassy responses without any real answers. Our project<br>
      showcases the power of Java, postgreSQL, SQL, APIs, HTML, CSS, and JavaScript. <br>
      Get ready to be entertained by this compact sass extravaganza!<br>
    </div>

    <div class="PetShelterWebpage">
     <h3>Pet Shelter WebPage (In prgorss, will be completed and available 6/8/2023)</h3><br>
      Our collaborative web development project resulted in a comprehensive webpage that connects <br>
      potential pet adopters with available pets, facilitates volunteer sign-ups, displays detailed <br>
      pet listings and shelter information. Additionally, the website includes robust admin features,<br>
       allowing administrators to effortlessly add new pets, approve volunteers, update pet statuses,<br> 
       all made possible through the implementation of Java, HTML, CSS, JavaScript, JDBC, SQL, <br>
       PostgreSQL, Vue.js, and API integration.<br>

    </div>

    <div class="portfolio">
      <a href="https://github.com/nguyenlnicole/PortfolioWebPage" target="_blank">Portfolio</a><br>
      Self-built portfolio. This showcase, created from scratch, displays information about me, <br>
      my projects, and how to contact me. Powered by Javascript, Vue.js, HTML, and CSS, it <br>
      embodies my unique blend of creativity and technical skills. Experience the captivating <br>
      design and seamless functionality of my portfolio.<br>
    </div>

    <div class="flashCards">
      <a href="https://github.com/nguyenlnicole/FlashCards" target="_blank">Flash Cards</a><br>
      Java-based quiz application designed to help students study Java vocabulary and code snippets. <br>
      Using scanners, conditionals, and random message printing, this application offers an interactive <br>
      learning experience. Get ready to level up your Java skills with my immersive quiz application!<br>
    </div>

    <div class="eightball">
      <a href="https://github.com/nguyenlnicole/magic8Ball/tree/main/magic8ball" target="_blank">8 Ball</a><br>
      Java application that allows you to practice boolean expressions, pseudo code, and random number <br>
      generation, with the ability to print information directly to the user.<br>
    </div>
    </div>
  </div>
  </div>
</template>

<style>
.projectTitle {
  margin-right: 300px;
  font-size: 45px;
  font-weight: bold;
  margin-top:100px;
}

.scrollableSection {
  margin-right: 300px;
  font-weight: bold;
  overflow-y: auto;
  max-height: 560px;
  margin-left: 10px;
  margin-bottom: 60px;
  
}

.scrollBox {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  
}


.chatRHN,
.PetShelterWebpage,
.portfolio,
.flashCards,
.eightball {
  margin-right: 10px;
  font-weight: bold;
}

.PetShelterWebpage h3 {
  margin-top:10px;
  margin-bottom: -20px;
  color: rgb(139, 3, 133);
}
</style>