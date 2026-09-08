<template>
  <section class="experiences-page" aria-labelledby="experiences-title">
    <header class="experience-heading">
      <h1 id="experiences-title" class="script-heading heading-with-line">Experiences <span aria-hidden="true"></span></h1>
      <p class="eyebrow">My journey so far</p>
    </header>

    <section aria-labelledby="work-title">
      <h2 id="work-title" class="section-heading heading-with-line">Where I’ve Worked <span aria-hidden="true"></span></h2>
      <div class="work-grid">
        <article class="experience-card">
          <h3>Accenture</h3>
          <p class="card-kicker">Software Engineer <span aria-hidden="true">/</span> August 2023 to July 2026</p>
          <p>During my three years at Accenture, I worked on enterprise applications across both backend and frontend development. I helped modernize a mission critical loan application by developing and maintaining REST APIs with Java and Spring Boot, troubleshooting production issues, and supporting application upgrades. I also worked with Angular and TypeScript on frontend components, participated in technical discovery for legacy systems, and collaborated across engineering teams to turn technical findings into actionable development work.</p>
          <ul class="tags"><li>Java</li><li>Spring Boot</li><li>REST APIs</li><li>Angular</li><li>TypeScript</li></ul>
        </article>
        <article class="experience-card">
          <h3>AfterQuery</h3>
          <p class="card-kicker">Software Engineer</p>
          <p>I work on project based software engineering assignments involving existing applications and codebases. Across Projects Gold and Sand, I analyze technical requirements, implement requested changes, debug functional issues, and test application behavior to make sure solutions meet project specifications. My work includes reading unfamiliar source code, troubleshooting defects, working with Git based workflows, and validating changes before delivery.</p>
          <ul class="tags"><li>Code Analysis</li><li>Debugging</li><li>Testing</li><li>Git</li><li>Software Maintenance</li></ul>
        </article>
      </div>
    </section>

    <section class="built-section" aria-labelledby="built-title">
      <h2 id="built-title" class="section-heading heading-with-line">What I’ve Built <span aria-hidden="true"></span></h2>
      <div class="project-grid">
        <article v-for="project in featuredProjects" :key="project.name" class="experience-card project-card">
          <h3>{{ project.name }}</h3>
          <p v-if="project.subtitle" class="card-kicker">{{ project.subtitle }}</p>
          <p>{{ project.description }}</p>
          <div v-if="project.links.length" class="project-links">
            <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" :aria-label="`${project.name}: ${link.label} (opens in a new tab)`">{{ link.label }} <span aria-hidden="true">→</span></a>
          </div>
          <ul class="tags"><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul>
        </article>
      </div>
    </section>

    <p class="experience-signoff">Good Code,<br>Brighter Days <span aria-hidden="true">♡</span></p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      featuredProjects: [
        {
          name: 'Pet Shelter Web Page', subtitle: 'My first full stack application',
          description: 'This project was where everything started coming together for me. I worked with a team to build a pet adoption platform with pet listings, volunteer sign ups, and admin tools for managing pets and approvals.',
          links: [
            { label: 'Live Site', url: 'https://nguyenlnicole.github.io/PetShelterPage/' },
            { label: 'View Java', url: 'https://github.com/nguyenlnicole/PetShelterWebpage' },
            { label: 'View Vue', url: 'https://github.com/nguyenlnicole/PetShelterPage' }
          ],
          tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JDBC', 'Vue.js']
        },
        {
          name: 'EverPure',
          description: 'A full stack healthcare web app connecting patients with aesthetic treatment providers, including procedure browsing and consultation booking.',
          links: [
            { label: 'Live Site', url: 'https://everpure.uspwin.com/' },
            { label: 'View Code', url: 'https://github.com/nguyenlnicole/peakAlphaTesto' }
          ],
          tags: ['Java', 'Spring Boot', 'React', 'REST APIs']
        },
        {
          name: 'PNB Paws',
          description: 'A custom ecommerce and product website built for PNB Paws, focused on clear branding, product presentation, and a polished user experience.',
          links: [],
          tags: ['UI Development', 'Responsive Design', 'Branding', 'Front End']
        }
      ]
    };
  }
};
</script>
