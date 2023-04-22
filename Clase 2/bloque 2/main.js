/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

//i++  i = i + 1

// for(let i = 0; i <= 100; i++){
//   console.log(i);
// }

// let numero = parseInt(prompt("Ingrese un numero"));

// for(let i = 1; i <= 10; i++){
//   let resultado = numero * i;
//   alert(`${numero} * ${i} = ${resultado}`);
// }

// for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for(let i = 0; i < 10; i++){
//   if(i === 6){
//     continue;
//   }

//   console.log(i);
// }

// for(let i = 1; i <= 100; i++){
//   if(i % 2 === 1){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del bucle while

while(condicion){
  codigo a ejecutar siempre que la condicion sea verdadera
}
*/
/* 
CUIDADO CON EL BUCLE INFINITO
let repetir = true;

while(repetir){
  console.log("Hola");
} */

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "pepito"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del do while
do{
  codigo a ejecutar por primera vez y siempre que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while(repetir){
//   console.log("entramos");
// }

// do{
//   console.log("entramos");
// }while(repetir);

/* 
estructura del switch
switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor es igual a valor1
    break;

  case valor2:
    codigo a ejecutar cuando el valor es igual a valor2
    break;
  .
  .
  .
  default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los anteriores valores
    break;
}
*/

// let moneda = "usd";

// switch(moneda){
//   case "ars":
//     console.log("moneda de argentina");
//     break;

//   case "cop":
//     console.log("moneda de colombia");
//     break;

//   case "clp":
//     console.log("moneda de chile");
//     break;

//   default:
//     console.log("moneda desconocida");
//     break;
// }

let entrada = prompt("Ingrese un nombre");

while(entrada != "ESC"){
  switch (entrada) {
    case "ANA":
      alert("Hola ANA");
      break;
  
    case "JUAN":
      alert("Hola JUAN");
      break;

    default:
      alert("Quien eres?");
      break;
  }

  entrada = prompt("Ingrese un nombre");
}