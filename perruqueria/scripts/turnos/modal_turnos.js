import turnos_slot from "../../turnos_slot.js"
import turnos_detalle from "../../turno_detalle.js";

export function modalTurnos(fecha_turno) {
    turnos_slot.forEach(element => {
        let contenedor_turno = document.getElementById(element.id)
        let horario_turno = contenedor_turno.id.toString().slice(0, 2)
        contenedor_turno.addEventListener("click", ()=>{
            if (contenedor_turno.classList.contains("turno-disponible")) {
                Swal.fire({
                    icon: "warning",
                    text: `¿Reservar ${fecha_turno} a las ${horario_turno}:00HS?`,
                    showCloseButton: true
                });
            }else{
                Swal.fire({
                    icon: "warning",
                    html: `${turnos_detalle.id}`,
                    showCloseButton: true
                });
            }
        })
    });
}

