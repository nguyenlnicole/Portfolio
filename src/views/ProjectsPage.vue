<template>
  <div>
    <h1 class="projectTitle">Projects</h1>

    <div class="scrollableSection">

<div class="scrollBox">
    <div class="chatRHN">
      <div class="chatRHN">
      <a href="https://github.com/nguyenlnicole/peakAlphaTesto" target="_blank">EverPure</a><br>
      <a href="https://everpure.uspwin.com/" target="_blank">EverPure Webpage</a><br>
      Paired-programmed web application developed in Visual Studio designed to connect<br>
      patients seeking aesthetic and beauty treatments with qualified providers. The platform <br>
      allows users to explore various procedures offered, enhancing patient engagement and streamlining the <br>
      consultation process. Built using a full-stack tech stack, it leverages JavaScript, React.js, JSX, HTML, and <br>
      CSS on the frontend, with Java and Spring Boot powering the backend and Node.js providing server-side  <br>
      support. REST APIs were used to enable seamless communication between the frontend and backend, <br>
      ensuring smooth data flow and user interaction. The application emphasizes a clean, responsive interface <br>
      and intuitive provider-patient engagement. <br>
      
    </div>


      <a href="https://github.com/raulharo/ChatRHN" target="_blank">ChatRHN</a><br>
      <a href="https://chatrhn.uspwin.com/" target="_blank">ChatRHN Webpage</a><br>
      Paired-programming webpage application. This application is the sassy version of ChatGPT <br>
      where users can ask questions, only to receive sassy responses with or without a real answers. <br>
      The interface is styled to look similar to ChatGPT. We also made the introduction to react like ChatGPT <br>
      by remembering conversations until you end the conversation. Our project showcases the power of <br>
      Java, Spring Boot, JSON, API integration, ReactJs, JSX, CSS, and JavaScript. <br>
      
    </div>

    <div class="PetShelterWebpage">
     <a href="https://nguyenlnicole.github.io/PetShelterPage/" target="_blank">Pet Shelter WebPage</a> ||
     <a href="https://github.com/nguyenlnicole/PetShelterPage" target="_blank">Pet Shelter Vue </a> ||
     <a href="https://github.com/nguyenlnicole/PetShelterWebpage" target="_blank">Pet Shelter Java </a> <br>
      Our collaborative web development project resulted in a comprehensive webpage that connects <br>
      potential pet adopters with available pets, facilitates volunteer sign-ups, displays detailed <br>
      pet listings and shelter information. Additionally, the website includes robust admin features,<br>
       allowing administrators to effortlessly add new pets, approve volunteers, update pet statuses,<br> 
       all made possible through the implementation of Java, HTML, CSS, JavaScript, JDBC, SQL, <br>
       PostgreSQL, Vue.js, Spring Boot, and API integration. <br>

    </div>

    <div class="portfolio">
      <a href="https://github.com/nguyenlnicole/PortfolioWebPage" target="_blank">Portfolio</a><br>
      Developed a self-built portfolio that serves as a showcase for presenting information about myself, <br>
      all my projects, and how to get in touch with me. This portfolio is created from scratch, utilizing the <br>
      power of Javascript, Vue.js, HTML, and CSS, to bring together my creative and technical skills. <br>
      It embodies my unique blend of creativity and technical expertise, providing visitors with an immersive<br>
      experience while offering a glimpse into my work and capabilities.<br>
    </div>

    <div class="vendingMachine">
       <a href="https://github.com/nguyenlnicole/VedningMachine/tree/main/vending-machine" target="_blank"> Vending Machine</a><br>
      Java application facilitates paired programming, enabling users to select one or more <br>
      products for cost aggregation. By prompting the user to input their available funds as <br>
      a numerical value, the application determines the change to be returned. It incorporates <br>
      functions and classes to exercise boolean logic, variable manipulation, value handling, <br>
      and object-oriented programming principles. Additionally, the application incorporates <br>
      File I/O operations, enhancing the overall learning experience. <br>
    </div>

    <div class="flashCards">
      <a href="https://github.com/nguyenlnicole/FlashCards" target="_blank">Flash Cards</a><br>
      Java-based quiz application is designed to help students study Java vocabulary and code snippets. <br>
      It incorporates scanners, conditionals, and random message printing to create an interactive learning <br>
      experience. Students can engage with the application to test their knowledge, reinforce concepts, and <br>
      enhance their understanding of Java programming in an enjoyable manner.<br>
    </div>

    <div class="eightball">
      <a href="https://github.com/nguyenlnicole/magic8Ball/tree/main/magic8ball" target="_blank">Magic 8 Ball</a><br>
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
  margin-bottom: 20px;
  text-align: left;
  font-size: 1.vw;
  
}

.PetShelterWebpage a:link,
.PetShelterWebpage a:visited {
  color: #5e391bef;
}

.PetShelterWebpage a:hover,
.PetShelterWebpage a:active {
  color: #A67B5B;
}
.portfolio a:link,
.portfolio a:visited {
  color: #5e391bef;
}

.portfolio a:hover,
.portfolio a:active {
  color: #A67B5B;
}

.eightball a:link,
.eightball a:visited {
  color: #5e391bef;
}

.eightball a:hover,
.eightball a:active {
  color: #A67B5B;
}
.flashCards a:link,
.flashCards a:visited {
  color: #5e391bef;
}

.flashCards a:hover,
.flashCards a:active {
  color: #A67B5B;
}

.vendingMachine a:link,
.vendingMachine a:visited {
  color: #5e391bef;
}

.vendingMachine a:hover,
.vendingMachine a:active {
  color: #A67B5B;
}

.chatRHN a:link,
.chatRHN a:visited {
  color: #5e391bef;
}

.chatRHN a:hover,
.chatRHN a:active {
  color: #A67B5B;
}




@media (max-width: 768px) {
  .container {
    justify-content: flex-end;
    text-align: right;
    padding-right: 30px; 
  }

  .projectTitle {
    margin-right: 140px;
    text-align: right;
    margin-top: -10px; 
  }

  .scrollableSection {
    margin-right: 80px;
    font-size: 12px; 
  }

  .scrollBox {
    margin-right: 20px;
    width: 280px;
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