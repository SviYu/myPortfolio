/* Preloader */
const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
})

/* Progress animation */
window.onscroll = function() { myFunction() };

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%'
}

/* Current Year */
const yearSpan = document.getElementById('year');
yearSpan.innerHTML = new Date().getFullYear();