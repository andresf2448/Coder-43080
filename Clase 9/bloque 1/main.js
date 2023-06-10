// fetch(url, config)
let lista = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((response) => {
//     response.forEach((publicacion) => {
//       let li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       lista.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Publicacion coder",
//     body: "nuestra primera publicacion",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let container = document.getElementById("container");

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => {
//     let characters = data.results;

//     characters.forEach((character) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//         <h2>${character.name}</h2>
//         <img src="${character.image}" />
//         <p>${character.gender}</p>
//         <p>${character.status}</p>
//       `;

//       container.append(div);
//     });
//   });

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//           <h4>${producto.nombre}</h4>
//           <p>${producto.precio}</p>
//           <p>Código: ${producto.id}</p>
//           <hr/>
//       `;

//       lista.append(li);
//     });
//   });

let container = document.getElementById("container");

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  let characters = data.results;

  characters.forEach((character) => {
    let div = document.createElement("div");
    div.innerHTML = `
          <h2>${character.name}</h2>
          <img src="${character.image}" />
          <p>${character.gender}</p>
          <p>${character.status}</p>
        `;

    container.append(div);
  });
};

getCharacters();