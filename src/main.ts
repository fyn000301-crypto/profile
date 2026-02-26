import './style.css'
import { setupThemeToggle } from './theme.ts'
import { setupProjects } from './projects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <nav>
      <span class="logo-text">Profile</span>
      <button id="theme-toggle" type="button" aria-label="Toggle theme">🌙</button>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="avatar">👤</div>
      <h1>fyn000301</h1>
      <p class="tagline">Full-Stack Developer &amp; Open Source Enthusiast</p>
      <div class="social-links">
        <a href="https://github.com/fyn000301-crypto" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>

    <section class="about">
      <h2>About</h2>
      <p>
        Passionate developer who loves building elegant solutions to complex problems.
        Experienced in TypeScript, modern web frameworks, and cloud-native technologies.
      </p>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <div class="skill-grid">
        <span class="skill-tag">TypeScript</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">HTML/CSS</span>
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Vite</span>
        <span class="skill-tag">Git</span>
      </div>
    </section>

    <section class="projects">
      <h2>Projects</h2>
      <div id="project-grid" class="project-grid"></div>
    </section>
  </main>

  <footer>
    <p>&copy; ${new Date().getFullYear()} fyn000301. Built with Vite + TypeScript.</p>
  </footer>
`

setupThemeToggle(document.querySelector<HTMLButtonElement>('#theme-toggle')!)
setupProjects(document.querySelector<HTMLDivElement>('#project-grid')!)
