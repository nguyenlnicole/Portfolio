<template>
  <main class="landing">
    <div class="corner corner-top" aria-hidden="true">
      <svg viewBox="0 0 160 390" fill="none">
        <path d="M72 0H160V183C103 158 48 126 54 57Z" fill="currentColor" />
        <path d="M148 7C67 107 165 133 133 236C113 297 110 328 151 380" class="contour" />
      </svg>
    </div>
    <div class="corner corner-bottom" aria-hidden="true">
      <svg viewBox="0 0 390 290" fill="none">
        <path d="M0 0C103 9 66 154 184 165C263 168 330 179 390 290H0Z" fill="currentColor" />
        <path d="M0 73C77 76 68 162 158 192C211 209 256 233 283 290" class="contour" />
      </svg>
    </div>

    <div class="creative-note" aria-label="Create, develop, learn, grow">
      <span>Create</span><span aria-hidden="true">/</span>
      <span>Develop</span><span aria-hidden="true">/</span>
      <span>Learn</span><span aria-hidden="true">/</span>
      <span>Grow</span><i aria-hidden="true"></i>
    </div>

    <section class="hero" aria-labelledby="home-name">
      <p class="eyebrow">Hi there, I’m <span aria-hidden="true"></span></p>
      <h1 id="home-name">Nicole Nguyen</h1>
      <p class="role">Software Engineer</p>
      <p class="introduction">I build polished, responsive web experiences<br class="desktop-break"> with a strong eye for UI.</p>
      <div class="hero-actions">
        <router-link :to="{ name: 'projectsPage' }" class="hero-button primary">
          <span>View Projects</span>
          <svg viewBox="0 0 28 24" aria-hidden="true"><path d="M2 12h23M17 4l8 8-8 8" /></svg>
        </router-link>
        <router-link :to="{ name: 'contactInfo' }" class="hero-button secondary">
          <span>Get In Touch</span>
          <svg viewBox="0 0 36 28" aria-hidden="true"><rect x="2" y="2" width="32" height="24" rx="3" /><path d="m3 4 15 12L33 4" /></svg>
        </router-link>
      </div>
    </section>

    <footer class="landing-footer">
      <p class="footer-note">Turn ideas<br>into something beautiful <span aria-hidden="true"></span></p>
      <div class="code-signature" aria-hidden="true">
        <svg viewBox="0 0 64 46"><path d="m15 11-12 11 12 10M49 11l12 11-12 10M39 2 25 44" /></svg>
        <span></span>
      </div>
    </footer>
  </main>
</template>
