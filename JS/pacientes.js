function mostrarPacientes (){
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")

    if(localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }

    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePaciente = fila.insertCell()
        let celdaApellidoPaciente = fila.insertCell()
        let celdaNumeroCedulaPaciente = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdatelefono = fila.insertCell()
        let celdaEspecialidadPaciente = fila.insertCell()

        celdaNombrePaciente.textContent = paciente.nombre_paciente
        celdaApellidoPaciente.textContent = paciente.apellido_paciente
        celdaNumeroCedulaPaciente.textContent = paciente.cedula_paciente
        celdaEdad.textContent = paciente.edad_paciente
        celdatelefono.textContent = paciente.telefono
        celdaEspecialidadPaciente.textContent = paciente.especialidad_paciente
    });  
    }

    mostrarPacientes()