const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("services");

    window.addEventListener("scroll", function() {
        const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - section.offsetHeight * 0.5) - 1;

        sections.forEach((section, index) => {
            section.classList.toggle("active", index === current);
        });
    });
});