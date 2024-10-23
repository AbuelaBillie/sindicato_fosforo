import turnos_slot from "../../turnos_slot.js"
import turnos_detalle from "../../turno_detalle.js"
import { fecha_a_texto } from "../utils/fechas.js";

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
                })
                .then(response => {
                    if (response.isConfirmed) {
                        Swal.fire({
                            html: 
                            `<div class="modal-turno-asignado">
                    <h2>RESERVAR TURNO</h2>
                    <h3>${fecha_a_texto(turnos_detalle.fecha_turno)} - ${turnos_detalle.hora_turno}:00HS</h3>
                    <section>
                        <div class="row">
                            <h3>MASCOTA</h3>
                        </div>
                        <div class="column">
                            <label for="">Nombre</label>
                            <input type="text" value="">
                        </div>
                        <div class="column">
                            <label for="">Tamaño</label>
                            <input type="text" value="">
                        </div>
                        <div class="column">
                            <label for="">Observaciones</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </section>
                    <section>
                        <div class="row">
                            <h3>TUTOR</h3>
                        </div>
                        <div class="column">
                            <label for="">Nombre</label>
                            <input type="text" value="">
                        </div>
                        <div class="column">
                            <label for="">Teléfono</label>
                            <input type="tel" value="" >
                        </div>
                        <div class="column">
                            <label for="">Teléfono Alternativo</label>
                            <input type="tel" value="">
                        </div>
                        <div class="column">
                            <label for="">Email</label>
                            <input type="email" value="">
                        </div>
                    </section>
                    <section>
                        <div class="row">
                            <h3>DETALLE</h3>
                        </div>
                        <div class="column">
                            <label for="">Servicio</label>
                            <input type="text" value="" >
                        </div>
                        <div class="column">
                            <label for="">Fecha turno</label>
                            <input type="date" value="">
                        </div>
                        <div class="column">
                            <label for="">Hora turno</label>
                            <input type="time" value="" >
                        </div>
                        <div class="column">
                            <label for="">Observaciones</label>
                            <textarea name="" id="" disabled>Retira Julia Goldfish</textarea>
                        </div>
                        <div class="column botonera">
                            <button type="button" class="reservar">Reservar</button>
                        </div>
                    </section>
                            </div>`,
                            showCloseButton: true,
                            showConfirmButton: false
                        });
                    }
                })
            }else{
                Swal.fire({
                    html: 
                    `<div class="modal-turno-asignado">
            <h2>TURNO RESERVADO</h2>
            <h3>${fecha_a_texto(turnos_detalle.fecha_turno)} - ${turnos_detalle.hora_turno}:00HS</h3>
            <h4>${turnos_detalle.servicio.nombre} - <span>${turnos_detalle.mascota.tamaño}</span> - <span>${turnos_detalle.spot}</span></h4>
            <section>
                <div class="row">
                    <h3>MASCOTA</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </div>
                <div class="column">
                    <label for="">Nombre</label>
                    <input type="text" value="${turnos_detalle.mascota.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="">Tamaño</label>
                    <input type="text" value="${turnos_detalle.mascota.tamaño}" disabled>
                </div>
                <div class="column">
                    <label for="">Observaciones</label>
                    <textarea name="" id="" disabled>${turnos_detalle.mascota.observaciones}</textarea>
                </div>
            </section>
            <section>
                <div class="row">
                    <h3>TUTOR</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </div>
                <div class="column">
                    <label for="">Nombre</label>
                    <input type="text" value="${turnos_detalle.mascota.tutor.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="">Teléfono</label>
                    <input type="tel" value="${turnos_detalle.mascota.tutor.tel}" disabled>
                </div>
                <div class="column">
                    <label for="">Teléfono Alternativo</label>
                    <input type="tel" value="${turnos_detalle.mascota.tutor.tel_alt}" disabled>
                </div>
                <div class="column">
                    <label for="">Email</label>
                    <input type="email" value="${turnos_detalle.mascota.tutor.email}" disabled>
                </div>
            </section>
            <section>
                <div class="row">
                    <h3>DETALLE</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </div>
                <div class="column">
                    <label for="">Servicio</label>
                    <input type="text" value="${turnos_detalle.servicio.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="">Fecha turno</label>
                    <input type="date" value="${turnos_detalle.fecha_turno}" disabled>
                </div>
                <div class="column">
                    <label for="">Hora turno</label>
                    <input type="time" value="${turnos_detalle.hora_turno}:00" disabled>
                </div>
                <div class="column">
                    <label for="">Recepción reserva</label>
                    <input type="text" value="${turnos_detalle.servicio.nombre}" disabled>
                </div>
                <div class="column">
                    <label for="">Carga en sistema</label>
                    <input type="date" value="2024-10-15" disabled>
                </div>
                <div class="column">
                    <label for="">Observaciones</label>
                    <textarea name="" id="" disabled>Retira Julia Goldfish</textarea>
                </div>
                <div class="column botonera">
                    <button type="button" class="reprogramar">Reprogramar</button>
                    <button type="button" class="anular">Anular</button>
                </div>
            </section>
                    </div>`,
                    showCloseButton: true,
                    showConfirmButton: false
                });
            }
        })
    });
}

