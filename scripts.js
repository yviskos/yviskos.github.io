const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode === true) {
    document.getElementById('githublogo').src = 'github-mark-white.jpg';
}