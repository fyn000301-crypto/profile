export function setupThemeToggle(button: HTMLButtonElement): void {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  let isDark = localStorage.getItem('theme')
    ? localStorage.getItem('theme') === 'dark'
    : prefersDark

  function applyTheme(): void {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    button.textContent = isDark ? '☀️' : '🌙'
  }

  button.addEventListener('click', () => {
    isDark = !isDark
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    applyTheme()
  })

  applyTheme()
}
