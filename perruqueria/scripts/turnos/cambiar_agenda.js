import turnos2110_db from "../../turnos2110_db.js";
import turnos_db from "../../turnos_db.js";
import {fecha_a_texto, formatFecha} from "../utils/fechas.js";
import { renderAgenda  } from "./render_agenda.js";
import { modalTurnos } from "./modal_turnos.js";

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
            renderAgenda(turnos_db)
        }else{
            fecha_agenda.innerText= "HOY"
            btn_volver.classList.add("oculto")            
            renderAgenda(turnos2110_db)
        }

        modalTurnos(fecha_a_texto(input_calendario.value))
    })

    btn_volver.addEventListener("click", ()=>{
        fecha_agenda.innerText= "HOY"
        btn_volver.classList.add("oculto")            
        renderAgenda(turnos2110_db)
    })

    
}

