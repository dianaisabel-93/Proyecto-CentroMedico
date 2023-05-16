const nombre = document.getElementById("name");
const apellido = document.getElementById("lastName");
const cedula = document.getElementById("document");
const especialidad = document.getElementById("select");
const consultorio = document.getElementById("consultorio");
const correo = document.getElementById("email");
const formulario = document.getElementById("registro-medico-form");
const boton = document.getElementById("button")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const medico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        especialidad: especialidad.value,
        consultorio: consultorio.value,
        correo: correo.value,
    }

    let medicos = []
    let localMedicos = localStorage.getItem("medicos")

    if(localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    alert("Medico registrado con exito")
})