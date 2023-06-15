const form = document.querySelector(".eighth__content-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const first_name = e.target.querySelector('input[name="first_name"]').value;
  const last_name = e.target.querySelector('input[name="last_name"]').value;
  const email = e.target.querySelector('input[name="email"]').value;
  const cellphone = e.target.querySelector('input[name="cellphone"]').value;
  const message = e.target.querySelector('textarea[name="message"]').value;

  console.log(first_name);
  console.log(last_name);
  console.log(email);
  console.log(cellphone);
  console.log(message);

  if (!first_name || !last_name || !email || !cellphone || !message)
    return Swal.fire({
      title: "¡Error!",
      iconColor: "#d30c0c",
      text: "Por favor, complete todos los datos antes de continuar",
      icon: "error",
      confirmButtonText: "OK",
    });
  else form.submit();

  // Validación //
});
