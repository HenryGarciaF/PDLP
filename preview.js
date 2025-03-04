function verification() {
  const password = document.getElementById("password").value;
const Xada = "Xada";
const Esteban = "Esteban";
const Leidys = "Leidys";
const Henry = "Henry";
    if (password === Xada || password === Leidys || password === Esteban) {
        const paragraph = document.getElementById("paragraph");
        paragraph.innerHTML =
            "¡Oops! : [ Parece que intentaste entrar antes de tiempo, la página aún no esta lista (pero estoy trabajando en ella🧑‍💻, espera un poco más😉).";
    } else if (password === Henry) {
        paragraph.innerHTML = "🤨 ¡Tú no eres yo!";
    } else {
      paragraph.innerHTML = "🤨¡Escríbelo bien!¡ES TU NOMBRE!";
    }
}
