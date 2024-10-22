import { renderAgenda } from "./turnos/render_agenda.js";
import { cambiarAgenda } from "./turnos/cambiar_agenda.js";
import { formatFecha } from "./utils/fechas.js";
import turnos2110_db from "../turnos2110_db.js";

window.addEventListener("load", function () {
    // const fechaHoy = formatFecha(new Date())
    // renderAgenda(formatFecha(fechaHoy)) 
    renderAgenda(turnos2110_db) //HARCODE
    cambiarAgenda()
})