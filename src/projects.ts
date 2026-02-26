interface Project {
  name: string
  description: string
  url: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Profile',
    description: 'Personal profile page built with Vite and TypeScript.',
    url: 'https://github.com/fyn000301-crypto/profile',
    tags: ['TypeScript', 'Vite'],
  },
]

export function setupProjects(container: HTMLDivElement): void {
  container.innerHTML = projects
    .map(
      (project) => `
    <a href="${project.url}" target="_blank" rel="noopener" class="project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
    </a>
  `,
    )
    .join('')
}
