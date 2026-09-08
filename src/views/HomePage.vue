<template>
  <section class="home-page" aria-labelledby="home-name">
    <p class="eyebrow">Hi there, I’m <span aria-hidden="true"></span></p>
    <h1 id="home-name" class="hero-title">Nicole Nguyen</h1>
    <p class="role">Software Engineer</p>
    <p class="introduction">I build polished, responsive web experiences<br class="desktop-break"> with a strong eye for UI.</p>
    <div class="hero-actions">
      <router-link :to="{ name: 'experiencesPage' }" class="hero-button primary">
        <span>View Experiences</span>
        <svg viewBox="0 0 28 24" aria-hidden="true"><path d="M2 12h23M17 4l8 8-8 8" /></svg>
      </router-link>
      <router-link :to="{ name: 'contactInfo' }" class="hero-button secondary">
        <span>Get In Touch</span>
        <svg viewBox="0 0 36 28" aria-hidden="true"><rect x="2" y="2" width="32" height="24" rx="3" /><path d="m3 4 15 12L33 4" /></svg>
      </router-link>
    </div>
  </section>
</template>
