// Description: Main javascript file for the application.

// window.onload = function() {
//   const dialog = document.querySelector("#error-msg");
//   const form = document.querySelector("#sendForm");
//   const fields = document.querySelectorAll("input,textarea,select");
//   dialog.classList.add("d-none");
//   form.addEventListener("click", function(e) {
//     dialog.classList.remove("d-none");
//     fields.forEach(function(field) {
//       field.style.backgroundColor = "#f8d7da";
//     });
//   });
// };

let btn = document.getElementById("sendForm");
btn.addEventListener("click", validarFormulario);

//Función validar formulario
function validarFormulario(event) {
  // Prevenir el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos
  const cardNumber = document.getElementById("Account").value;
  const cvc = document.getElementById("CVC").value;
  const amount = document.getElementById("Amount").value;
  const firstName = document.getElementById("Firstname").value;
  const lastName = document.getElementById("Lastname").value;
  const city = document.getElementById("City").value;
  const state = document.getElementById("State").value;
  const postalCode = document.getElementById("Zip").value;
  const message = document.getElementById("Message").value;

  // Validar campos
  let errores = [];

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    errores.push("El número de tarjeta debe tener 16 dígitos.");
  }

  if (cvc.length !== 4 || isNaN(cvc)) {
    errores.push("El CVC debe tener 4 dígitos.");
  }

  if (amount <= 0) {
    errores.push("El monto debe ser mayor que 0.");
  }

  if (firstName.trim() === "") {
    errores.push("El nombre es obligatorio.");
  }

  if (lastName.trim() === "") {
    errores.push("El apellido es obligatorio.");
  }

  if (city.trim() === "") {
    errores.push("La ciudad es obligatoria.");
  }

  if (state === "Pick a state") {
    errores.push("Debe seleccionar un estado.");
  }

  if (postalCode.trim() === "" || isNaN(postalCode)) {
    errores.push("El código postal es obligatorio y debe ser numérico.");
  }

  if (message.trim() === "") {
    errores.push("Mensaje es obligatorio.");
  }
  // Mostrar errores o enviar formulario
  const errorMsg = document.getElementById("error-msg");
  if (errores.length > 0) {
    errorMsg.classList.remove("d-none");
    errorMsg.style.backgroundColor = "#f8d7da";
    errorMsg.innerHTML = errores.join("<br>");
  } else {
    errorMsg.classList.add("d-none");
    alert("Formulario enviado correctamente.");
    document.getElementById("formulario").submit();
  }
}
