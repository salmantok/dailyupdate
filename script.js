const themeButton = document.getElementById('themeButton');
const welcomeButton = document.getElementById('welcomeButton');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeButton.textContent = '☀️';
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');

    if (isDark) {
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeButton.textContent = '🌙';
    }
});

welcomeButton.addEventListener('click', () => {
    alert('Selamat datang di Daily Update App.');
});
