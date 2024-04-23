document.addEventListener('DOMContentLoaded', function () {
    var burgerButton = document.querySelector('.burger-menu');
    var navbar = document.querySelector('.navbar');

    burgerButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

function mostrarMensaje() {
    alert("¡Registro exitoso! Gracias por unirse al cambio :)");
    return true;    
}

function mostrarMensaje() {
    Swal.fire({
        title: "Registro exitoso",
        text: "Te contactaremos pronto",
        icon: "success"
      });
      return false;
}