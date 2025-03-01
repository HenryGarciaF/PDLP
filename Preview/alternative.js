const password = "123456789";
function contraseña() {
const insertedPassword = document.getElementById("password").value;
const linkDeXada = document.getElementById("link");
const xada = "Hola Xada, tu link de acceso es el siguiente: " + linkDeXada;
if (insertedPassword === "123456789") {
  document.getElementById("p").innerHTML = "Hola Xada, tu link de acceso es el siguiente: " + linkDeXada;
} else {
  document.getElementById("p").innerHTML = "Lo siento pero tu contraseña no parece ser válida, porfa corrígela";
}
}
function hola() {
  const parrafo = document.getElementById("p");
  const texto = "hola";
  console.log("hola");
}