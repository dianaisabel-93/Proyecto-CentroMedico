const nombre_paciente = document.getElementById("name");
const apellido_paciente = document.getElementById("lastName");
const cedula_paciente = document.getElementById("document");
const edad_paciente = document.getElementById("age");
const telefono = document.getElementById("phoneNumber");
const especialidad_paciente = document.getElementById("select")
const formulario_paciente = document.getElementById("tabla-pacientes-form");
const boton_paciente = document.getElementById("button");

formulario_paciente.addEventListener("submit", function(evt){
    evt.preventDefault();
    const paciente = {
        nombre_paciente: nombre_paciente.value,
        apellido_paciente: apellido_paciente.value,
        cedula_paciente: cedula_paciente.value,
        edad_paciente: edad_paciente.value,
        telefono: telefono.value,
        especialidad_paciente :especialidad_paciente.value
    }

    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")

    if(localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }

    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    alert("Paciente registrado con éxito")
})
