
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
