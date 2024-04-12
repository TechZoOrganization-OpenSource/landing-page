document.addEventListener('DOMContentLoaded', function () {
    var burgerButton = document.querySelector('.burger-menu');
    var navbar = document.querySelector('.navbar');

    burgerButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
