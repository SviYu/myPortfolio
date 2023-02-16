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

/* Modal CV */
const modal = document.getElementById('myModal');
const imgView = document.querySelector('.view');
const modalImg = document.getElementById('img01');
const close = document.getElementsByClassName('close')[0];

imgView.onclick = function () {
    modal.style.display = 'block';
}
close.onclick = function () {
    modal.style.display = 'none';
}

/* Current Year */
const yearSpan = document.getElementById('year');
yearSpan.innerHTML = new Date().getFullYear();
