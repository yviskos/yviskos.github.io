const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode === true) {
    document.getElementById('myImage').src = 'github-mark-black.jpg';
}