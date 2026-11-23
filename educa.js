
function comprobarRespuestas() {

    let respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
    let respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
    let respuesta3 = document.querySelector('input[name="pregunta3"]:checked');

    let resultado = document.getElementById("resultado");

    if (respuesta1 == null || respuesta2 == null || respuesta3 == null) {
        resultado.innerHTML = "Debes responder todas las preguntas.";
        return;
    }

    let puntos = 0;

    if (respuesta1.value == "correcta") {
        puntos++;
    }

    if (respuesta2.value == "correcta") {
        puntos++;
    }

    if (respuesta3.value == "correcta") {
        puntos++;
    }

    resultado.innerHTML = "Obtuviste " + puntos + " de 3 puntos.";

    if (puntos == 3) {
        resultado.innerHTML += " ¡Excelente trabajo!";
    } else if (puntos == 2) {
        resultado.innerHTML += " ¡Muy bien! Sigue aprendiendo.";
    } else {
        resultado.innerHTML += " Sigue practicando.";
    }
}
