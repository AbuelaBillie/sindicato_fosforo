import { renderAgenda } from "./turnos/render_agenda.js";
import { cambiarAgenda } from "./turnos/cambiar_agenda.js";


window.addEventListener("load", function () {
    renderAgenda()
    cambiarAgenda()
})