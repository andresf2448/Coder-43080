// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1320 },
//   { id: 3, nombre: "gorra", precio: 750 },
//   { id: 4, nombre: "media", precio: 1500 },
// ];

// let unido = productos.reduce((acum, item) => `${acum}  ${item.nombre}`, "");
// console.log(unido);

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];
// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

const tareasArr = [];

class Tareas {
  constructor(info) {
    this.id = info.id;
    this.nombre = info.nombre;
    this.descripcion = info.descripcion;
    this.asignacion = info.asignacion;
  }
}

let tarea1 = new Tareas({
  id: 1,
  nombre: "login",
  descripcion: "Crear algoritmo de inicion de sesion",
  asignacion: "jose",
});
tareasArr.push(tarea1);

let tarea2 = new Tareas({
  id: 2,
  nombre: "filtro",
  descripcion: "Se debe crear el algoritmo para crear un filtro de tareas",
  asignacion: "carlos",
});
tareasArr.push(tarea2);

let tarea3 = new Tareas({
  id: 3,
  nombre: "Card crear tarea",
  descripcion: "Diseñar y maquetar card de crear tareas",
  asignacion: "luis",
});
tareasArr.push(tarea3);

let tarea4 = new Tareas({
  id: 4,
  nombre: "Crear modal",
  descripcion: "Crear modal interactivo para creacion de tareas",
  asignacion: "carlos",
});
tareasArr.push(tarea4);

// console.log(
//   tareasArr.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//       return -1;
//     }
//     if (a.nombre < b.nombre) {
//       return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

// console.log(tareasArr);

// forEach, filter, map
//forEach recorre el arreglo
//filter filtrar los elementos que cumplan la propiedad dada
//map transforma los elementos del arreglo

// tareasArr.forEach((item) => {
//   if (item.nombre.includes("ro")) {
//     console.log(item);
//   }
// });

// let filtrados = tareasArr.filter((item) => item.nombre.includes("ro"));
// console.log(filtrados);

// console.log(tareasArr);

let modificados = tareasArr.map(item => {
  return {
    id: item.id,
    nombre: item.nombre + " pagina1",
    descripcion: item.descripcion + " pagina1"
  }
})

// console.log(modificados);

// array.map((item) => {
//   if (item.categoria === "aseo") {
//     item.status = "completada";
//   }
// });
