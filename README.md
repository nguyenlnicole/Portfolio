# Nicole Nguyen's Portfolio

A personal portfolio built with JavaScript, Vue 3, HTML, and CSS.

## Local development

Run `npm ci`, then `npm run serve`. Run `npm run build` to create the production site in `dist/`.

## GitHub Pages deployment

In the repository's **Settings > Pages**, set **Build and deployment > Source** to **GitHub Actions**.

The **Deploy portfolio to GitHub Pages** workflow installs the locked dependencies, builds the current source, and publishes the resulting `dist/` directory whenever a commit is pushed to `master`. It can also be started with **Run workflow** in the Actions tab. The deployment job links to the live site when publication succeeds.

The website is hosted at https://nguyenlnicole.github.io/Portfolio/.

The historical `dist` branch is no longer the publishing source once Pages is switched to GitHub Actions.
