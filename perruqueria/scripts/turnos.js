import { renderAgenda } from "./turnos/render_agenda.js";
import { cambiarAgenda } from "./turnos/cambiar_agenda.js";
import turnos2110_db from "../turnos2110_db.js";

window.addEventListener("load", function () {
    renderAgenda(turnos2110_db)
    cambiarAgenda()
})