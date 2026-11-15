(() => {
  const body = document.body;
  const themeButton = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const savedTheme = localStorage.getItem('homepage-theme');

  if (savedTheme === 'dark') body.classList.add('dark');
  updateThemeControl();

  themeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('homepage-theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeControl();
  });

  function updateThemeControl() {
    const isDark = body.classList.contains('dark');
    themeIcon.textContent = isDark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#101522' : '#f5f7fb';
  }

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
})();
