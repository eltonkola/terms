const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    let theme = 'light-theme';
    if (body.classList.contains('dark-theme')) {
        theme = 'dark-theme';
    }
    localStorage.setItem('theme', theme);
});
