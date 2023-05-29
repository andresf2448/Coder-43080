// let usuarios = [{ id: 1, nombre: "juan", edad: 45 }];
// localStorage.setItem("usuarios", JSON.stringify(usuarios));

const agregar = (nombre, edad) => {
  let jsonUsuarios = localStorage.getItem("usuarios");
  let arregloUsuarios = JSON.parse(jsonUsuarios);

  let usuario = {
    id: arregloUsuarios.length + 1,
    nombre: nombre,
    edad: edad,
  };

  arregloUsuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(arregloUsuarios));
};

let formulario = document.getElementById("formulario");
let boton = document.getElementById("ver");
let contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  agregar(inputs[0].value, inputs[1].value);
});

boton.addEventListener("click", () => {
  contenedor.innerHTML = "";
  let jsonUsuarios = localStorage.getItem("usuarios");
  let arregloUsuarios = JSON.parse(jsonUsuarios);

  arregloUsuarios.forEach((usuario) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${usuario.id}</h2>
      <p>Nombre: ${usuario.nombre}</p>
      <b>Edad: ${usuario.edad}</b>
    `;

    contenedor.append(div);
  });
});


// let usuarios = [{ id: 1, nombre: "juan", edad: 45 }];

// let nuevos = usuarios.filter(item => item.nombre !== "pedro");
// console.log(nuevos);