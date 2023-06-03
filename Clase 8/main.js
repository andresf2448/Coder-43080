let boton = document.getElementById("boton");

//SWEET ALERT
// boton.addEventListener("click", () => {
//   Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Do you want to continue?",
//     icon: "error",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: true,
//     timer: 5000,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //codigo personalizado a ejecutar

      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
});
