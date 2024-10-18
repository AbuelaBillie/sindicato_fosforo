import turnos_db from "../../turnos_db.js"

export function renderAgenda() {
    turnos_db.forEach((element) => {
        let id_turno = element.hora_turno+element.spot
        let contenedor_turno = document.getElementById(id_turno)
        contenedor_turno.classList.remove("turno-disponible")
        contenedor_turno.title=""
        let item = 
            `
                <p class="agenda-turno-hora">${element.hora_turno}:00</p>
                <p class="agenda-turno-banera">${element.spot}</p>
                <p class="agenda-turno-mascota">${element.mascota.nombre}</p>
                <p class="agenda-turno-servicio">${element.servicio.nombre}</p>
                <p class="agenda-turno-tamano">${element.mascota.tamaño}</p>
                <p class="agenda-turno-obs-mascota">${element.mascota.observaciones}</p>
                <p class="agenda-turno-obs-turno">${element.obs_turno}</p>
            `
        contenedor_turno.innerHTML = item
    });
}
