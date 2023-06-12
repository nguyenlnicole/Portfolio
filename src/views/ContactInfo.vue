<template>
  <body>
    <h1 class = "contactTitle"> Contact Information</h1><br>
    <div class ="emailInfo">
      Email: nguyenlnicole@gmail.com <br>
      </div>

      <div class= "router-links-linkedin">
       <a href="https://www.linkedin.com/in/nicole-nguyen94/" target="_blank">LinkedIn</a><br>
      </div>

      <div class= "router-links-github">
        <a href="https://github.com/nguyenlnicole" target="_blank">GitHub</a><br>
        </div>

        <div class= "resume-router-link">
        <a href="https://docs.google.com/document/d/e/2PACX-1vRtaxkE812en_C8enMzvp9-go61WnOJ6NiQzhXeVUIgYK-6Gwp_37sc8tyECjuGQDlTELtdFD3FoUs0/pub" target="_blank">Resume</a><br>
      </div>
      <br>
      <br>
      <br>
      <br>
    
      </body>
</template>

<script>
export default {

}
</script>

<style>
.contactTitle {  
 font-size: 45px;
 margin-right: 500px;
 font-size: 45px;
 margin-top:100px;
}
.emailInfo { 
margin-right: 500px;  
font-size: 25px;
margin-bottom: 50px; 
}
.router-links-linkedin {
 margin-right: 500px; 
 font-size: 25px;
 margin-bottom: 50px; 
}

  .router-links-github {
  margin-right: 500px;
  font-size: 25px;
  margin-bottom: 50px; 
}

.resume-router-link {
 margin-right: 500px; 
 font-size: 25px;
 margin-bottom: 50px; 
} 
.router-links-linkedin a:link,
.router-links-linkedin a:visited {
  color: #5e391bef;
}

.router-links-linkedin a:hover,
.router-links-linkedin a:active {
  color: #A67B5B;
}

.router-links-github a:link,
.router-links-github a:visited {
  color: #5e391bef;
}

.router-links-github a:hover,
.router-links-github a:active {
  color: #A67B5B;
}

.resume-router-link a:link,
.resume-router-link a:visited {
  color: #5e391bef;
}

.resume-router-link a:hover,
.resume-router-link a:active {
  color: #A67B5B;
}
.emailInfo {
  color: #5e391bef;
}


@media (max-width: 768px) {
  .container {
    justify-content: flex-end;
    text-align: right;
    padding-right: 30px; 
  }

  .contactTitle {
    font-size: 20px;
    margin-right: 45px;
    text-align: right;
    margin-top: -190px;
  }

  .emailInfo,
  .router-links-linkedin,
  .router-links-github,
  .resume-router-link {
    margin-right: 30px;
    font-size: 14px;
    text-align: center;
  }

}
</style>