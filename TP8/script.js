const boton1 = document.getElementById("boton1");
const div1 = document.getElementById("izq");
const boton2 = document.getElementById("boton2");
const div2 = document.getElementById("der");
boton1.addEventListener("click", ocultar);
boton2.addEventListener("click", mostrar);

function ocultar() {
    div1.style.visibility = (div1.style.visibility === "hidden") ? "visible" : "hidden";
    div2.style.visibility = (div2.style.visibility === "visible") ? "hidden" : "visible";
}

function mostrar() {
    div2.style.visibility = (div2.style.visibility === "hidden") ? "visible" : "hidden";
    div1.style.visibility = (div1.style.visibility === "visible") ? "hidden" : "visible";
}
