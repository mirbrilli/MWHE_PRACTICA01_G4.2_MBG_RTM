const html = document.querySelector("html");
html.setAttribute("data-bs-theme", "dark");

document.addEventListener("DOMContentLoaded", () => {
    // EVENTO Y EFECTO CON JQUERY
    $("#myBtn").click(function(){
        alert("Has hecho click!");
    });

    // TYPED JS
    var typed = new Typed('#element', {
      strings: ['Hola!', 'Somos Miriam, Marina y Rosa', 'Unas chicas que viajan el mundo y lo documentan', '¿Estás listo?', '¡INCIAR LA AVENTURA!'],
      typeSpeed: 50,
      loop: Infinity,
    });
});