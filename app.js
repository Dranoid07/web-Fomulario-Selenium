document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento para manejar el envío del formulario
    document.getElementById("encuestaForm").addEventListener("submit", function (event) {
        // Prevenir el envío del formulario predeterminado
        event.preventDefault();

        // Obtener los valores de nombre y apellido
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;

        // Mostrar el mensaje de agradecimiento
        alert("Gracias por contestar nuestra encuesta, " + nombre + " " + apellido + "!");
    });
});