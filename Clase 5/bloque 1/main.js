//MATH
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.max(4, 3, 5, 6, 77, 8, 9, 78));
// console.log(Math.min(4, 3, 5, 6, 77, 8, 9, 78));

// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.7));
// console.log(Math.round(3.7));
// console.log(Math.round(3.1));
// console.log(Math.round(3.5));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(-1));
// console.log(3.14.toFixed(1));
// console.log(3.14.toFixed(1));
// console.log(Math.trunc(1.3345));

// console.log(Math.random());
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 3) + 7);
// console.log(Math.round(Math.random()  * 10) + 10);
// console.log(Math.round(Math.random()  * 20) + 10);

// const generadorNumeros = (amplitud, inicio) => {
//   return Math.round(Math.random() * amplitud) + inicio;
// }

// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// console.log(generadorNumeros(15, 20));
// let nombres = ["juan", "juanita", "pepito", "camila", "andres"];

// const nombreAleatorio = () => {
//   let indice = Math.round(Math.random() * (nombres.length - 1));

//   return nombres[indice];

// };
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());

// console.log(Date());
// console.log(new Date(2023, 4, 13));

// const navidad = new Date(2023, 11, 24, 23, 58, 59);
// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);

// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());

// const hoy = new Date("May 13, 2023");

// console.log(hoy.getFullYear());
// console.log(hoy.getMonth());
// console.log(hoy.getDay());

const navidad = new Date("December 24, 2023");
const hoy = new Date("May 13, 2023");

console.log(navidad - hoy);
const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);
