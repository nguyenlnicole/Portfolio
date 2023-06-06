<template>
  <div>
    <h1 class="projectTitle">Projects</h1>

    <div class="scrollableSection">

<div class="scrollBox">
    <div class="chatRHN">
      <a href="https://github.com/raulharo/ChatRHN" target="_blank">ChatRHN (In progress)</a><br>
      Paired-programming webpage application. This application is the sassy version of ChatGPT <br>
      Where users can ask questions, only to receive sassy responses without any real answers. <br>
      The interface is styled to look similar to ChatGPT. We also made it to react like ChatGPT <br>
      by remmebering conversations. Our project showcases the power of Java, postgreSQL, SQL, <br>
      API integration, HTML, CSS, React, and JavaScript. <br>
      
    </div>

    <div class="PetShelterWebpage">
     <h3>Pet Shelter WebPage (In progress, will be completed and available 6/8/2023.)</h3> <br>
      Our collaborative web development project resulted in a comprehensive webpage that connects <br>
      potential pet adopters with available pets, facilitates volunteer sign-ups, displays detailed <br>
      pet listings and shelter information. Additionally, the website includes robust admin features,<br>
       allowing administrators to effortlessly add new pets, approve volunteers, update pet statuses,<br> 
       all made possible through the implementation of Java, HTML, CSS, JavaScript, JDBC, SQL, <br>
       PostgreSQL, Vue.js, and API integration. <br>

    </div>

    <div class="portfolio">
      <a href="https://github.com/nguyenlnicole/PortfolioWebPage" target="_blank">Portfolio</a><br>
      Self-built portfolio. This showcase, created from scratch, displays information about me, <br>
      my projects, and how to contact me. Powered by Javascript, Vue.js, HTML, and CSS, it <br>
      embodies my unique blend of creativity and technical skills. <br>
    </div>

    <div class="vendingMachine">
      <h3> Vending Machine (Completed but have not been added to GitHub.)</h3><br>
      Java application facilitates paired programming, enabling users to select one or more <br>
      products for cost aggregation. By prompting the user to input their available funds as <br>
      a numerical value, the application determines the change to be returned. It incorporates <br>
      functions and classes to exercise boolean logic, variable manipulation, value handling, <br>
      and object-oriented programming principles. Additionally, the application incorporates <br>
      File I/O operations, enhancing the overall learning experience. <br>
    </div>

    <div class="flashCards">
      <a href="https://github.com/nguyenlnicole/FlashCards" target="_blank">Flash Cards</a><br>
      Java-based quiz application designed to help students study Java vocabulary and code snippets. <br>
      Ths application utilizes scanners, conditionals, and random message printing, this application <br>
      offers an interactive learning experience. <br>
    </div>

    <div class="eightball">
      <a href="https://github.com/nguyenlnicole/magic8Ball/tree/main/magic8ball" target="_blank">8 Ball</a><br>
      This Java application is a powerful tool for practicing boolean expressions, pseudo code, and random <br>
      number generation. With its user-friendly interface and direct communication capabilities, users <br>
      can refine their coding skills and receive real-time feedback. It offers a comprehensive library <br>
      of resources for learning and experimenting with these concepts.<br>
    </div>
    </div>
  </div>
  </div>
</template>

<style>
.projectTitle {
  margin-right: 200px;
  font-size: 45px;
  font-weight: bold;
  margin-top:100px;
}

.scrollableSection {
  margin-right: 200px;
  font-weight: bold;
  overflow-y: auto;
  max-height: 500px;
  margin-left: 10px;
  margin-bottom: 60px;
  
}

.scrollBox {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  
}


.vendingMachine, 
.chatRHN,
.PetShelterWebpage,
.portfolio,
.flashCards,
.eightball {
  margin-right: 10px;
  font-weight: bold;
}

.vendingMachine h3,
.PetShelterWebpage h3 {
  margin-top:10px;
  margin-bottom: -20px;
  color: rgb(139, 3, 133);
  text-decoration: underline;
}


@media (max-width: 768px) {
  .container {
    justify-content: flex-end;
    text-align: right;
    padding-right: 30px; 
  }

  .projectTitle {
    margin-right: 80px;
    text-align: right;
  }

  .scrollableSection {
    margin-right: -10px;
    font-size: 12px; 
  }

  .scrollBox {
    margin-right: 20px;
    width: 200px;
  }

  .nav-link {
    margin-right: 0; 
    text-align: right;
  }

  .PetShelterWebpage h3 {
    text-align: right;
  }
}
</style>