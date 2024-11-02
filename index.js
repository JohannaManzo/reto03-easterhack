let seccionCalculadora = document.getElementById("seccionCalculadora");
seccionCalculadora.style.display = "none";

// BIENVENIDA AL USUARIO
const bienvenidaUsuario = () => {
  let saludoUsuario = document.getElementById("saludoUsuario");
  let nombreUsuario = document.getElementById("nombreUsuario").value;
  if (nombreUsuario != "") {
    seccionLogIn.style.display = "none";
  }
  if (nombreUsuario == "") {
    saludoUsuario.innerHTML = "Lo siento, debes ingresar un nombre";
    seccionCalculadora.style.display = "none";
  } else {
    saludoUsuario.innerHTML = "Convirtamos tú dinero, " + nombreUsuario;
    seccionCalculadora.style.display = "flex";
  }
};

// BOTON DE BIENVENIDA AL USUARIO
let signIn = document.getElementById("signIn");
signIn.addEventListener("click", bienvenidaUsuario);

// SCRIPT MONEDAS
let divisaSelect = document.getElementById("divisaSelect");

divisaSelect.addEventListener("change", () => {
  let montoInicial = document.getElementById("montoInicial").value;
  let imagenId = document.getElementById("imagenId");
  if ("Dolar" == divisaSelect.value) {
    imagenId.setAttribute("src", divisaSelect.value + ".png");
    let resultado = montoInicial / 920;
    console.log(resultado);
    resultado = resultado.toFixed(2);
    conversion.value = resultado + "U$D";
  }
  if ("Blue" == divisaSelect.value) {
    imagenId.setAttribute("src", divisaSelect.value + ".png");
    console.log(imagenId);
    let resultado = montoInicial / 1045;
    console.log(resultado);
    resultado = resultado.toFixed(2);
    conversion.value = resultado + "U$D";
  }
  if ("Euro" == divisaSelect.value) {
    imagenId.setAttribute("src", divisaSelect.value + ".png");
    let resultado = montoInicial / 1130;
    console.log(resultado);
    resultado = resultado.toFixed(2);
    conversion.value = resultado + "€";
  }
});

// let imagenId = document.getElementById("imagenId");
//imagenId.setAttribute("src", divisaSelect.value + ".png");

// SCRIPT DARK MODE
let foo = document.getElementById("foo");
let footerBtn = document.getElementById("footerBtn");
let main = document.getElementById("main");

footerBtn.addEventListener("click", () => {
  main.classList.toggle("darkMode");
  foo.classList.toggle("darkMode");
});
