console.log("Welcome to my portfolio!");

const toggle = document.getElementById('toggle-theme');

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark'){
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

});