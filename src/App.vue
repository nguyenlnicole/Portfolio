<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <router-link :to="{ name: 'homePage' }" class="brand-link" aria-label="Nicole Nguyen home">
      <img :src="require('./flowerLogoNew.png')" alt="" class="flower-logo">
    </router-link>

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

    <nav class="side-nav" aria-label="Main navigation">
      <router-link :to="{ name: 'homePage' }" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'aboutMe' }" class="nav-link">About</router-link>
      <router-link :to="{ name: 'experiencesPage' }" class="nav-link">Experiences</router-link>
      <router-link :to="{ name: 'contactInfo' }" class="nav-link">Contact</router-link>
    </nav>

    <main id="main-content" class="page-content" tabindex="-1">
      <router-view />
    </main>

    <footer class="site-footer">
      <p class="footer-note">Turn ideas<br>into something beautiful <span aria-hidden="true"></span></p>
      <div class="code-signature" aria-hidden="true">
        <svg viewBox="0 0 64 46"><path d="m15 11-12 11 12 10M49 11l12 11-12 10M39 2 25 44" /></svg>
        <span></span>
      </div>
    </footer>
  </div>
</template>
