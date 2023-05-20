//LOCALSTORAGE
// console.log(localStorage);

// localStorage.setItem("nombre", "mariana"); //guardar informacion
// localStorage.setItem("numero", "1");
// localStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre"); // recuperar datos del storage
// let valor = localStorage.getItem("valor");
// let numero = localStorage.getItem("numero");

// console.log(nombre, valor, numero);

//SESSIONSTORAGE
// console.log(sessionStorage);

// sessionStorage.setItem("nombre", "mariana"); //guardar informacion
// sessionStorage.setItem("numero", "1");
// sessionStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre"); // recuperar datos del storage
// let valor = localStorage.getItem("valor");
// let numero = localStorage.getItem("numero");

// console.log(nombre, valor, numero);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

//ELIMINAR EL STORAGE
// localStorage.removeItem("nombre"); //elimina por clave
// localStorage.clear(); // elimina todo el localStorage

// let objeto = {
//   nombre: "andres",
//   edad: 26,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [1, 2, 3, 4, 5];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let arreglo = localStorage.getItem("arreglo");
// let objeto = localStorage.getItem("objeto");

// console.log(JSON.parse(arreglo));
// console.log(JSON.parse(objeto));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardar(item.id, JSON.stringify(item))
// })

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvendi@ ${usuario} nuevamente`);
// } else {
//   usuario = prompt("Ingrese el usuario");
//   alert(`Bienvenid@ ${usuario} es tu primera vez`);
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let boton = document.getElementById("eliminar");
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "El carrito eestá vacío";
  document.body.append(div);
}

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <hr />
  `;
  document.body.append(div);
});

boton.addEventListener("click", () => {
  localStorage.clear();
  alert("carrito eliminado");
  location.reload();
});
