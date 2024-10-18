import {fecha_a_texto, formatFecha} from "../utils/fechas.js";

export function cambiarAgenda() {
    let input_calendario = document.getElementById("agenda-turnos-input-calendario")
    let btn_calendario = document.getElementById("agenda-turnos-btn-calendario")
    let fecha_agenda = document.getElementById("agenda-turnos-label-fecha")
    let btn_volver = document.getElementById("agenda-turnos-btn-volver")

    btn_calendario.addEventListener("click", () => {
        input_calendario.showPicker()

    })
    input_calendario.addEventListener("change", () => {
        const fechaHoy = formatFecha(new Date());
  
        if (fechaHoy != input_calendario.value) {
            fecha_agenda.innerText= fecha_a_texto(input_calendario.value)
            btn_volver.classList.remove("oculto")
        }else{
            fecha_agenda.innerText= "HOY"
            btn_volver.classList.add("oculto")
        }
    })
}

