const button = document.getElementsByClassName('navbar-button-wrapper')[0];

const nav = document.getElementsByClassName('navbar-menu')[0];
nav.style.transition = "transform 0.3s ease"; // 0.2s delay
nav.style.transform = "translate3d(0, 0, 0)";

const openVar = document.getElementsByClassName('navbar-open')[0];
const closeVar = document.getElementsByClassName('navbar-close')[0];

var presente = false;

button.addEventListener('click', function () {
    if (presente) {
        nav.style.display = 'none';
        openVar.style.opacity = '100';
        closeVar.style.opacity = '0';
        presente = false;
    } else {
        nav.style.display = 'block';
        openVar.style.opacity = '0';
        closeVar.style.display = 'block';
        closeVar.style.opacity = '100';
        presente = true;
    }
});
