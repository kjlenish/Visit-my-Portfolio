const nav = document.querySelector('.nav');

const navOffset = nav.offsetTop;

function handleScroll() {
    if (window.pageYOffset >= navOffset) {
        nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }
}
window.addEventListener('scroll', handleScroll);
