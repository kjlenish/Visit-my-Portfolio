const nav = document.querySelector('.nav');

const navOffset = nav.offsetTop;

function handleScroll() {
    if (window.pageYOffset >= navOffset) {
        nav.classList.add('fixed-top');
    } else {
        nav.classList.remove('fixed-top');
    }
}
window.addEventListener('scroll', handleScroll);
