<template>
  <section class="about-page" aria-labelledby="about-title">
    <div class="about-intro">
      <div class="portrait-frame">
        <img :src="require('./nicolesHeadshot.png')" alt="Nicole Nguyen smiling in a pink blouse" class="portrait" width="534" height="667">
      </div>
      <div class="about-copy">
        <h1 id="about-title" class="script-heading heading-with-line">A Little About Me <span aria-hidden="true"></span></h1>
        <p>I’ve been coding since before I even knew what software development was. Back in the Xanga and MySpace days, I was customizing layouts, changing backgrounds, and working with HTML and CSS because I really enjoyed creating custom designs and figuring out how things worked.</p>
        <p>My path into tech was not exactly a straight line. I originally went into the medical field, realized it was not the right fit for me, and eventually found my way back to development. I no longer just work with HTML and CSS. I’ve progressed into building full stack applications using Java, Spring Boot, REST APIs, SQL, Angular, TypeScript, and JavaScript.</p>
        <p>But I didn’t stop there. As new languages, tools, and technologies became more popular, I adapted and kept learning. My skill set has expanded to include Python, data science, machine learning, deep learning, natural language processing, generative AI, prompt engineering, large language models, agentic AI, and Microsoft Azure AI.</p>
        <p>Although I enjoy working across the stack, I always find myself coming back to my roots. UI is where I really shine. I love turning ideas and mockups into polished, responsive, and intuitive experiences, while paying attention to the small details that make a design feel complete.</p>
      </div>
    </div>

    <section class="skills-section" aria-labelledby="skills-title">
      <h2 id="skills-title" class="script-heading heading-with-line">Technical Skills <span aria-hidden="true"></span></h2>
      <dl class="skills-list">
        <div v-for="group in skillGroups" :key="group.name" class="skill-row">
          <dt>{{ group.name }}</dt>
          <dd><ul class="tags"><li v-for="skill in group.skills" :key="skill">{{ skill }}</li></ul></dd>
        </div>
      </dl>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skillGroups: [
        { name: 'Front End', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Responsive Design', 'UI Development'] },
        { name: 'Back End', skills: ['Java', 'Spring Boot', 'REST APIs', 'JDBC'] },
        { name: 'Databases', skills: ['SQL', 'PostgreSQL', 'Relational Database Design'] },
        { name: 'AI & Machine Learning', skills: ['Python', 'Data Science', 'Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'Prompt Engineering', 'Large Language Models', 'Agentic AI', 'Microsoft Azure AI'] },
        { name: 'Development & Tools', skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'Agile', 'JUnit', 'Unit Testing', 'Integration Testing', 'CI/CD', 'Debugging', 'Production Support'] },
        { name: 'Strengths', skills: ['UI Implementation', 'Full Stack Development', 'API Development', 'Technical Troubleshooting', 'Cross Functional Collaboration'] }
      ]
    };
  }
};
</script>
