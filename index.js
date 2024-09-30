// BIENVENIDA AL USUARIO
const bienvenidaUsuario = () => {
  let saludoUsuario = document.getElementById("saludoUsuario");
  let nombreUsuario = document.getElementById("nombreUsuario").value;
  if (nombreUsuario == "") {
    saludoUsuario.innerHTML = "Lo siento, debes ingresar un nombre";
  } else {
    saludoUsuario.innerHTML = "BIENVENIDX " + nombreUsuario;
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

//     footerBtn.addEventListener("click", () => {
//      if (foo.style.background != "red") {
//      foo.style.background = "red";
//    foo.style.color = "white";
//  } else {
//   foo.style.background = "pink";
//  foo.style.color = "black";
// }
//});

footerBtn.addEventListener("click", () => {
  main.classList.toggle("darkMode");
  foo.classList.toggle("darkMode");
});
