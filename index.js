let seccionCalculadora = document.getElementById("seccionCalculadora");
seccionCalculadora.style.display = "none";

// BIENVENIDA AL USUARIO
const bienvenidaUsuario = () => {
  let saludoUsuario = document.getElementById("saludoUsuario");
  let nombreUsuario = document.getElementById("nombreUsuario").value;
  if (nombreUsuario == "") {
    saludoUsuario.innerHTML = "Lo siento, debes ingresar un nombre";
    seccionCalculadora.style.display = "none";
  } else {
    saludoUsuario.innerHTML = "Convirtamos tú dinero, " + nombreUsuario;
    seccionCalculadora.style.display = "block";
  }
};

// BOTON DE BIENVENIDA AL USUARIO
let signIn = document.getElementById("signIn");
signIn.addEventListener("click", bienvenidaUsuario);

// SCRIPT MONEDAS
let divisaSelect = document.getElementById("divisaSelect");

divisaSelect.addEventListener("change", () => {
  let montoInicial = document.getElementById("montoInicial").value;
  if ("Dolar" == divisaSelect.value) {
    let resultado = montoInicial / 920;
    console.log(resultado);
    resultado = resultado.toFixed(2);
    conversion.value = resultado + "U$D";
  }
  if ("Dolar Blue" == divisaSelect.value) {
    let resultado = montoInicial / 1045;
    console.log(resultado);
    resultado = resultado.toFixed(2);
    conversion.value = resultado + "U$D";
  }
  if ("Euro" == divisaSelect.value) {
    let resultado = montoInicial / 1130;
    console.log(resultado);
    resultado = resultado.toFixed(2);
    conversion.value = resultado + "€";
  }
});

// SCRIPT DARK MODE
let foo = document.getElementById("foo");
let footerBtn = document.getElementById("footerBtn");
let main = document.getElementById("main");

footerBtn.addEventListener("click", () => {
  main.classList.toggle("darkMode");
  foo.classList.toggle("darkMode");
});
