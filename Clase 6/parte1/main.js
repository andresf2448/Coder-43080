// let boton = document.getElementById("boton");

// const respuesta = () => {
//   alert("click");
// }

//Primera forma de agregar un evento
// boton.addEventListener("click", respuesta);

//Segunda forma de agregar un evento
// boton.onclick = respuesta;

// let evento = prompt("Ingrese el evento");
// boton.addEventListener(evento, respuesta);

// const respuesta = (nombre) => {
// alert(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => respuesta("andres"));

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// boton.addEventListener("mousedown", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "verde";
// });

let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "amarillo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "verde";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

let formuario = document.getElementById("formulario");
let info = document.getElementById("info");

formuario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  // if(!inputs[0].value.includes("@")){
  //   inputs[0].value = "";

  //   let div = document.createElement("div");
  //   div.innerHTML = "No está el @";
  //   document.body.append(div);
  // }

  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Nombre: ${inputs[0].value}</h2>
    <b>Edad: ${inputs[1].value}</b>
  `;

  info.append(div);
});
