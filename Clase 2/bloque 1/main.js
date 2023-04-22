/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/
/* 
= asignacion
== comparacion de valor
=== comparacion tanto de valor como de tipo de dato
*/

// if(false){
//   console.log("Entramos");
// }

// console.log("Finalizamos");

// if(0){
//   console.log("Entramos");
// }

// console.log("Finalizamos");

// let nombre = "pepito";

// if(nombre == "andres"){
//   console.log("Hola andres");
// }

// let usuario = prompt("Ingrese un usuario");

// if(usuario === "pepito"){
//   alert(`Bienvenido pepito`);
// }

/* 
estructura del confidiconal if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}
*/

// let respuesta = prompt("Terminaste la tarea???").toLowerCase();

// if(respuesta === "si"){
//   alert("Puedes salir a jugar");
// }else{
//   alert("No puedes salir a jugar");
// }

// let edad = parseInt(prompt("INgrese su edad"));

// if(edad >= 18){
//   alert("Puedes entrar a la fiesta");
// }else{
//   alert("No puedes entrar a la fiesta");
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar en caso de que ninguna de las condiciones sean verdaderas
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad < 14){
//   alert("No puedes entrar a la fiesta");
// }else if(edad < 18){
//   alert("Puedes entrar a la fiesta con un adulto");
// }else{
//   alert("Puedes entrar a la fiesta");
// }

/* 
condicion1 && condicion2 es verdadera cuando ambas condiciones son verdaderas
considicon1 || condicion2 es verdadera cuando al menos una de las dos condiciones es verdadera
*/

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// if(nombre != "" && apellido != ""){
//   alert(`Bienvenido ${nombre} ${apellido}`);
// }else{
//   alert("Nombre y apellido son requeridos");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != "" && (nombre === "ANA" || nombre === "ana")){
//   alert("Hola Ana");
// }else{
//   alert("Error");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre.toLowerCase() === "ana"){
//   alert("Hola Ana");
// }else{
//   alert("Error");
// }