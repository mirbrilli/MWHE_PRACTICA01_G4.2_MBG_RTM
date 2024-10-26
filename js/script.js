const html = document.querySelector("html");
html.setAttribute("data-bs-theme", "dark");

document.addEventListener("DOMContentLoaded", () => {
    // EVENTO Y EFECTO CON JQUERY
    $("#myBtn").click(function(){
        alert("Has hecho click!");
    });

    // TYPED JS
    // var typed = new Typed('#element', {
    //   strings: ['Hola!', 'Somos Miriam, Marina y Rosa', 'Unas chicas que viajan el mundo y lo documentan', '¿Estás listo?', '¡INCIAR LA AVENTURA!'],
    //   typeSpeed: 50,
    //   loop: Infinity,
    // });
    var typed = new Typed('#element', {
      strings: ['Hola!', 'Somos Miriam, Marina y Rosa', 'Unas chicas que viajan el mundo y lo documentan', '¿Estás listo?'],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      showCursor: false,
      onComplete: function() {
        // Espera un segundo (1000 ms) y luego reemplaza el texto con un botón
        setTimeout(function() {
          document.getElementById("element").innerHTML = '<button onclick="miFuncion()">INICIAR LA AVENTURA</button>';
        }, 1000);
      }
    });
});