const body = document.body;

const themeButton = document.getElementById('themeButton');

const menuButton = document.getElementById('menuButton');

const navMenu = document.getElementById('navMenu');

const loader = document.getElementById('loader');

const toast = document.getElementById('toast');

const searchInput = document.getElementById('searchInput');

const cards = document.querySelectorAll('.update-card');

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = 'none';

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }, 1000);
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark');

    themeButton.textContent = '☀️';
}

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');

    if (isDark) {
        localStorage.setItem('theme', 'dark');

        themeButton.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');

        themeButton.textContent = '🌙';
    }
});

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();

    cards.forEach((card) => {
        const text = card.textContent.toLowerCase();

        card.style.display = text.includes(keyword) ? 'block' : 'none';
    });
});

function revealOnScroll() {
    reveals.forEach((item) => {
        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
