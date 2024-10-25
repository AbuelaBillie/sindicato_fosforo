import turnos_slot from "../../turnos_slot.js"

export function renderAgenda(fecha) {
    limpiarAgenda()
    let turnos_dia = fecha //PEDIR TURNOS DEL DIA A LA API CON EL PARAMETRO fecha
    
    turnos_dia.forEach((element) => {
        let id_turno = element.hora_turno + element.spot
        let contenedor_turno = document.getElementById(id_turno)
        contenedor_turno.innerHTML = ""
        contenedor_turno.classList.remove("turno-disponible")
        contenedor_turno.title = ""
        let item =
            `
                <p class="agenda-turno-hora">${element.hora_turno}:00</p>
                <p class="agenda-turno-spot">${element.spot}</p>
                <p class="agenda-turno-mascota">${element.mascota.nombre}</p>
                <p class="agenda-turno-servicio">${element.servicio.nombre}</p>
                <p class="agenda-turno-tamano">${element.mascota.tamaño}</p>
                <p class="agenda-turno-obs-mascota">${element.mascota.observaciones}</p>
                <p class="agenda-turno-obs-turno">${element.obs_turno}</p>
            `
        contenedor_turno.innerHTML = item
    });
}

function limpiarAgenda() {
    turnos_slot.forEach(element => {
        let contenedor_turno = document.getElementById(element.id)
        contenedor_turno.classList.add("turno-disponible")
        contenedor_turno.title = "RESERVAR"
        contenedor_turno.innerHTML = `
                <p class="agenda-turno-hora">${element.hora}:00</p>
                <p class="agenda-turno-spot">${element.spot}</p>
                <p class="agenda-turno-mascota">...</p>`
    });
}